
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CTA = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xnjlbvpr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <section id="contacto" className="section-padding section-bg-light">
      <div className="container">
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative shapes */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            backgroundColor: 'var(--primary-super-light)',
            borderRadius: '50%',
            zIndex: 0
          }} />

          <div className="grid contact-mobile-fix gap-12" style={{ position: 'relative', zIndex: 1 }}>
            
            {/* Left Column - Contact Info */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '2.5rem' }}>Asegura la calidad de tu próximo gran proyecto</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '1.1rem' }}>
                Agenda una consulta técnica con nuestros especialistas. Permítenos ser tu aliado en el control de calidad y validación de materiales de construcción.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(192, 26, 26, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--accent)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Llámanos</span>
                    <strong style={{ fontSize: '1.1rem' }}>+52 8711047174</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(192, 26, 26, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--accent)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Escríbenos</span>
                    <strong style={{ fontSize: '13px', wordBreak: 'break-word', display: 'block' }}>gasavelaboratorio@gmail.com</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(192, 26, 26, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--accent)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ubicación Central</span>
                    <strong style={{ fontSize: '1.1rem', display: 'block' }}>Torreón Coahuila, México</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>C. Nuez Brantome #240, Quinta Los Nogales, C.P. 27078</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form 
                className="contact-form-wrapper"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-md)'
                }}
                onSubmit={handleSubmit}
              >
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: '1.5rem' }}>Solicitar Cotización</h3>
                
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="nombre" style={{ display: 'block', marginBottom: 'var(--space-1)', fontSize: '0.9rem', fontWeight: 600 }}>Nombre Completo</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Ej. Juan Pérez" required style={{ width: '100%', padding: '12px 16px', minHeight: '48px', fontSize: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} />
                </div>
                
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-1)', fontSize: '0.9rem', fontWeight: 600 }}>Correo Electrónico</label>
                  <input id="email" name="email" type="email" placeholder="juan@constructora.com" required style={{ width: '100%', padding: '12px 16px', minHeight: '48px', fontSize: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} />
                </div>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="servicio" style={{ display: 'block', marginBottom: 'var(--space-1)', fontSize: '0.9rem', fontWeight: 600 }}>Servicio de Interés</label>
                  <select id="servicio" name="servicio" required style={{ width: '100%', padding: '12px 16px', minHeight: '48px', fontSize: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
                    <option value="">Selecciona una opción</option>
                    <option value="Laboratorio de Concreto">Laboratorio de Concreto</option>
                    <option value="Mecánica de Suelos">Mecánica de Suelos</option>
                    <option value="Control de Calidad en Sitio">Control de Calidad en Sitio</option>
                    <option value="Ensayes de Carga Axial">Ensayes de Carga Axial</option>
                  </select>
                </div>

                {status === 'success' && (
                  <div style={{ padding: '0.75rem', marginBottom: '1rem', backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', color: '#25D366', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
                    Tu solicitud fue enviada, te contactaremos pronto
                  </div>
                )}

                {status === 'error' && (
                  <div style={{ padding: '0.75rem', marginBottom: '1rem', backgroundColor: 'rgba(192, 26, 26, 0.1)', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
                    Hubo un problema al enviar, intenta de nuevo o contáctanos por WhatsApp
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer', backgroundColor: '#C01A1A', color: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '14px', textAlign: 'center', border: 'none', fontSize: '16px', fontWeight: 'bold' }}>
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <style>{`
        .contact-mobile-fix {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 768px) {
          #contacto {
            padding-top: 120px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .contact-mobile-fix {
            display: flex !important;
            flex-direction: column !important;
            gap: var(--space-8) !important;
          }
          #contacto h2 {
            font-size: 2rem !important;
            line-height: 1.3 !important;
          }
          .contact-form-wrapper {
            padding: var(--space-5) var(--space-4) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
