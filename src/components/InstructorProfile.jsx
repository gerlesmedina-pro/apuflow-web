import React from 'react';
import { CheckCircle, Award, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/instructor/profile.jpg';
import logoUtec from '../assets/instructor/logo_utec_v2.jpg';
import logoUni from '../assets/instructor/logo_uni.png';
import logoUnam from '../assets/instructor/logo_unam.png';
import logoIer from '../assets/instructor/logo_ier_v2.png';
import logoCip from '../assets/instructor/logo_cip_v2.png';
import logoIahr from '../assets/instructor/logo_iahr.png';
// Using placeholders for missing logos to avoid import errors if files don't exist

const InstructorProfile = () => {
    const skills = [
        "Modelamiento 1D/2D (HEC-RAS) y Morfodinámica",
        "CFD Avanzado (OpenFOAM) & Estructuras Hidráulicas 3D",
        "High Performance Computing (HPC) e Inteligencia Artificial",
        "Ponente Internacional (UNAM, Congresos de Hidráulica)"
    ];

    const logos = [
        { src: logoUtec, alt: "UTEC" },
        { src: logoUni, alt: "UNI" },
        { src: logoUnam, alt: "UNAM" },
        { src: logoIer, alt: "IER" },
        { src: logoCip, alt: "CIP" },
        { src: logoIahr, alt: "IAHR" },
    ];

    return (
        <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, var(--surface-dark), var(--surface-light))' }}>
            <div className="container">
                <div className="glass-panel" style={{
                    padding: '3rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(15, 23, 42, 0.6)'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Image Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                position: 'relative',
                                width: '280px',
                                height: '280px',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: '-5px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                    opacity: 0.8,
                                    filter: 'blur(10px)'
                                }}></div>
                                <img
                                    src={profileImg}
                                    alt="Gerles Medina"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        border: '4px solid var(--surface-dark)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                    loading="lazy"
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    background: 'var(--surface-dark)',
                                    borderRadius: '50%',
                                    padding: '0.5rem',
                                    border: '2px solid var(--primary-color)',
                                    zIndex: 2,
                                    color: 'var(--primary-color)'
                                }}>
                                    <Award size={24} />
                                </div>
                            </div>

                            <div style={{
                                background: 'rgba(14, 165, 233, 0.15)',
                                color: 'var(--primary-color)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '100px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                border: '1px solid rgba(14, 165, 233, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <CheckCircle size={16} /> MSc. Ing. Gerles Medina
                            </div>
                        </div>

                        {/* Content Column */}
                        <div>
                            <h2 className="text-gradient" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                                Aprende de Expertos con Experiencia Real
                            </h2>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                Gerles Medina
                            </h3>
                            <p style={{ color: 'var(--primary-color)', fontSize: '1.1rem', fontWeight: '500', marginBottom: '1.5rem' }}>
                                Fundador de ApuFlow | M.Sc. Ingeniería Civil & Especialista CFD
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <a
                                    href="https://www.linkedin.com/in/gerles-medina-357182195/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#0077b5',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        background: 'rgba(0, 119, 181, 0.1)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 119, 181, 0.1)'}
                                >
                                    <Linkedin size={20} /> Conectar en LinkedIn
                                </a>

                                <a
                                    href="mailto:gerles.medina@apuflow.com"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-main)',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                                >
                                    <Mail size={20} /> gerles.medina@apuflow.com
                                </a>
                            </div>

                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1.05rem' }}>
                                Ingeniero Civil (UNI) y Maestro en Ciencias con mención en Ingeniería de Agua (UTEC). Especialista en modelamiento hidráulico avanzado con una sólida trayectoria en el diseño de estructuras hidráulicas y modelamiento numérico de flujos multifasicos. Actualmente docente en el Posgrado FIC-UNI.
                                <br /><br />
                                Ex-Ingeniero Investigador en el CITA-UTEC y miembro activo de la IAHR. Ha llevado la simulación numérica a la práctica real, combinando Hidráulica Fluvial, HPC y Cloud Computing para resolver los retos más complejos de la ingeniería moderna.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                                {skills.map((skill, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <div style={{
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            padding: '0.25rem',
                                            borderRadius: '50%',
                                            color: '#10b981',
                                            marginTop: '2px'
                                        }}>
                                            <CheckCircle size={16} />
                                        </div>
                                        <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Logos */}
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Trayectoria & Afiliaciones
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                                    {logos.map((logo, idx) => (
                                        <div key={idx} style={{
                                            background: 'white',
                                            padding: '0.5rem',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '60px',
                                            width: 'auto',
                                            minWidth: '60px',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                        }}>
                                            <img
                                                src={logo.src}
                                                alt={logo.alt}
                                                style={{
                                                    height: '100%',
                                                    width: 'auto',
                                                    objectFit: 'contain',
                                                    maxHeight: '50px',
                                                    maxWidth: '100%'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default InstructorProfile;
