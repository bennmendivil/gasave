
const Clients = () => {
  const customClients = [
    { name: "DHL", style: { fontWeight: 900, fontStyle: 'italic', color: '#D40511' } },
    { name: "Trebotti", style: { fontWeight: 800, letterSpacing: '0.05em' } },
    { name: "CFE", style: { fontWeight: 900, color: '#008C4A', letterSpacing: '0.05em' } },
    { name: "Constructora Samsara", style: { fontWeight: 600, borderLeft: '3px solid var(--accent)', paddingLeft: '8px' } },
    { name: "Grupo Montemeru", style: { fontWeight: 700, textTransform: 'uppercase' as const } },
    { name: "Montiac Torreon", style: { fontWeight: 500, letterSpacing: '0.1em' } },
    { name: "Grupo Inmobiliario CRE", style: { fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-heading)' } },
    { name: "SALI Edificaciones", style: { fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' as const } }
  ];

  // We replicate the list a few times to guarantee a seamless loop regardless of monitor width.
  const displayClients = [...customClients, ...customClients, ...customClients, ...customClients];

  return (
    <section id="clientes" style={{ 
      padding: 'var(--space-6) 0', 
      borderTop: '1px solid var(--border-color)', 
      borderBottom: '1px solid var(--border-color)', 
      overflow: 'hidden', 
      backgroundColor: 'var(--bg-main)' 
    }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
        <span style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em', 
          fontWeight: 600 
        }}>
          Clientes que confían en nosotros
        </span>
      </div>
      
      <div className="ticker-wrapper" style={{ 
        width: '100%', 
        overflow: 'hidden', 
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}>
        <div className="ticker-track" style={{
          display: 'flex',
          width: 'max-content',
          animation: 'ticker-scroll 35s linear infinite'
        }}>
          {displayClients.map((client, index) => (
            <div 
              key={index} 
              style={{
                fontSize: '1.5rem',
                color: 'var(--text-main)',
                padding: '0 var(--space-8)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                opacity: 0.6,
                transition: 'opacity var(--transition-fast), transform var(--transition-fast)',
                cursor: 'default',
                ...client.style
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.opacity = '0.6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          /* We have 4 identical chunks, so we move exactly 25% of the total track width to complete one cycle */
          100% { transform: translateX(calc(-25%)); }
        }
        
        .ticker-track:hover {
          /* Optional: pause animation on hover if desired, usually good for readability */
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
