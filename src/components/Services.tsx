
import { FlaskConical, Map, ClipboardCheck, Activity, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Laboratorio de concreto',
      description: 'Pruebas de calidad y resistencia bajo estrictas normativas vigentes, asegurando la durabilidad y desempeño del concreto en tu obra.',
      icon: <FlaskConical size={36} color="var(--accent)" />,
      features: [
        'Diseño de mezcla',
        'Resistencia a la tensión por hendimiento',
        'Módulo de ruptura (flexión)',
        'Absorción de agua',
        'Peso volumétrico del concreto endurecido'
      ]
    },
    {
      title: 'Mecánica de suelos',
      description: 'Estudios geotécnicos precisos para conocer las propiedades del terreno, vitales para el diseño de cimentaciones seguras y eficientes.',
      icon: <Map size={36} color="var(--accent)" />,
      features: [
        'Granulometría',
        'Límites de Atterberg',
        'Prueba de compactación Proctor',
        'CBR',
        'Densidad de campo'
      ]
    },
    {
      title: 'Control de calidad en sitio',
      description: 'Supervisión presencial en proyectos de construcción para validar que los procesos cumplan con las especificaciones del diseño.',
      icon: <ClipboardCheck size={36} color="var(--accent)" />,
      features: [
        'Toma de muestras en obra',
        'Registro fotográfico',
        'Bitácora de muestreo',
        'Supervisión de colado',
        'Reporte de campo'
      ]
    },
    {
      title: 'Ensayes de carga axial',
      description: 'Aplicado a cilindros de concreto para determinar la resistencia a la compresión mediante ensayos controlados en laboratorio.',
      icon: <Activity size={36} color="var(--accent)" />,
      features: [
        'Resistencia a compresión simple',
        'Prueba de carga en columnas',
        'Ensaye de núcleos extraídos (testigos)',
        "Verificación de f'c de proyecto",
        'Resistencia a compresión en adoquín y block'
      ]
    }
  ];

  return (
    <section id="servicios" className="section-padding section-bg-light">
      <div className="container">
        <div className="section-title">
          <div className="badge">Nuestras Soluciones</div>
          <h2>Servicios Especializados</h2>
          <p>Ofrecemos pruebas y análisis precisos para cada etapa de tu construcción, con tecnología calibrada y personal experto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flip-container"
              style={{
                perspective: '1000px',
                width: '100%'
              }}
            >
              <div 
                className="flip-inner"
                style={{
                  position: 'relative',
                  width: '100%',
                  display: 'grid',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Frente de la tarjeta */}
                <div 
                  className="card flip-face"
                  style={{
                    gridArea: '1 / 1',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 'var(--space-6)',
                    margin: 0,
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary-super-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-4)',
                      marginTop: '0',
                      marginLeft: '0',
                      boxShadow: 'inset 0 0 10px rgba(255,255,255,0.05)'
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3 style={{ marginBottom: 'var(--space-2)', fontSize: '1.25rem', color: 'var(--text-heading)', padding: '0' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flexGrow: 1, padding: '0' }}>{service.description}</p>
                  
                  <div 
                    style={{ 
                      marginTop: 'var(--space-4)',
                      width: '30px',
                      height: '4px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: 'var(--radius-full)',
                      marginLeft: '0',
                      marginBottom: '0',
                      transition: 'width 0.3s'
                    }}
                    className="accent-line"
                  />
                </div>

                {/* Reverso de la tarjeta */}
                <div 
                  className="card flip-face feature-back-pad"
                  style={{
                    gridArea: '1 / 1',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: 'var(--primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 0,
                    boxShadow: 'var(--shadow-xl)'
                  }}
                >
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: 'var(--space-4)', borderBottom: '1px solid rgba(192,26,26,0.3)', paddingBottom: '0.5rem' }}>
                    Incluye ensayos de:
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: 'var(--text-heading)' }}>
                        <div style={{ color: 'var(--accent)', flexShrink: 0 }}>
                           <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="feature-text" style={{ lineHeight: 1.4, alignSelf: 'center' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .flip-container:hover .flip-inner {
           transform: rotateY(180deg);
        }
        .flip-container:hover .accent-line {
           width: 60px !important;
        }

        .feature-back-pad {
           padding: var(--space-6);
        }
        .feature-text {
           font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
           /* Ajuste para pantallas pequeñas (móviles) */
           .feature-back-pad {
              padding: var(--space-5) var(--space-4);
           }
           .feature-text {
              font-size: 12px;
           }
        }
      `}</style>
    </section>
  );
};

export default Services;
