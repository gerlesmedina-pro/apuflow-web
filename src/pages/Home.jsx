import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play, Zap, Users, Award } from 'lucide-react';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import InstructorProfile from '../components/InstructorProfile';
import heroBg from '../assets/simulations/sim_5.png';
import { heroStats } from '../data/mockData';

const Home = () => {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: -1
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(11, 17, 32, 0.8), var(--background-dark))',
                        zIndex: 1
                    }} />
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            src={heroBg}
                            alt="CFD Simulation Background"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.6
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(14, 165, 233, 0.1)',
                        border: '1px solid rgba(14, 165, 233, 0.2)',
                        borderRadius: '100px',
                        color: 'var(--primary-color)',
                        marginBottom: '2rem',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em'
                    }}>
                        NUEVA GENERACIÓN DE INGENIERÍA
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        marginBottom: '1.5rem',
                        maxWidth: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.1
                    }}>
                        Domina la <span className="text-gradient">Hidráulica Computacional</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: '#e2e8f0',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6
                    }}>
                        ApuFlow es la plataforma definitiva para expertos en OpenFOAM y HEC-RAS.
                        Accede a simulaciones de alta fidelidad, cursos en vivo y una comunidad de élite.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Comenzar Ahora <ArrowRight size={20} />
                        </Link>
                        <Link to="/community" className="btn-secondary">
                            <Play size={20} /> Ver Demo
                        </Link>
                    </div>

                    {/* Stats / Social Proof */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        marginTop: '6rem',
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '3rem'
                    }}>
                        {heroStats.map((stat, idx) => (
                            <div key={idx}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'white' }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Por qué elegir Apu<span style={{ color: 'var(--primary-color)' }}>Flow</span>?</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Herramientas profesionales para resultados profesionales</p>
                    </div>

                    <div className="grid-features">
                        {[
                            {
                                icon: <Zap size={32} />,
                                title: "Tecnología de Punta",
                                desc: "Aprende con las últimas versiones de OpenFOAM y herramientas de post-procesamiento avanzadas."
                            },
                            {
                                icon: <Award size={32} />,
                                title: "Certificación Verificada",
                                desc: "Obtén credenciales reconocidas en la industria al completar tus proyectos de simulación."
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Mentoria Experta",
                                desc: "Recibe feedback directo de ingenieros senior en cada paso de tu aprendizaje."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="glass-panel" style={{ padding: '3rem 2rem' }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(99, 102, 241, 0.2))',
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(14, 165, 233, 0.3)'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructor Profile */}
            <InstructorProfile />

            {/* Video Section */}
            <VideoSection />

            {/* Gallery Section */}
            <GallerySection />
        </div>
    );
};

export default Home;
