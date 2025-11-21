import React from 'react';

const Privacy = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', color: 'var(--text-main)' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>Política de Privacidad</h1>

            <div style={{ background: 'var(--surface-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                    En ApuFlow, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, utilizamos y protegemos tu información personal.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>1. Información que Recopilamos</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Podemos recopilar información personal que nos proporcionas voluntariamente, como tu nombre, dirección de correo electrónico y detalles de pago al registrarte en nuestros cursos. También podemos recopilar datos de navegación de forma automática.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>2. Uso de la Información</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Utilizamos tu información para:
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li>Proporcionar y gestionar tu acceso a los cursos.</li>
                        <li>Procesar pagos y facturación.</li>
                        <li>Enviarte actualizaciones importantes sobre tus cursos y la plataforma.</li>
                        <li>Mejorar nuestros servicios y experiencia de usuario.</li>
                    </ul>
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>3. Protección de Datos</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>4. Compartir Información</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    No vendemos ni alquilamos tu información personal a terceros. Solo compartimos información con proveedores de servicios de confianza que nos ayudan a operar nuestra plataforma (por ejemplo, procesadores de pagos), bajo estrictas obligaciones de confidencialidad.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>5. Cookies</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, recordar tus preferencias y analizar el tráfico. Puedes configurar tu navegador para rechazar las cookies, pero esto podría limitar algunas funcionalidades.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>6. Tus Derechos</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Tienes derecho a acceder, corregir o eliminar tu información personal. Si deseas ejercer estos derechos, por favor contáctanos a través de nuestros canales de soporte.
                </p>

                <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Última actualización: Noviembre 2025
                </p>
            </div>
        </div>
    );
};

export default Privacy;
