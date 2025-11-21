import React from 'react';
import { Play } from 'lucide-react';

const videos = [
    {
        id: 'WfKES7trCQI',
        title: 'Simulación de confluencia de canal'
    },
    {
        id: 'rM3A8hXtJBc',
        title: 'Simulación de bocatoma lateral'
    },
    {
        id: 'sdYva1qoNkU',
        title: 'Confluencia de ríos'
    },
    {
        id: 'g7SlKhRo2ec',
        title: 'Aliviadero escalonado de cresta ancha'
    },
    {
        id: 'VNlAPSocv6A',
        title: 'Tipos de flujos en aliviaderos escalonados'
    }
];

const VideoSection = () => {
    return (
        <section style={{ padding: '4rem 0', background: 'var(--surface-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Simulaciones Destacadas</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Explora el potencial de OpenFOAM con nuestros casos de estudio
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {videos.map((video) => (
                        <div key={video.id} className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Play size={16} style={{ color: 'var(--primary-color)' }} />
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="https://www.youtube.com/@GerlesMedina/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        Ver más en YouTube <Play size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
