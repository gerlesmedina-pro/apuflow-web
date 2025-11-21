import React from 'react';
import { courses, recordings } from '../data/mockData';
import { Clock, Award, Video, PlayCircle, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const nextClassDate = new Date(Date.now() + 15 * 60000); // 15 mins from now
    const nextClassTime = new Intl.DateTimeFormat('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: userTimeZone,
        timeZoneName: 'short'
    }).format(nextClassDate);

    // Safe defaults for user data
    const userName = user?.name || user?.displayName || 'Estudiante';
    const userAchievements = user?.achievements || [];
    const userProgress = user?.progress || {};

    return (
        <div className="fade-in">
            <div className="container" style={{ padding: '2rem 0' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
                    Hola, <span className="text-gradient">{userName}</span> 👋
                </h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {/* Live Session Card */}
                    <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--primary-color)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: 'rgba(220, 38, 38, 0.2)', color: '#fca5a5', fontSize: '0.8rem', fontWeight: 'bold', borderBottomLeftRadius: '12px' }}>
                            EN VIVO
                        </div>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
                            <Video size={28} className="text-primary" /> Clase en Vivo
                        </h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Tu próxima sesión de <strong>Simulación 2D Avanzada</strong> comienza a las {nextClassTime}.
                        </p>
                        <a
                            href="https://meet.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                        >
                            Unirse con Google Meet <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Stats Card */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                            <Award size={24} color="#f59e0b" /> Mi Carrera
                        </h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Nivel Actual</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Ingeniero Junior</span>
                            </div>
                            <div style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden', marginBottom: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))', borderRadius: '100px', boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)' }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <span>650 / 1000 XP</span>
                                <span>Siguiente: Especialista CFD</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {userAchievements.length > 0 ? (
                                userAchievements.map((ach, idx) => (
                                    <span key={idx} style={{
                                        background: 'rgba(245, 158, 11, 0.1)',
                                        color: '#f59e0b',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        border: '1px solid rgba(245, 158, 11, 0.2)'
                                    }}>
                                        {ach}
                                    </span>
                                ))
                            ) : (
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Aún no tienes logros. ¡Completa cursos para ganar medallas!</span>
                            )}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                    {/* Main Content */}
                    <div>
                        {/* My Courses */}
                        <section style={{ marginBottom: '4rem' }}>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Clock size={28} className="text-primary" /> Continuando Aprendizaje
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {Object.keys(userProgress).length > 0 ? (
                                    Object.entries(userProgress).map(([courseId, progress]) => {
                                        const course = courses.find(c => c.id === courseId);
                                        if (!course) return null;
                                        return (
                                            <div key={courseId} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.2s' }}>
                                                <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden' }}>
                                                    <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{course.title}</h3>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                                        <div style={{ flex: 1, height: '6px', background: 'var(--surface-light)', borderRadius: '100px', overflow: 'hidden' }}>
                                                            <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary-color)', borderRadius: '100px' }}></div>
                                                        </div>
                                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', minWidth: '40px' }}>{progress}%</span>
                                                    </div>
                                                </div>
                                                <button className="btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
                                                    <PlayCircle size={24} />
                                                </button>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                        <p>No tienes cursos en progreso.</p>
                                        <a href="/courses" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block', textDecoration: 'none' }}>Explorar Cursos</a>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Recordings */}
                        <section>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Video size={28} className="text-primary" /> Grabaciones Recientes
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                {recordings.map(rec => (
                                    <div key={rec.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative', height: '140px' }}>
                                            <img src={rec.thumbnail} alt={rec.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }} className="hover-overlay">
                                                <PlayCircle size={40} color="white" />
                                            </div>
                                            <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.8)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem' }}>
                                                {rec.duration}
                                            </div>
                                        </div>
                                        <div style={{ padding: '1rem' }}>
                                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{rec.title}</h4>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                                <Calendar size={14} /> {rec.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        <div className="glass-panel" style={{ padding: '1.5rem', position: 'sticky', top: '2rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Próximos Eventos</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { title: "Webinar: Novedades HEC-RAS 6.5", date: "25 Nov, 19:00", type: "Webinar" },
                                    { title: "Entrega Proyecto Final", date: "30 Nov, 23:59", type: "Entrega" }
                                ].map((event, idx) => (
                                    <div key={idx} style={{ padding: '1rem', background: 'var(--surface-light)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.25rem' }}>{event.type}</div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{event.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{event.date}</div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn-secondary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}>
                                Ver Calendario Completo
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
