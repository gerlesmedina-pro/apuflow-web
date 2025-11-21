import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { courses } from '../data/mockData';
import { Search, Check, X, User, BookOpen, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [foundUser, setFoundUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    // Security check
    if (!user || (user.email !== 'gerles.medina@apuflow.com' && user.role !== 'admin')) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Acceso Denegado</h2>
                <p>No tienes permisos para ver esta página.</p>
                <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '1rem' }}>
                    Volver al Inicio
                </button>
            </div>
        );
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setFoundUser(null);

        try {
            const q = query(collection(db, "users"), where("email", "==", searchTerm));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setFoundUser({ ...userData, docId: querySnapshot.docs[0].id });
            } else {
                setMessage({ type: 'error', text: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error("Error searching user:", error);
            setMessage({ type: 'error', text: 'Error al buscar usuario' });
        }
        setLoading(false);
    };

    const toggleCourse = async (courseId, isEnrolled) => {
        if (!foundUser) return;
        setLoading(true);

        try {
            const userRef = doc(db, "users", foundUser.docId);

            if (isEnrolled) {
                // Remove course
                await updateDoc(userRef, {
                    purchased_courses: arrayRemove(courseId)
                });
                setFoundUser(prev => ({
                    ...prev,
                    purchased_courses: prev.purchased_courses.filter(id => id !== courseId)
                }));
                setMessage({ type: 'success', text: `Curso removido: ${courseId}` });
            } else {
                // Add course
                await updateDoc(userRef, {
                    purchased_courses: arrayUnion(courseId)
                });
                setFoundUser(prev => ({
                    ...prev,
                    purchased_courses: [...(prev.purchased_courses || []), courseId]
                }));
                setMessage({ type: 'success', text: `Curso agregado: ${courseId}` });
            }
        } catch (error) {
            console.error("Error updating course:", error);
            setMessage({ type: 'error', text: 'Error al actualizar curso' });
        }
        setLoading(false);
    };

    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                    <Shield size={24} color="white" />
                </div>
                Panel de Administración
            </h1>

            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Buscar Estudiante</h2>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="email"
                            placeholder="Correo del estudiante..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 3rem',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                color: 'var(--text-main)'
                            }}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? 'Buscando...' : 'Buscar'}
                    </button>
                </form>

                {message && (
                    <div style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        borderRadius: '8px',
                        background: message.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                        color: message.type === 'error' ? '#ef4444' : '#22c55e',
                        border: `1px solid ${message.type === 'error' ? '#ef4444' : '#22c55e'}`
                    }}>
                        {message.text}
                    </div>
                )}
            </div>

            {foundUser && (
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User size={32} color="var(--primary-color)" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{foundUser.name || 'Sin Nombre'}</h3>
                            <p style={{ color: 'var(--text-muted)', margin: 0 }}>{foundUser.email}</p>
                            <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', marginTop: '0.5rem', display: 'inline-block' }}>
                                UID: {foundUser.uid}
                            </span>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <BookOpen size={20} /> Gestión de Cursos
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {courses.map(course => {
                            const isEnrolled = foundUser.purchased_courses?.includes(course.id);
                            return (
                                <div key={course.id} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1rem',
                                    background: isEnrolled ? 'rgba(34, 197, 94, 0.05)' : 'var(--surface-light)',
                                    border: isEnrolled ? '1px solid #22c55e' : '1px solid var(--glass-border)',
                                    borderRadius: '8px'
                                }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{course.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {course.id}</div>
                                    </div>
                                    <button
                                        onClick={() => toggleCourse(course.id, isEnrolled)}
                                        disabled={loading}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            background: isEnrolled ? '#ef4444' : '#22c55e',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        {isEnrolled ? (
                                            <> <X size={16} /> Revocar </>
                                        ) : (
                                            <> <Check size={16} /> Matricular </>
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
