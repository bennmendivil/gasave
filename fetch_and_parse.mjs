import fs from 'fs';
import * as topojson from 'topojson-client';
import * as d3 from 'd3-geo';
import https from 'https';

https.get('https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const topology = JSON.parse(data);
      const objectsKey = Object.keys(topology.objects)[0];
      const features = topojson.feature(topology, topology.objects[objectsKey]).features;

      const targetStates = ['coahuila', 'durango', 'chihuahua', 'nuevo leon', 'sinaloa', 'sonora'];

      const targetFeatures = features.filter(f => {
        let name = f.properties.name || f.properties['hc-key'] || '';
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return targetStates.some(ts => ts === name || name.includes(ts));
      });

      console.log(`Found ${targetFeatures.length} states.`);
      if (targetFeatures.length === 0) { console.error("No states found", features[0].properties); process.exit(1); }

      const projection = d3.geoMercator().fitSize([800, 600], { type: "FeatureCollection", features: targetFeatures });
      const path = d3.geoPath().projection(projection);

      const items = targetFeatures.map(f => {
        const name = f.properties.name;
        return `    <path\n      className="map-state"\n      d="${path(f)}"\n      id="state-${name.replace(/\s+/g, '-')}"\n      onMouseEnter={(e) => e.currentTarget.style.fill = '#2A2A2E'}\n      onMouseLeave={(e) => e.currentTarget.style.fill = '#1C1C1E'}\n    />`;
      });
      fs.writeFileSync('paths.txt', items.join('\n'));

      const cities = [
        { name: 'Torreón, Coahuila', coords: [-103.4068, 25.5428] },
        { name: 'Saltillo, Coahuila', coords: [-100.9792, 25.4213] },
        { name: 'San Pedro, Coahuila', coords: [-102.9833, 25.7667] },
        { name: 'Matamoros, Coahuila', coords: [-103.2289, 25.5269] },
        { name: 'Gómez Palacio, Durango', coords: [-103.4883, 25.5611] },
        { name: 'Lerdo, Durango', coords: [-103.5233, 25.5333] },
        { name: 'Durango, Durango', coords: [-104.6532, 24.0277] }
      ];

      const cityOutput = cities.map((c, i) => {
        const [x, y] = projection(c.coords);
        return `
    <g transform="translate(${x.toFixed(2)}, ${y.toFixed(2)})" className="map-marker" style={{ zIndex: 10 }}>
      <circle cx="0" cy="0" r="4" fill="#C01A1A" />
      <circle cx="0" cy="0" r="4" fill="#C01A1A" className="ping-dot" />
      <text x="0" y="16" fill="white" fontSize="11px" textAnchor="middle" style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
        ${c.name.split(',')[0]}
      </text>
    </g>`;
      });

      fs.writeFileSync('coords.txt', cityOutput.join('\n'));
      console.log("SUCCESS. Files paths.txt and coords.txt created.");
    } catch(e) {
      console.error(e);
    }
  });
});
