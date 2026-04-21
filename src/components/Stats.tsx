import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure exact final value
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Stats = () => {
  const stats = [
    { id: 1, end: 15, suffix: '+', label: 'Años de Experiencia' },
    { id: 2, end: 1200, suffix: '+', label: 'Proyectos Evaluados' },
    { id: 3, end: 48, suffix: 'h', label: 'Entregas Récord' },
    { id: 4, end: 100, suffix: '%', label: 'Estandarización' },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {stats.map(stat => (
            <div key={stat.id} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-heading)', lineHeight: 1.1, marginBottom: '0.5rem', textShadow: '0 0 20px rgba(192,26,26,0.15)' }}>
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
