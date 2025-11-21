import React, { useState } from 'react';
import {
    User, Shield, Award, CreditCard, Mail, Phone, MapPin,
    Camera, Edit2, CheckCircle, Clock, Download, ExternalLink, BookOpen, Play
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/mockData';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('courses'); // Default to courses for better UX

    const tabs = [
        { id: 'courses', label: 'Mis Cursos', icon: BookOpen },
        { id: 'personal', label: 'Información Personal', icon: User },
        { id: 'security', label: 'Seguridad', icon: Shield },
        { id: 'certificates', label: 'Certificados', icon: Award },
    ];

    // Safe defaults
    const userName = user?.name || user?.displayName || 'Usuario';
    const userEmail = user?.email || 'No registrado';
    const userRole = user?.role === 'admin' ? 'Administrador' : 'Estudiante';
    const userAvatar = user?.photoURL || "https://ui-avatars.com/api/?name=" + userName + "&background=0D8ABC&color=fff";
    const userCertificates = user?.achievements || [];

    // Get enrolled courses
    const enrolledCourses = courses.filter(course => user?.purchased_courses?.includes(course.id));

    return (
        <div className="fade-in">
            <div className="container" style={{ padding: '2rem 0' }}>
                {/* Profile Header */}
                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--surface-light)' }}>
                            <img src={userAvatar} alt={userName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <button className="btn-primary" style={{ position: 'absolute', bottom: '0', right: '0', padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Camera size={18} />
                        </button>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <h1 style={{ fontSize: '2rem', margin: 0 }}>{userName}</h1>
                            <span style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary-color)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '600' }}>
                                {userRole}
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', maxWidth: '600px' }}>
                            Ingeniero Civil apasionado por la hidráulica y la simulación numérica. Buscando siempre aprender nuevas tecnologías y metodologías.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Lima, Perú</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> {userEmail}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{enrolledCourses.length}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cursos</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{userCertificates.length}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Certificados</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>{user?.xp || 0}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Puntos XP</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
                    {/* Sidebar Navigation */}
                    <div className="glass-panel" style={{ padding: '1rem', height: 'fit-content' }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '1rem',
                                        background: activeTab === tab.id ? 'var(--primary-color)' : 'transparent',
                                        color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '1rem',
                                        fontWeight: activeTab === tab.id ? '600' : '400',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <tab.icon size={20} />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        {activeTab === 'courses' && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Mis Cursos Matriculados</h2>
                                {enrolledCourses.length > 0 ? (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                        {enrolledCourses.map(course => (
                                            <div key={course.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                                                    <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.8rem', color: 'white' }}>
                                                        {course.level}
                                                    </div>
                                                </div>
                                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{course.title}</h3>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> {course.duration}</span>
                                                    </div>
                                                    <div style={{ marginTop: 'auto' }}>
                                                        <Link to={`/player/${course.id}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                            <Play size={16} /> Continuar Curso
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                        <BookOpen size={64} style={{ opacity: 0.3, marginBottom: '1.5rem' }} />
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No estás matriculado en ningún curso</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Explora nuestro catálogo y comienza tu aprendizaje hoy mismo.</p>
                                        <Link to="/cursos" className="btn-primary">
                                            Explorar Cursos
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'personal' && (
                            <div className="fade-in">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: '1.5rem' }}>Información Personal</h2>
                                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Edit2 size={16} /> Editar
                                    </button>
                                </div>

                                <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Bio</label>
                                        <textarea
                                            defaultValue="Ingeniero Civil apasionado por la hidráulica y la simulación numérica. Buscando siempre aprender nuevas tecnologías y metodologías."
                                            style={{ width: '100%', padding: '1rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)', minHeight: '100px' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Nombre Completo</label>
                                        <input type="text" defaultValue={userName} style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                                        <input type="email" defaultValue={userEmail} style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Teléfono</label>
                                        <input type="tel" defaultValue="+51 987 654 321" style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Ubicación</label>
                                        <input type="text" defaultValue="Lima, Perú" style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Empresa / Universidad</label>
                                        <input type="text" defaultValue="Universidad Nacional de Ingeniería" style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Cargo</label>
                                        <input type="text" defaultValue="Estudiante de Maestría" style={{ width: '100%', padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Seguridad de la Cuenta</h2>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Cambiar Contraseña</h3>
                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                                        <input type="password" placeholder="Contraseña Actual" style={{ padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                        <input type="password" placeholder="Nueva Contraseña" style={{ padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                        <input type="password" placeholder="Confirmar Nueva Contraseña" style={{ padding: '0.75rem', background: 'var(--background)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                                        <button className="btn-primary" style={{ width: 'fit-content' }}>Actualizar Contraseña</button>
                                    </form>
                                </div>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#ef4444' }}>Zona de Peligro</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten cuidado.</p>
                                    <button style={{ padding: '0.75rem 1.5rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                                        Eliminar Cuenta
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'certificates' && (
                            <div className="fade-in">
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Mis Certificados</h2>
                                {userCertificates.length > 0 ? (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                        {userCertificates.map((cert, idx) => (
                                            <div key={idx} style={{ border: '1px solid var(--glass-border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--background)' }}>
                                                <div style={{ height: '160px', background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                                    <Award size={64} color="white" style={{ opacity: 0.8 }} />
                                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', color: 'white', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                                        Certificado de Finalización
                                                    </div>
                                                </div>
                                                <div style={{ padding: '1.5rem' }}>
                                                    <h4 style={{ marginBottom: '0.5rem' }}>{cert}</h4>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Completado</p>
                                                    <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
                                                        <Download size={16} /> Descargar PDF
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                        <Award size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                        <p>Aún no tienes certificados. ¡Completa cursos para obtenerlos!</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
