import React from 'react';
import sim1 from '../assets/simulations/sim_1.png';
import sim2 from '../assets/simulations/sim_2.png';
import sim3 from '../assets/simulations/sim_3.png';
import sim4 from '../assets/simulations/sim_4.png';
import sim5 from '../assets/simulations/sim_5.png';

const images = [
    {
        src: sim5,
        alt: 'Vertederos',
        span: 'col-span-2 row-span-2',
        details: { mesh: '28M celdas', solver: 'interFoam', time: '72h' }
    },
    {
        src: sim2,
        alt: 'Vertedero Escalonado',
        span: 'col-span-1 row-span-1',
        details: { mesh: '10M celdas', solver: 'interFoam', time: '24h' }
    },
    {
        src: sim3,
        alt: 'Confluencia de Canal',
        span: 'col-span-1 row-span-1',
        details: { mesh: '1M celdas', solver: 'interMixingFoam', time: '2h' }
    },
    {
        src: sim1,
        alt: 'Poza de Disipación',
        span: 'col-span-1 row-span-1',
        details: { mesh: '5M celdas', solver: 'interFoam', time: '12h' }
    },
    {
        src: sim4,
        alt: 'Confluencias de Ríos',
        span: 'col-span-1 row-span-1',
        details: { mesh: '30M celdas', solver: 'twoLiquidMixingFoam', time: '144h' }
    },
];

const GallerySection = () => {
    return (
        <section style={{ padding: '4rem 0', background: 'var(--surface-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Galería de Resultados</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Visualiza la precisión y detalle de nuestras simulaciones CFD
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    gridAutoFlow: 'dense'
                }}>
                    {images.map((img, idx) => {
                        // Helper to convert span classes to inline styles
                        const getGridStyle = (spanClass) => {
                            const style = {};
                            if (spanClass?.includes('col-span-2')) style.gridColumn = 'span 2';
                            if (spanClass?.includes('row-span-2')) style.gridRow = 'span 2';
                            return style;
                        };

                        return (
                            <div
                                key={idx}
                                className="glass-panel gallery-item"
                                style={{
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    ...getGridStyle(img.span)
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        minHeight: '300px'
                                    }}
                                />
                                <div className="gallery-overlay" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.6))',
                                    padding: '1.5rem',
                                    borderTop: '1px solid var(--glass-border)'
                                }}>
                                    <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem', marginTop: 0 }}>{img.alt}</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', width: '100%', fontSize: '0.85rem' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Malla</div>
                                            <div style={{ color: 'white' }}>{img.details.mesh}</div>
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Tiempo</div>
                                            <div style={{ color: 'white' }}>{img.details.time}</div>
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '4px', gridColumn: 'span 2' }}>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Solver</div>
                                            <div style={{ color: 'white', wordBreak: 'break-all' }}>{img.details.solver}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
