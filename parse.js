const fs = require('fs');
const topojson = require('topojson-client');
const d3 = require('d3-geo');

const topology = JSON.parse(fs.readFileSync('mx.json', 'utf8'));
const objectsKey = Object.keys(topology.objects)[0];
const features = topojson.feature(topology, topology.objects[objectsKey]).features;

const targetStates = ['Coahuila', 'Durango', 'Chihuahua', 'Nuevo León', 'Sinaloa', 'Sonora'];

const targetFeatures = features.filter(f => {
  let name = f.properties.NAME_1 || f.properties.name || f.properties.NAME || f.properties.state_name || '';
  name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return targetStates.some(ts => ts.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === name);
});

if (targetFeatures.length === 0) { console.error("No states found", features[0].properties); process.exit(1); }

const projection = d3.geoMercator().fitSize([800, 600], { type: "FeatureCollection", features: targetFeatures });
const path = d3.geoPath().projection(projection);

const svgOutput = targetFeatures.map(f => {
  const name = f.properties.NAME_1 || f.properties.name || f.properties.NAME || f.properties.state_name || 'unknown';
  return `<path id="${name.replace(/\s+/g, '_')}" d="${path(f)}" />`;
});

fs.writeFileSync('paths.txt', svgOutput.join('\n\n'));

const cities = [
  { name: 'Torreón', coords: [-103.4068, 25.5428] },
  { name: 'Saltillo', coords: [-100.9792, 25.4213] },
  { name: 'San Pedro', coords: [-102.9833, 25.7667] },
  { name: 'Matamoros', coords: [-103.2289, 25.5269] },
  { name: 'Gómez Palacio', coords: [-103.4883, 25.5611] },
  { name: 'Lerdo', coords: [-103.5233, 25.5333] },
  { name: 'Durango', coords: [-104.6532, 24.0277] }
];

const cityCoords = cities.map(c => {
  const [x, y] = projection(c.coords);
  return `${c.name}: x=${x.toFixed(2)}, y=${y.toFixed(2)}`;
});

fs.writeFileSync('coords.txt', cityCoords.join('\n'));
console.log("SUCCESS");
