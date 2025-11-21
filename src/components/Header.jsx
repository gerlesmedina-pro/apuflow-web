import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, UserCircle, LayoutDashboard, CreditCard, Briefcase, Shield } from 'lucide-react';
import logoFull from '../assets/logo_full.png';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="glass-panel" style={{ margin: '1rem', padding: '0.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logoFull} alt="ApuFlow" style={{ height: '50px' }} />
      </Link>
      <nav>
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
          {/* Admin Link for Demo */}
          {user && (
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
    </header>
  );
};

export default Header;
