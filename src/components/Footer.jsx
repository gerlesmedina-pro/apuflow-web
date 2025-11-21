import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import logoFullDark from '../assets/logo_full_dark_text.png';

const Footer = () => {
    return (
        <footer style={{ background: '#f3f4f6', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <img src={logoFullDark} alt="ApuFlow" style={{ height: '40px', marginBottom: '1rem' }} />
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        Plataforma líder en educación de modelamiento hidráulico y CFD.
                    </p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Enlaces</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/courses" style={{ textDecoration: 'none', color: 'inherit' }}>Cursos</a></li>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Servicios</a></li>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/community" style={{ textDecoration: 'none', color: 'inherit' }}>Comunidad</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Contacto</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
                        <li style={{ marginBottom: '0.5rem' }}>informes@apuflow.com</li>
                        <li style={{ marginBottom: '0.5rem' }}>+51 923 651 487</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>Términos</a></li>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacidad</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Síguenos</h4>
                    <div style={{ display: 'flex', gap: '1rem', color: '#6b7280' }}>
                        <Github size={20} />
                        <Twitter size={20} />
                        <Linkedin size={20} />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', color: '#9ca3af', fontSize: '0.8rem' }}>
                © 2025 ApuFlow. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
