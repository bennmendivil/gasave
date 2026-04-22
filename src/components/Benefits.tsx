
import { ShieldCheck, HardHat, Award, Clock } from 'lucide-react';
import LogoText from './LogoText';

const Benefits = () => {
  const benefits = [
    {
      title: 'Enfoque en control de calidad',
      description: 'Más que pruebas, ofrecemos certeza. Procesos estandarizados que garantizan resultados precisos y confiables.',
      icon: <ShieldCheck size={40} color="var(--accent)" />
    },
    {
      title: 'Supervisión en sitio de la obra',
      description: 'Presencia continua en el campo para asegurar que las especificaciones de diseño se cumplan estrictamente.',
      icon: <HardHat size={40} color="var(--accent)" />
    },
    {
      title: 'Equipos certificados',
      description: 'Tecnología de punta y maquinaria calibrada bajo normativas oficiales para garantizar exactitud en cada ensayo.',
      icon: <Award size={40} color="var(--accent)" />
    },
    {
      title: 'Asesoramiento continuo',
      description: 'Acompañamiento especializado de nuestros ingenieros desde el diseño hasta la recepción de la obra.',
      icon: <Clock size={40} color="var(--accent)" />
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-primary" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/tamiz2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid gap-12 items-center benefits-mobile-fix">
          
          {/* Left Column - Text Content */}
          <div>
            <div className="badge">
              ¿Por qué elegirnos?
            </div>
            <h2 style={{ color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>Diferenciales que Aseguran el Éxito de Tu Proyecto</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '1.125rem' }}>
              En <LogoText />, entendemos que la calidad de los materiales define la durabilidad de la estructura. Nuestro compromiso es brindarte la información exacta para tomar decisiones seguras.
            </p>
            
            <a href="#contacto" className="btn btn-primary">Hablar con un Experto</a>
          </div>

          {/* Right Column - Grid of benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Accreditation Badge */}
            <div 
              className="benefit-card col-span-1 sm:col-span-2"
              style={{
                backgroundColor: 'rgba(192, 26, 26, 0.05)',
                border: '2px solid var(--accent)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 'var(--space-6)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(192, 26, 26, 0.15)',
                flexWrap: 'wrap'
              }}
            >
              <img src="/ema.png" alt="Acreditación EMA" style={{ height: '70px', objectFit: 'contain', backgroundColor: 'white', padding: '8px', borderRadius: '4px' }} />
              <div>
                <h3 style={{ color: 'var(--text-heading)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Laboratorio de ensayo acreditado</h3>
                <span style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.05em' }}>C - 1902-361/25</span>
              </div>
            </div>

            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform var(--transition-normal)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  {benefit.icon}
                </div>
                <h3 style={{ color: 'var(--text-heading)', fontSize: '1.125rem', marginBottom: 'var(--space-2)' }}>{benefit.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        .benefits-mobile-fix {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 768px) {
          #beneficios {
            padding-top: 120px !important; /* Corrects top padding as requested */
          }
          .benefits-mobile-fix {
            display: flex;
            flex-direction: column;
            gap: var(--space-8);
          }
          #beneficios h2 {
            font-size: 1.8rem;
            line-height: 1.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
