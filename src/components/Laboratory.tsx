

const Laboratory = () => {
  return (
    <section id="laboratorio" className="section-padding" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--text-heading)', margin: 0 }}>Nuestro laboratorio en acción</h2>
        </div>

        <div className="bento-grid">
          
          {/* 1. Izquierda (toda la altura) */}
          <div className="bento-item image-card">
            <img src="/lab-cilindro.jpg" alt="Cilindro de concreto" />
            <div className="overlay">
              <p>Ensaye de resistencia a compresión</p>
            </div>
          </div>

          {/* 2. Derecha superior */}
          <div className="bento-item image-card">
            <img src="/lab-revenimiento.jpg" alt="Revenimiento en campo" />
            <div className="overlay">
              <p>Prueba de revenimiento en campo</p>
            </div>
          </div>

          {/* 3. Derecha inferior */}
          <div className="bento-item image-card">
            <img src="/lab-tamiz.jpg" alt="Tamiz en laboratorio" />
            <div className="overlay">
              <p>Análisis granulométrico en laboratorio</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: var(--space-4);
          height: 600px;
        }
        
        .bento-item:nth-child(1) { grid-row: 1 / -1; grid-column: 1; }
        .bento-item:nth-child(2) { grid-row: 1; grid-column: 2; }
        .bento-item:nth-child(3) { grid-row: 2; grid-column: 2; }

        .image-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          box-shadow: var(--shadow-md);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .image-card .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(10, 10, 10, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-card:hover .overlay {
          opacity: 1;
        }

        .image-card:hover img {
          transform: scale(1.05); /* Efecto cinemático extra muy sutil */
        }

        .image-card .overlay p {
          color: #E8ECF0;
          font-weight: 600;
          font-size: 1.35rem;
          margin: 0;
          text-align: center;
          padding: 1.5rem;
          transform: translateY(15px);
          transition: transform 0.3s ease;
          text-shadow: 0 4px 10px rgba(0,0,0,0.8);
        }

        .image-card:hover .overlay p {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .bento-grid {
             grid-template-columns: 1fr;
             grid-template-rows: auto auto auto;
             height: auto;
          }
          .bento-item {
             grid-row: auto !important;
             grid-column: auto !important;
             height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Laboratory;
