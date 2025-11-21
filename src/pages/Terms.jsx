import React from 'react';

const Terms = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', color: 'var(--text-main)' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>Términos y Condiciones</h1>

            <div style={{ background: 'var(--surface-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                    Bienvenido a ApuFlow. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos detenidamente.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>1. Uso de la Plataforma</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    ApuFlow es una plataforma educativa dedicada a la enseñanza de modelamiento hidráulico y CFD. El contenido proporcionado es para fines educativos y profesionales. Te comprometes a utilizar la plataforma de manera legal y ética.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>2. Propiedad Intelectual</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Todo el contenido, incluyendo videos, materiales de curso, código, logotipos y diseños, es propiedad exclusiva de ApuFlow o de sus respectivos instructores y está protegido por leyes de derechos de autor. No está permitida la reproducción, distribución o venta de nuestro material sin autorización expresa.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>3. Cuentas de Usuario</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Para acceder a ciertos cursos, deberás crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>4. Pagos y Reembolsos</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Los precios de los cursos están claramente indicados. Nos reservamos el derecho de modificar los precios en cualquier momento. Las políticas de reembolso se aplicarán según lo estipulado en la descripción de cada curso o promoción específica.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>5. Limitación de Responsabilidad</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    ApuFlow no se hace responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>6. Modificaciones</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en el sitio web.
                </p>

                <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Última actualización: Noviembre 2025
                </p>
            </div>
        </div>
    );
};

export default Terms;
