import fs from 'fs';

const paths = fs.readFileSync('paths.txt', 'utf8');

const rawCoords = fs.readFileSync('coords.txt', 'utf8').split('\n\n'); 

// Modify coords to space out La Laguna cluster slightly to prevent total overlapping 
// Original Torreón: (560.87, 407.03), Matamoros: (569.45, 407.88), San Pedro: (581.29, 395.05)
// Gómez Palacio: (556.94, 406.05), Lerdo: (555.25, 407.53)

// The collision there is massive because they're essentially the same metro area on a country-wide scale map.
// I will just use the raw coordinates, but I'll add a `dy` shift, or `textAnchor` shift so they don't overlap completely.
// Let's customize the text positions based on city names:
const cities = [
    { name: 'Torreón', x: 560.87, y: 407.03, txtX: 0, txtY: 28, align: 'middle' },
    { name: 'Gómez Palacio', x: 556.94, y: 406.05, txtX: -15, txtY: -10, align: 'end' },
    { name: 'Lerdo', x: 555.25, y: 407.53, txtX: -10, txtY: 15, align: 'end' },
    { name: 'San Pedro', x: 581.29, y: 395.05, txtX: 10, txtY: -10, align: 'middle' },
    { name: 'Matamoros', x: 569.45, y: 407.88, txtX: 15, txtY: 15, align: 'start' },
    { name: 'Saltillo', x: 677.90, y: 413.51, txtX: 0, txtY: 20, align: 'middle' },
    { name: 'Durango', x: 500.78, y: 487.48, txtX: 0, txtY: 20, align: 'middle' }
];

const markersOutput = cities.map(c => `
    <g transform="translate(${c.x.toFixed(2)}, ${c.y.toFixed(2)})" className="map-marker" style={{ zIndex: 10 }}>
      {/* Círculo base 8px (r=4) */}
      <circle cx="0" cy="0" r="4" fill="#C01A1A" />
      {/* Animación de pulso continuo */}
      <circle cx="0" cy="0" r="4" fill="#C01A1A" className="ping-dot" style={{ transformOrigin: 'center' }} />
      {/* Texto de la ciudad de 11px */}
      <text x="${c.txtX}" y="${c.txtY}" fill="white" fontSize="11px" textAnchor="${c.align}" style={{ pointerEvents: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.8)' }}>
        ${c.name}
      </text>
    </g>`).join('\n');

const componentCode = `import React from 'react';

const Presence = () => {
  return (
    <section id="presencia" className="section-padding" style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ width: '100%', maxWidth: '100%' }}>
        <div className="section-title">
          <div className="badge">Alcance Operativo</div>
          <h2 style={{ color: 'var(--text-heading)' }}>Nuestra Presencia</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Cobertura estratégica permanente en los principales polos de desarrollo del norte de México.
          </p>
        </div>

        {/* MAPA SVG DEDICADO DE LOS 6 ESTADOS */}
        <div style={{ 
          position: 'relative', 
          width: '100%',
          maxWidth: '1000px', 
          margin: '0 auto', 
          aspectRatio: '16/9', 
          overflow: 'hidden'
        }}>
          {/* El viewBox 150 a 750 (600 ancho) enfoca perfectamente el Norte */}
          <svg viewBox="100 20 650 500" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}>
            <g stroke="#444444" strokeWidth="1" fill="#1C1C1E" strokeLinejoin="round" strokeLinecap="round" style={{ transition: 'fill 0.3s ease' }}>
${paths}
            </g>

            {/* Marcadores de ciudades */}
            <g>
${markersOutput}
            </g>
          </svg>
        </div>
      </div>
      
      <style>{\`
        .map-state {
           transition: fill 0.3s ease;
           cursor: crosshair;
        }
        /* No usar !important para permitir que los estilos en línea de onMouseEnter funcionen correctamente
           Oh, the onMouseEnter relies on direct DOM, so it will work */
           
        .ping-dot { 
           animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; 
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3.5); opacity: 0; }
        }
      \`}</style>
    </section>
  );
};

export default Presence;
`;

fs.writeFileSync('src/components/Presence.tsx', componentCode);
console.log("Component injected into Presence.tsx");
