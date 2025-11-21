import React from 'react';

const Hero = ({ onStart }) => {
    return (
        <section className="container fade-in" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #4f46e5, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Domina el Modelamiento Hidráulico
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto 2rem' }}>
                Una plataforma interactiva diseñada para estudiantes. Aprende conceptos clave, simula escenarios y pon a prueba tus conocimientos.
            </p>
            <button onClick={onStart} className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Comenzar a Estudiar
            </button>
        </section>
    );
};

export default Hero;
