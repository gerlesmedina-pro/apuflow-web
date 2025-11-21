import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            id: "free",
            name: "Gratis",
            price: "$0",
            period: "/mes",
            features: [
                "Acceso a cursos introductorios",
                "Foro de comunidad (lectura)",
                "1 Caso de estudio básico"
            ],
            notIncluded: [
                "Certificados digitales",
                "Descargas de scripts",
                "Soporte prioritario"
            ],
            cta: "Registrarse Gratis",
            highlight: false
        },
        {
            id: "student",
            name: "Estudiante",
            price: "$9.99",
            period: "/mes",
            features: [
                "Acceso a TODOS los cursos",
                "Certificados digitales",
                "Foro de comunidad (participación)",
                "Descarga de casos prácticos",
                "Scripts de OpenFOAM básicos"
            ],
            notIncluded: [
                "Mentoría privada",
                "Proyectos avanzados 2D",
                "Acceso a cursos Premium HEC-RAS"
            ],
            cta: "Empezar Prueba",
            highlight: true
        },
        {
            id: "professional",
            name: "Profesional",
            price: "$29.99",
            period: "/mes",
            features: [
                "Todo lo de Estudiante",
                "Acceso a cursos Premium HEC-RAS",
                "Scripts de automatización Python",
                { text: "Soporte prioritario 24/7", subtext: "Respuesta en < 24h" },
                "Sesiones de mentoría mensual"
            ],
            notIncluded: [],
            cta: "Suscribirse",
            highlight: false
        }
    ];

    return (
        <div className="container fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Planes de Suscripción</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Invierte en tu futuro profesional. Elige el plan que mejor se adapte a tus necesidades de aprendizaje.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            position: 'relative',
                            border: plan.highlight ? '2px solid var(--primary-color)' : '1px solid var(--glass-border)',
                            transform: plan.highlight ? 'scale(1.05)' : 'none',
                            zIndex: plan.highlight ? 1 : 0
                        }}
                    >
                        {plan.highlight && (
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                Más Popular
                            </div>
                        )}
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{plan.price}</span>
                            <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {plan.features.map((feat, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-main)' }}>
                                    <Check size={18} color="var(--accent-color)" style={{ marginTop: '4px' }} />
                                    <div>
                                        {typeof feat === 'string' ? (
                                            feat.includes("Premium") ? <strong>{feat}</strong> : feat
                                        ) : (
                                            <>
                                                {feat.text}
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{feat.subtext}</div>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                            {plan.notIncluded.map((feat, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                                    <X size={18} /> {feat}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to={`/register?plan=${plan.id}`}
                            className={plan.highlight ? 'btn-primary' : ''}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: plan.highlight ? 'none' : '1px solid var(--text-muted)',
                                background: plan.highlight ? undefined : 'transparent',
                                color: plan.highlight ? 'white' : 'var(--text-main)',
                                cursor: 'pointer',
                                fontWeight: '600',
                                display: 'block',
                                textAlign: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            {plan.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
