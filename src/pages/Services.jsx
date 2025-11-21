import React from 'react';
import { Server, Users, Cpu, Globe, MessageCircle, Mail } from 'lucide-react';

const Services = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Solicitud enviada. Nos pondremos en contacto pronto.");
        setShowModal(false);
    };

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <div style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), transparent)', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Servicios <span className="text-gradient">Profesionales</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Llevamos tus proyectos de ingeniería al siguiente nivel con nuestra experiencia en simulación avanzada y computación de alto rendimiento.
                    </p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Advisory Section */}
                <section style={{ marginBottom: '4rem' }}>
                    <div className="glass-panel" style={{ padding: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                                <Users size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Asesoría Especializada</h2>
                                <p style={{ color: 'var(--text-muted)' }}>Acompañamiento experto en tus proyectos de modelamiento hidráulico.</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { name: 'OpenFOAM', initials: 'OF', desc: 'CFD avanzado y personalización de solvers.', gradient: 'linear-gradient(135deg, #38bdf8, #2563eb)' },
                                { name: 'ANSYS Fluent - CFX', initials: 'AN', desc: 'Simulaciones multifísica industriales.', gradient: 'linear-gradient(135deg, #fbbf24, #d97706)' },
                                { name: 'FLOW-3D', initials: 'F3', desc: 'Hidráulica de superficie libre y estructuras.', gradient: 'linear-gradient(135deg, #60a5fa, #4f46e5)' },
                                { name: 'OpenTELEMAC', initials: 'OT', desc: 'Modelamiento hidro-sedimentológico.', gradient: 'linear-gradient(135deg, #2dd4bf, #0d9488)' },
                                { name: 'HEC-RAS', initials: 'HR', desc: 'Estudios de inundabilidad y rotura de presas.', gradient: 'linear-gradient(135deg, #4ade80, #16a34a)' },
                                { name: 'Delft3D', initials: 'D3', desc: 'Morfodinámica costera y estuarina.', gradient: 'linear-gradient(135deg, #22d3ee, #0891b2)' },
                                { name: 'Iber 2D', initials: 'IB', desc: 'Modelamiento bidimensional de flujo en lámina libre.', gradient: 'linear-gradient(135deg, #f87171, #dc2626)' },
                                { name: 'Flo2D', initials: 'F2', desc: 'Modelamiento de inundaciones y flujos de lodo.', gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
                                { name: 'RAMMS::Avalanche', initials: 'RA', desc: 'Simulación de avalanchas de nieve.', gradient: 'linear-gradient(135deg, #94a3b8, #475569)' },
                                { name: 'RAMMS::Debrisflow', initials: 'RD', desc: 'Simulación de flujos de escombros y lodo.', gradient: 'linear-gradient(135deg, #fb923c, #ea580c)' }
                            ].map((tool, idx) => (
                                <div key={idx} className="glass-panel" style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: '70px', height: '70px',
                                        background: tool.gradient,
                                        color: 'white',
                                        borderRadius: '16px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.75rem', fontWeight: 'bold',
                                        marginBottom: '1.5rem',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }}>
                                        {tool.initials}
                                    </div>
                                    <h3 style={{ color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{tool.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{tool.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consulting Section */}
                <section style={{ marginBottom: '4rem' }}>
                    <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--secondary-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: 'var(--secondary-color)' }}>
                                <Server size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Consultoría HPC & Cloud</h2>
                                <p style={{ color: 'var(--text-muted)' }}>Potencia de cálculo para grandes modelos.</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2rem' }}>
                            <div>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
                                    <Globe size={24} className="text-secondary" /> Cloud Computing
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Ejecutamos tus simulaciones más complejas en la nube, reduciendo tiempos de cálculo de semanas a horas. Optimizamos costos utilizando infraestructura escalable bajo demanda.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Clusters AWS / Azure</li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Paralelización MPI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
                                    <Cpu size={24} className="text-secondary" /> Servidores Dedicados
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Implementamos y configuramos servidores Linux dedicados para tus necesidades de simulación continua. Instalación de librerías, compilación de solvers y gestión de colas.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Configuración Linux (Ubuntu/CentOS)</li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Optimización de Hardware</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button onClick={() => setShowModal(true)} className="btn-primary" style={{ background: 'var(--secondary-color)', border: 'none' }}>
                                Solicitar Cotización Rápida
                            </button>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>¿Listo para empezar?</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="mailto:informes@apuflow.com" className="glass-panel" style={{ padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-main)', transition: 'transform 0.2s' }}>
                            <Mail size={24} className="text-primary" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Escríbenos</div>
                                <div style={{ fontWeight: 'bold' }}>informes@apuflow.com</div>
                            </div>
                        </a>
                        <a href="https://wa.me/51923651487" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-main)', transition: 'transform 0.2s' }}>
                            <MessageCircle size={24} color="#25D366" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>WhatsApp</div>
                                <div style={{ fontWeight: 'bold' }}>+51 923 651 487</div>
                            </div>
                        </a>
                    </div>
                </section>

            </div>

            {/* Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
                }} onClick={() => setShowModal(false)}>
                    <div style={{
                        background: 'var(--surface-dark)', padding: '2rem', borderRadius: '12px',
                        maxWidth: '500px', width: '100%', border: '1px solid var(--glass-border)'
                    }} onClick={e => e.stopPropagation()}>
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Cotización HPC</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Nombre</label>
                                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--surface-light)', color: 'white' }} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                                <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--surface-light)', color: 'white' }} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Servicio de Interés</label>
                                <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--surface-light)', color: 'white' }}>
                                    <option>Cloud Computing</option>
                                    <option>Servidor Dedicado</option>
                                    <option>Consultoría General</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Detalles del Proyecto</label>
                                <textarea rows="3" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--surface-light)', color: 'white' }}></textarea>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}>Cancelar</button>
                                <button type="submit" className="btn-primary">Enviar Solicitud</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
