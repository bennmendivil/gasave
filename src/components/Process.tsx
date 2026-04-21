
import { Search, PenTool, CheckCircle, RefreshCw } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Evaluación inicial del terreno y requerimientos del proyecto para definir las pruebas necesarias.',
      icon: <Search size={28} />
    },
    {
      number: '02',
      title: 'Diseño de solución',
      description: 'Planificación de la estrategia de control de calidad y selección de metodologías aplicables.',
      icon: <PenTool size={28} />
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Ejecución de ensayos en laboratorio y pruebas en sitio con equipos calibrados.',
      icon: <CheckCircle size={28} />
    },
    {
      number: '04',
      title: 'Optimización continua',
      description: 'Análisis de resultados y asesoramiento para mejorar procesos constructivos y materiales.',
      icon: <RefreshCw size={28} />
    }
  ];

  return (
    <section id="proceso" className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="section-title" style={{ textAlign: 'center', marginBottom: 0, flex: 1, maxWidth: '800px' }}>
            <div className="badge">Nuestra Metodología</div>
            <h2 style={{ color: 'var(--text-heading)' }}>Un Proceso Claro y Orientado a Resultados</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Sabemos que el tiempo es un factor crítico en cualquier obra. Por eso hemos diseñado un flujo de trabajo que nos permite entregar resultados rápidos, con precisión milimétrica y sin burocracia innecesaria.
            </p>
          </div>
          
          <div className="card" style={{ width: '250px', padding: 'var(--space-3)', flexShrink: 0, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img src="/revenimiento.jpg" alt="Equipo en acción realizando ensayo de revenimiento" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', opacity: 0.9 }} />
            </div>
            <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: 'var(--space-3)', marginBottom: 0, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Control en sitio
            </p>
          </div>
        </div>

        <div className="process-timeline" style={{ position: 'relative' }}>
          {/* Connecting Line for desktop */}
          <div className="timeline-line hidden md:block" style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            backgroundColor: 'var(--border-color)',
            zIndex: 0
          }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div 
                  className="step-icon-wrapper"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--bg-card)',
                    border: '2px solid var(--accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-4)',
                    color: 'var(--accent)',
                    position: 'relative',
                    transition: 'all var(--transition-normal)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--text-heading)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {step.icon}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-heading)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem'
                  }}>
                    {step.number}
                  </div>
                </div>
                
                <h3 style={{ marginBottom: 'var(--space-2)', fontSize: '1.25rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 767px) {
          .hidden.md\\:block {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
