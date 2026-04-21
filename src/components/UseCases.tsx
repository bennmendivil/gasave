
import { AlertCircle, Target, CheckCircle2 } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      problem: 'Incertidumbre en la resistencia inicial del concreto para descimbrado rápido.',
      solution: 'Implementación de ensayes de carga axial a edades tempranas (3 y 7 días).',
      result: 'Optimización del tiempo de obra en un 15% sin comprometer la seguridad estructural.',
      icon: <Target className="text-accent" size={24} />
    },
    {
      problem: 'Terreno con posible inestabilidad para cimentación profunda.',
      solution: 'Estudio completo de mecánica de suelos con sondeos estratigráficos.',
      result: 'Diseño de cimentación ajustado, evitando sobrecostos por excavación innecesaria.',
      icon: <AlertCircle className="text-accent" size={24} />
    },
    {
      problem: 'Variaciones en el revenimiento del concreto entregado en obra.',
      solution: 'Control de calidad continuo en sitio durante cada colado crítico.',
      result: 'Rechazo oportuno de mezclas fuera de especificación, previniendo fisuras futuras.',
      icon: <CheckCircle2 className="text-accent" size={24} />
    }
  ];

  return (
    <section id="casos" className="section-padding">
      <div className="container">
        <div className="section-title">
          <div className="badge">Experiencia Comprobada</div>
          <h2>Casos de Éxito</h2>
          <p>Ejemplos reales de cómo nuestra intervención en el control de calidad ha resuelto problemas críticos en la construcción.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                borderTop: '4px solid var(--accent)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-4)',
                  paddingBottom: 'var(--space-4)',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {useCase.icon}
                <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--primary)' }}>Desafío en Obra</h3>
              </div>
              
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Problema:</span>
                  <p style={{ fontSize: '0.95rem', marginTop: 'var(--space-1)', color: 'var(--text-main)' }}>{useCase.problem}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Nuestra Solución:</span>
                  <p style={{ fontSize: '0.95rem', marginTop: 'var(--space-1)', color: 'var(--text-main)' }}>{useCase.solution}</p>
                </div>
              </div>
              
              <div 
                style={{ 
                  marginTop: 'var(--space-5)', 
                  padding: 'var(--space-3)', 
                  backgroundColor: 'var(--primary-super-light)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: 'var(--space-1)' }}>Resultado aportado:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, fontWeight: 500 }}>{useCase.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
