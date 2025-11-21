import React from 'react';

const StudyModule = ({ title, content, image }) => {
    return (
        <div className="glass-panel fade-in" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ color: '#4f46e5', marginBottom: '1rem' }}>{title}</h2>
            <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                {image && (
                    <div style={{ width: '100%', height: '200px', background: '#e0e7ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                        {/* Placeholder for image */}
                        <span>{image}</span>
                    </div>
                )}
                <p style={{ lineHeight: '1.6', color: '#374151' }}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default StudyModule;
