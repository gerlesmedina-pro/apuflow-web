import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, UserCircle, LayoutDashboard, CreditCard, Briefcase, Shield, Menu, X } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="glass-panel" style={{ margin: '1rem', padding: '0.75rem 2rem', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logoFull} alt="ApuFlow" style={{ height: '50px' }} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: 'none', // Hidden on desktop by default, shown via media query
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li>
              <Link to="/courses" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} /> Cursos
              </Link>
            </li>
            <li>
              <Link to="/services" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={18} /> Servicios
              </Link>
            </li>
            <li>
              <Link to="/community" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} /> Comunidad
              </Link>
            </li>
            <li>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            </li>
            {/* Admin Link - Restricted */}
            {user && (user.email === 'gerles.medina@apuflow.com' || user.role === 'admin') && (
              <li>
                <Link to="/admin" style={{ textDecoration: 'none', color: '#ef4444', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={18} /> Admin
                </Link>
              </li>
            )}
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCircle size={18} /> {(user.name || user.displayName || 'Usuario').split(' ')[0]}
                  </Link>
                </li>
                <li>
                  <button onClick={logout} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: '500' }}>
                    Salir
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500' }}>
                    Ingresar
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCircle size={18} /> Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="mobile-nav" style={{ marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <Link to="/courses" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} /> Cursos
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={18} /> Servicios
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} /> Comunidad
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            </li>
            {user && (user.email === 'gerles.medina@apuflow.com' || user.role === 'admin') && (
              <li>
                <Link to="/admin" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#ef4444', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={18} /> Admin
                </Link>
              </li>
            )}
            {user ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu} className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <UserCircle size={18} /> Mi Perfil
                  </Link>
                </li>
                <li>
                  <button onClick={() => { logout(); toggleMenu(); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: '500', width: '100%', padding: '0.75rem', borderRadius: '8px' }}>
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Link to="/login" onClick={toggleMenu} style={{ flex: 1, textAlign: 'center', textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  Ingresar
                </Link>
                <Link to="/register" onClick={toggleMenu} className="btn-primary" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  Registrarse
                </Link>
              </div>
            )}
          </ul>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
