
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Laboratory from './components/Laboratory';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
import FadeInSection from './components/FadeInSection';
import LogoText from './components/LogoText';
import Process from './components/Process';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import Clients from './components/Clients';
import Presence from './components/Presence';
import CTA from './components/CTA';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Stats /></FadeInSection>
        <FadeInSection><Laboratory /></FadeInSection>
        <FadeInSection><Services /></FadeInSection>
        <FadeInSection><Process /></FadeInSection>
        <FadeInSection><Benefits /></FadeInSection>
        <FadeInSection><UseCases /></FadeInSection>
        <FadeInSection><Clients /></FadeInSection>
        <FadeInSection><Presence /></FadeInSection>
        <FadeInSection><CTA /></FadeInSection>
      </main>

      {/* Footer */}
      <FadeInSection>
        <footer style={{ backgroundColor: 'var(--primary)', color: 'rgba(255, 255, 255, 0.7)', padding: 'var(--space-8) 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: 'var(--space-5)', display: 'inline-block' }}>
            <LogoText /><span style={{ fontSize: '1.4em', color: 'var(--accent)', marginLeft: '2px', lineHeight: 1 }}>.</span>
          </div>
          <p style={{ maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
            Laboratorio especializado en concreto y mecánica de suelos. Tu mejor aliado para el control de calidad en proyectos de construcción.
          </p>
          <div className="footer-nav" style={{ marginBottom: 'var(--space-6)' }}>
            <a href="#servicios" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(255, 255, 255, 0.7)'}>Servicios</a>
            <a href="#proceso" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(255, 255, 255, 0.7)'}>Proceso</a>
            <a href="#beneficios" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(255, 255, 255, 0.7)'}>Beneficios</a>
            <a href="#contacto" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(255, 255, 255, 0.7)'}>Contacto</a>
          </div>

          {/* Footer Accreditation */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--space-6)', opacity: 0.8 }}>
             <img src="/ema.png" alt="Sello EMA" style={{ height: '40px', objectFit: 'contain', backgroundColor: 'white', padding: '4px', borderRadius: '2px', marginBottom: '0.5rem' }} />
             <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>Laboratorio de ensayo acreditado C - 1902-361/25</span>
          </div>

          <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>© {new Date().getFullYear()} <LogoText /> Control de Calidad y Supervisión. Todos los derechos reservados.</p>
        </div>
      </footer>
      </FadeInSection>
      
      <WhatsAppButton />
      <style>{`
        .footer-nav {
           display: flex;
           justify-content: center;
           gap: var(--space-6);
        }
        @media (max-width: 768px) {
           .footer-nav {
              flex-wrap: wrap !important;
              gap: var(--space-4) !important;
              padding: 0 var(--space-4) !important;
           }
        }
      `}</style>
    </div>
  );
}

export default App;
