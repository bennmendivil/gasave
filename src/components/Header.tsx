import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoText from './LogoText';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: isScrolled ? '1rem 0' : '1.5rem 0',
    backgroundColor: isScrolled ? 'rgba(28, 28, 30, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
    transition: 'all var(--transition-normal)'
  };

  const linkStyle: React.CSSProperties = {
    fontWeight: 600,
    color: 'var(--text-main)',
    fontSize: '0.95rem',
  };

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Casos', href: '#casos' },
  ];

  return (
    <header style={headerStyle}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-heading)', display: 'inline-block' }}>
            <LogoText /><span style={{ fontSize: '1.4em', color: 'var(--accent)', marginLeft: '2px', lineHeight: 1 }}>.</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-nav">
          <ul className="flex items-center gap-8" style={{ listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={linkStyle}
                  className="nav-link-hover"
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-main)'; }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className={isScrolled ? 'btn btn-primary' : 'btn btn-secondary'} style={{ padding: '0.6rem 1.5rem', marginLeft: '1rem' }}>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          style={{ display: 'block', color: 'var(--text-main)', background: 'transparent', border: 'none' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          backgroundColor: 'var(--bg-white)',
          padding: 'var(--space-4)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
          borderTop: '1px solid var(--border-color)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ fontWeight: 600, color: 'var(--text-main)', padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>Contacto</a>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link-hover { transition: color var(--transition-fast); }
      `}</style>
    </header>
  );
};

export default Header;
