import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion
} from 'firebase/firestore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Get user data from Firestore
                const userDocRef = doc(db, 'users', firebaseUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUser({ ...firebaseUser, ...userDoc.data() });
                } else {
                    // Fallback if doc doesn't exist (shouldn't happen if registered correctly)
                    setUser(firebaseUser);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, message: error.message };
        }
    };

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const firebaseUser = result.user;

            // Check if user exists in Firestore
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                // Create user document if it doesn't exist
                await setDoc(userDocRef, {
                    uid: firebaseUser.uid,
                    name: firebaseUser.displayName,
                    email: firebaseUser.email,
                    role: 'student',
                    purchased_courses: [],
                    createdAt: new Date().toISOString()
                });
            }

            return { success: true };
        } catch (error) {
            console.error("Google Login error:", error);
            return { success: false, message: error.message };
        }
    };

    const register = async (userData) => {
        try {
            const { email, password, name } = userData;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            // Create user document in Firestore
            await setDoc(doc(db, 'users', firebaseUser.uid), {
                uid: firebaseUser.uid,
                name: name,
                email: email,
                role: 'student',
                purchased_courses: [], // Array of course IDs
                createdAt: new Date().toISOString()
            });

            return { success: true };
        } catch (error) {
            console.error("Registration error:", error);
            return { success: false, message: error.message };
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const enrollCourse = async (courseId) => {
        if (!user || !user.uid) return false;

        try {
            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, {
                purchased_courses: arrayUnion(courseId)
            });

            // Update local state immediately for UI responsiveness
            setUser(prev => ({
                ...prev,
                purchased_courses: [...(prev.purchased_courses || []), courseId]
            }));

            return true;
        } catch (error) {
            console.error("Enrollment error:", error);
            return false;
        }
    };

    const hasAccess = (courseId) => {
        if (!user) return false;
        // Check if user is admin (hardcoded for safety as requested) or has purchased the course
        if (user.email === 'gerles.medina@apuflow.com' || user.role === 'admin') return true;
        return user.purchased_courses?.includes(courseId);
    };

    return (
        <AuthContext.Provider value={{ user, login, loginWithGoogle, register, logout, enrollCourse, hasAccess, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
