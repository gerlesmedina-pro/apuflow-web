import React, { useState } from 'react';
import { forumPosts } from '../data/mockData';
import { MessageSquare, ThumbsUp, Share2, Search, Plus, Filter, CheckCircle } from 'lucide-react';

const Community = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['Todos', 'OpenFOAM', 'HEC-RAS', 'Python', 'Carrera', 'Recursos'];

    const filteredPosts = forumPosts.filter(post => {
        const matchesCategory = activeCategory === 'Todos' || post.tags.includes(activeCategory);
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <div style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), transparent)', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Comunidad <span className="text-gradient">ApuFlow</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Conecta con otros ingenieros, comparte tus conocimientos y resuelve dudas sobre modelamiento hidráulico y CFD.
                    </p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                {/* Controls */}
                <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '100px',
                                    border: '1px solid var(--glass-border)',
                                    background: activeCategory === cat ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                                    color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flex: 1, minWidth: '300px', justifyContent: 'flex-end' }}>
                        <div style={{ position: 'relative', flex: 1, maxWidth: '300px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Buscar discusiones..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    background: 'var(--surface-light)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '8px',
                                    color: 'var(--text-main)'
                                }}
                            />
                        </div>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => alert('Funcionalidad de "Nueva Discusión" próximamente')}>
                            <Plus size={20} /> <span className="hide-mobile">Nueva Discusión</span>
                        </button>
                    </div>
                </div>

                {/* Posts List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <div key={post.id} className="glass-panel hover-card" style={{ padding: '2rem', transition: 'transform 0.2s', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{post.author}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.time}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {post.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.75rem', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '100px', color: 'var(--primary-color)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                        {post.solved && (
                                            <span style={{
                                                fontSize: '0.75rem',
                                                background: 'rgba(16, 185, 129, 0.2)',
                                                color: '#10b981',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '100px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem',
                                                fontWeight: '600',
                                                border: '1px solid rgba(16, 185, 129, 0.3)'
                                            }}>
                                                <CheckCircle size={12} /> Resuelto
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{post.content}</p>

                                <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                                        <MessageSquare size={18} /> {post.replies} respuestas
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                                        <ThumbsUp size={18} /> {post.likes} likes
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                                        <Share2 size={18} /> Compartir
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                            <Filter size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <p>No se encontraron discusiones con estos filtros.</p>
                            <button
                                onClick={() => { setActiveCategory('Todos'); setSearchTerm(''); }}
                                style={{ marginTop: '1rem', background: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Community;
