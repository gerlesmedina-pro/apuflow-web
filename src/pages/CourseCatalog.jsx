import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Filter, Clock, DollarSign } from 'lucide-react';

const CourseCatalog = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredCourses = filter === 'Todos'
        ? courses
        : courses.filter(c => c.category === filter);

    return (
        <div className="container fade-in" style={{ padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--text-main)' }}>Catálogo de Cursos</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['Todos', 'CFD', 'Hidráulica', 'Pack'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                border: 'none',
                                background: filter === cat ? 'var(--primary-color)' : 'var(--surface-light)',
                                color: filter === cat ? 'white' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {filteredCourses.map(course => (
                    <div key={course.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        {course.badge && (
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'var(--accent-color)',
                                color: 'white',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                zIndex: 10,
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                            }}>
                                {course.badge}
                            </div>
                        )}
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src={course.image}
                                alt={course.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase' }}>{course.category}</span>
                                <span style={{ fontSize: '0.8rem', background: 'var(--surface-light)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)' }}>{course.level}</span>
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>{course.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{course.description}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={16} /> {course.duration}</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    {course.originalPrice && (
                                        <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem', marginRight: '0.5rem' }}>{course.originalPrice}</span>
                                    )}
                                    <span style={{ fontWeight: 'bold', color: 'var(--accent-color)', fontSize: '1.25rem' }}>{course.price}</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem' }}>
                                <Link
                                    to={`/course/${course.id}`}
                                    className="btn-primary"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        width: '100%',
                                        padding: '0.75rem'
                                    }}
                                >
                                    Ver Detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseCatalog;
