
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import LogoText from './LogoText';

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-main)',
        color: 'var(--text-heading)',
        paddingTop: 'var(--space-12)',
        overflow: 'hidden'
      }}
    >
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '-10%', right: '-5%',
        width: '40vw', height: '40vw',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.03)',
        boxShadow: 'inset 0 0 50px rgba(255, 255, 255, 0.05)'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div style={{ textAlign: 'left' }}>
            <div 
              className="badge" 
              style={{ 
                backgroundColor: 'rgba(192, 26, 26, 0.2)', 
                color: 'var(--accent)',
                border: '1px solid rgba(192, 26, 26, 0.5)',
                marginBottom: 'var(--space-6)'
              }}
            >
              Expertos en Ingeniería de Materiales
            </div>
            
            <h1 style={{ color: 'var(--text-heading)', marginBottom: 'var(--space-6)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              <LogoText /> <br />
              <span style={{ fontWeight: 300 }}>Control de calidad y supervisión</span>
            </h1>
            
            {/* Accreditation Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', marginBottom: 'var(--space-6)', border: '1px solid rgba(192, 26, 26, 0.3)', boxShadow: '0 0 15px rgba(192,26,26,0.1)' }}>
              <ShieldCheck size={18} color="var(--accent)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)', letterSpacing: '0.02em' }}>
                Acreditado EMA <span style={{ opacity: 0.5, margin: '0 4px' }}>·</span> C - 1902-361/25
              </span>
            </div>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.85)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '650px',
              lineHeight: 1.6
            }}>
              En <LogoText /> realizamos ensayes de concreto y mecánica de suelos con equipos calibrados y procedimientos normalizados bajo ASTM y NMX. Nuestros resultados te dan la certeza técnica para tomar decisiones informadas en cada etapa de tu proyecto.
            </p>
            
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4">
              <a href="#contacto" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', width: '100%', maxWidth: '250px' }}>
                Solicitar Cotización <ArrowRight size={20} />
              </a>
              <a href="#servicios" className="btn" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                color: 'var(--text-heading)', 
                width: '100%', 
                maxWidth: '250px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; }}
              >
                Conoce más
              </a>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <div style={{ width: '320px', height: '320px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 20px 40px rgba(192, 26, 26, 0.15)', border: '4px solid var(--border-color)', position: 'relative' }}>
                <img src="/cilindro.jpg" alt="Prueba de Compresión a Cilindro de Concreto" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10, 10, 10, 0.2)', pointerEvents: 'none' }}></div>
             </div>
          </div>
        </div>
      </div>

      <a 
        href="#servicios" 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.5)',
          animation: 'bounce 2s infinite'
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
      
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
