import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Play, Download, ChevronLeft, CheckCircle, Lock, FileText, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const CoursePlayer = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [activeVideo, setActiveVideo] = useState(null);

    const { user, hasAccess, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        if (!user) {
            navigate('/login');
            return;
        }

        if (!hasAccess(courseId)) {
            navigate(`/course/${courseId}`);
            return;
        }

        const foundCourse = courses.find(c => c.id === courseId);
        if (foundCourse) {
            setCourse(foundCourse);
            if (foundCourse.videos && foundCourse.videos.length > 0) {
                setActiveVideo(foundCourse.videos[0]);
            }
        }
    }, [courseId, user, loading, hasAccess, navigate]);

    if (!course) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Curso no encontrado</h2>
                <Link to="/courses" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block', textDecoration: 'none' }}>
                    Volver al Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="fade-in" style={{ minHeight: '100vh', background: 'var(--surface-dark)' }}>
            {/* Top Bar */}
            <div style={{ background: 'rgba(15, 23, 42, 0.9)', borderBottom: '1px solid var(--glass-border)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/dashboard" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <ChevronLeft size={20} /> Volver
                    </Link>
                    <h1 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>{course.title}</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                        Progreso: 0%
                    </div>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '1600px', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                {/* Main Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Video Player */}
                    <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', aspectRatio: '16/9', background: '#000' }}>
                        {activeVideo ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.id}`}
                                title={activeVideo.title}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                Selecciona una clase para comenzar
                            </div>
                        )}
                    </div>

                    {/* Video Info & Resources */}
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                {activeVideo ? activeVideo.title : 'Bienvenido al curso'}
                            </h2>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {course.description}
                            </p>
                        </div>

                        {/* General Resources - Only for Class 1 */}
                        {course.generalResources && course.generalResources.length > 0 && course.videos && activeVideo && activeVideo === course.videos[0] && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                                    <Download size={18} /> Recursos Generales
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                                    {course.generalResources.map((res, idx) => (
                                        <a
                                            key={idx}
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', justifyContent: 'center', fontSize: '0.9rem' }}
                                        >
                                            <FileText size={16} /> {res.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Class Specific Resources */}
                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText size={18} /> Material de la Clase
                            </h3>

                            {activeVideo && activeVideo.resources && activeVideo.resources.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {activeVideo.resources.map((res, idx) => (
                                        <a
                                            key={idx}
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                color: 'var(--text-muted)',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                                        >
                                            <div style={{
                                                background: 'var(--surface-light)',
                                                padding: '0.5rem',
                                                borderRadius: '6px',
                                                color: 'var(--primary-color)'
                                            }}>
                                                <Download size={16} />
                                            </div>
                                            <div>
                                                <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{res.title}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Click para descargar</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    No hay archivos adjuntos para esta lección.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar Playlist */}
                <div className="glass-panel" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 140px)', position: 'sticky', top: '100px' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Contenido del Curso</h3>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            {course.videos ? course.videos.length : 0} lecciones
                        </div>
                    </div>

                    <div style={{ overflowY: 'auto', flex: 1 }}>
                        {course.videos && course.videos.map((video, idx) => (
                            <div
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                style={{
                                    padding: '1rem 1.5rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    cursor: 'pointer',
                                    background: activeVideo && activeVideo.id === video.id ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                    borderLeft: activeVideo && activeVideo.id === video.id ? '3px solid var(--primary-color)' : '3px solid transparent',
                                    transition: 'all 0.2s'
                                }}
                                className="playlist-item"
                            >
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: activeVideo && activeVideo.id === video.id ? 'var(--primary-color)' : 'var(--surface-light)',
                                        color: activeVideo && activeVideo.id === video.id ? 'white' : 'var(--text-muted)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {activeVideo && activeVideo.id === video.id ? <Play size={12} /> : idx + 1}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: activeVideo && activeVideo.id === video.id ? 'var(--primary-color)' : 'var(--text-main)' }}>
                                            {video.title}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Play size={12} /> Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Placeholder for locked content if needed */}
                        {!course.videos && (
                            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                No hay contenido disponible aún.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePlayer;
