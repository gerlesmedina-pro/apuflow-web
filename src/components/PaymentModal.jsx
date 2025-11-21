import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader, CreditCard, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentModal = ({ course, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('paypal'); // 'mercadopago' or 'paypal'
    const { enrollCourse, user } = useAuth();
    const navigate = useNavigate();
    const [mpError, setMpError] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null);
    const [fetchingPreference, setFetchingPreference] = useState(false);

    // Initialize MercadoPago
    useEffect(() => {
        try {
            if (import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY) {
                initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
                    locale: 'es-PE'
                });
            } else {
                console.warn("MercadoPago Public Key missing");
                setMpError(true);
            }
        } catch (error) {
            console.error("MercadoPago init error:", error);
            setMpError(true);
        }
    }, []);

    // Fetch Preference ID when MercadoPago is selected
    useEffect(() => {
        if (paymentMethod === 'mercadopago' && !preferenceId && !fetchingPreference) {
            const createPreference = async () => {
                setFetchingPreference(true);
                try {
                    // Use relative path for Netlify Function
                    const response = await fetch('/.netlify/functions/create_preference', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: course.title,
                            price: parseFloat(course.price.replace('$', '')),
                            quantity: 1,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    if (data.id) {
                        setPreferenceId(data.id);
                    } else {
                        console.error("No preference ID returned");
                    }
                } catch (error) {
                    console.error("Error creating preference:", error);
                } finally {
                    setFetchingPreference(false);
                }
            };

            createPreference();
        }
    }, [paymentMethod, course, preferenceId, fetchingPreference]);

    const handlePaymentSuccess = async (details) => {
        setLoading(true);
        console.log("Payment successful:", details);

        // In a real app, verify the transaction on the backend here

        const enrolled = await enrollCourse(course.id);
        if (enrolled) {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                navigate(`/player/${course.id}`);
            }, 2000);
        }
        setLoading(false);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999, // High z-index to ensure visibility
            backdropFilter: 'blur(5px)'
        }}>
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '500px',
                padding: '2rem',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: 'var(--glass-bg)', // Fallback
                border: '1px solid var(--glass-border)' // Fallback
            }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                {success ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ color: '#22c55e', marginBottom: '1rem' }}>
                            <CheckCircle size={64} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>¡Pago Exitoso!</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Redirigiendo al curso...</p>
                    </div>
                ) : (
                    <>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            Completar Compra
                        </h2>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Curso:</div>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{course.title}</div>
                            <div style={{ marginTop: '0.5rem', fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                                {course.price}
                            </div>
                        </div>

                        {/* Payment Method Tabs */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <button
                                onClick={() => setPaymentMethod('paypal')}
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: paymentMethod === 'paypal' ? '2px solid var(--primary-color)' : '1px solid var(--glass-border)',
                                    background: paymentMethod === 'paypal' ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                PayPal
                            </button>
                            <button
                                onClick={() => setPaymentMethod('mercadopago')}
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: paymentMethod === 'mercadopago' ? '2px solid var(--primary-color)' : '1px solid var(--glass-border)',
                                    background: paymentMethod === 'mercadopago' ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                MercadoPago
                            </button>
                        </div>

                        {loading ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
                                <Loader className="animate-spin" size={48} color="var(--primary-color)" />
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Procesando pago...</p>
                            </div>
                        ) : (
                            <>
                                {paymentMethod === 'paypal' && (
                                    <div style={{ minHeight: '150px' }}>
                                        {import.meta.env.VITE_PAYPAL_CLIENT_ID ? (
                                            <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
                                                <PayPalButtons
                                                    style={{ layout: "vertical" }}
                                                    createOrder={(data, actions) => {
                                                        return actions.order.create({
                                                            purchase_units: [
                                                                {
                                                                    description: course.title,
                                                                    amount: {
                                                                        value: course.price.replace('$', ''), // Remove $ sign
                                                                    },
                                                                },
                                                            ],
                                                        });
                                                    }}
                                                    onApprove={(data, actions) => {
                                                        return actions.order.capture().then((details) => {
                                                            handlePaymentSuccess(details);
                                                        });
                                                    }}
                                                    onError={(err) => {
                                                        console.error("PayPal Error:", err);
                                                        // Don't alert, just log
                                                    }}
                                                />
                                            </PayPalScriptProvider>
                                        ) : (
                                            <div style={{ padding: '1rem', border: '1px dashed #ef4444', borderRadius: '8px', color: '#ef4444', textAlign: 'center' }}>
                                                <AlertTriangle size={24} style={{ marginBottom: '0.5rem' }} />
                                                <p>Error de configuración: Falta Client ID de PayPal.</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {paymentMethod === 'mercadopago' && (
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            Paga con tarjeta de crédito, débito o efectivo.
                                        </p>
                                        {mpError ? (
                                            <div style={{ padding: '1rem', border: '1px dashed #ef4444', borderRadius: '8px', color: '#ef4444' }}>
                                                Error al inicializar MercadoPago.
                                            </div>
                                        ) : (
                                            <>
                                                {fetchingPreference ? (
                                                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                                                        <Loader className="animate-spin" size={32} color="var(--primary-color)" style={{ margin: '0 auto' }} />
                                                        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Cargando pasarela...</p>
                                                    </div>
                                                ) : preferenceId ? (
                                                    <Wallet initialization={{ preferenceId: preferenceId }} />
                                                ) : (
                                                    <div style={{ padding: '1rem', border: '1px dashed #ef4444', borderRadius: '8px', color: '#ef4444', textAlign: 'center' }}>
                                                        <AlertTriangle size={24} style={{ marginBottom: '0.5rem' }} />
                                                        <p>No se pudo conectar con el servidor de pagos.</p>
                                                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                                            Verifica que la función Netlify esté configurada.
                                                        </p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
