
import { Target, Lightbulb, Shield } from 'lucide-react';
import LogoText from './LogoText';

const About = () => {
  return (
    <section id="nosotros" className="section-padding section-bg-light" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge">Nuestra Identidad</div>
          <h2>Quiénes Somos</h2>
          <p>Comprometidos con la excelencia y la satisfacción de nuestros clientes en la industria de la construcción.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Misión */}
          <div className="card" style={{ border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden', height: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(192, 26, 26, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--accent)' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Misión</h3>
            </div>
            <p style={{ color: 'var(--text-main)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>
              Proporcionar constantemente un servicio de alta calidad y excelencia operativa a través de la aplicación de procesos estandarizados y eficientes en todas las áreas funcionales, trabajar con compromiso a la mejora continua y proporcionar un alto nivel de transparencia de datos para gestionar eficazmente la calidad del servicio y tomar las decisiones correctas.
            </p>
          </div>

          {/* Visión */}
          <div className="card" style={{ border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden', height: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent)' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(192, 26, 26, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--accent)' }}>
                <Lightbulb size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Visión</h3>
            </div>
            <p style={{ color: 'var(--text-main)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>
              Ser un laboratorio de referencia en la industria de la construcción, reconocido por su excelencia en la calidad y servicio, proporcionando soluciones confiables y precisas.
            </p>
          </div>
        </div>

        {/* Política de Calidad */}
        <div className="card" style={{ border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent)' }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(192, 26, 26, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--accent)' }}>
              <Shield size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Política de Calidad</h3>
          </div>
          
          <p style={{ color: 'var(--text-main)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>
            En <LogoText /> estamos comprometidos con nuestros clientes en ofrecer servicios de la más alta calidad para cumplir con sus necesidades. Es por ello que la Dirección General de <LogoText /> ha decidido implantar un sistema de gestión de la calidad que se compromete a cumplir con los requisitos aplicables con el fin de conseguir la mejora continua del sistema de gestión de calidad, así como:
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {[
              "Comprender y cumplir con las necesidades y requerimientos de nuestros clientes para nuestros servicios.",
              "Contar con el personal más altamente calificado tanto en el área operativa como administrativa.",
              "Proporcionar constantemente un servicio de alta calidad y excelencia operativa a través de la aplicación de procesos estandarizados y eficientes en todas las áreas funcionales.",
              "Trabajar con compromiso a la mejora continua.",
              "Proporcionar un alto nivel de transparencia de datos para gestionar eficazmente la calidad del servicio y tomar las decisiones correctas.",
              "Documentar nuestros procesos de gestión, control de calidad y que estén ampliamente documentados para mejorar continuamente nuestros servicios."
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <div style={{ marginTop: '0.4rem', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }}></div>
                <span style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
