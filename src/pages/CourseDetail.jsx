import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Clock, BookOpen, CheckCircle, Play, FileText, Users, Award, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PaymentModal from '../components/PaymentModal';

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === courseId);
    const { user, hasAccess } = useAuth();
    const navigate = useNavigate();
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    if (!course) {
        return <div className="container section-padding text-center">Curso no encontrado</div>;
    }

    const handleEnrollClick = () => {
        if (!user) {
            navigate('/login', { state: { from: { pathname: `/course/${courseId}` } } });
            return;
        }
        setShowPaymentModal(true);
    };

    const isEnrolled = hasAccess(courseId);

    return (
        <div className="fade-in">
            {showPaymentModal && <PaymentModal course={course} onClose={() => setShowPaymentModal(false)} />}

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9), var(--background-dark))',
                padding: '6rem 0 4rem',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        {course.badge && (
                            <span style={{
                                alignSelf: 'center',
                                background: 'rgba(14, 165, 233, 0.1)',
                                color: 'var(--primary-color)',
                                padding: '0.5rem 1rem',
                                borderRadius: '100px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                border: '1px solid rgba(14, 165, 233, 0.2)'
                            }}>
                                {course.badge}
                            </span>
                        )}

                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.2 }}>
                            {course.title}
                        </h1>

                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            {course.description}
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={20} className="text-primary" /> {course.duration}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BookOpen size={20} className="text-primary" /> {course.level}
                            </span>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>
                                {course.price}
                                {course.originalPrice && (
                                    <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '1rem', fontWeight: 'normal' }}>
                                        {course.originalPrice}
                                    </span>
                                )}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                                {isEnrolled ? (
                                    <Link to={`/player/${courseId}`} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Play size={20} /> Ir al Curso
                                    </Link>
                                ) : (
                                    <button onClick={handleEnrollClick} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                                        Comprar Ahora
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content */}
                    <div>
                        {/* Syllabus */}
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FileText className="text-primary" /> Temario del Curso
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {course.syllabus ? (
                                course.syllabus.map((module, idx) => (
                                    <div key={idx} className="glass-panel" style={{ padding: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>{module.title}</h3>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            {module.topics.map((topic, tIdx) => (
                                                <li key={tIdx} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', color: 'var(--text-muted)' }}>
                                                    <Play size={16} style={{ marginTop: '4px', color: 'var(--primary-color)' }} />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                    Temario detallado disponible próximamente.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Lo que incluye</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {course.benefits ? (
                                    course.benefits.map((benefit, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '1rem', color: 'var(--text-muted)' }}>
                                            <CheckCircle size={20} className="text-primary" style={{ flexShrink: 0 }} />
                                            <span>{benefit}</span>
                                        </li>
                                    ))
                                ) : (
                                    <>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={20} className="text-primary" /> Acceso de por vida</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={20} className="text-primary" /> Certificado de finalización</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={20} className="text-primary" /> Soporte del instructor</li>
                                    </>
                                )}
                            </ul>

                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                                <h4 style={{ marginBottom: '1rem' }}>¿Dudas?</h4>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                    Agenda una llamada con nosotros para saber si este curso es para ti.
                                </p>
                                <a href="https://wa.me/51923651487" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', display: 'flex', textDecoration: 'none' }}>
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
