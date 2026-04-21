const fs = require('fs');
const https = require('https');

https.get("https://raw.githubusercontent.com/djaiss/mapsicon/master/all/mx/vector.svg", (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('mexico.svg', data);
    console.log("SVG Downloaded");
  });
}).on('error', err => {
  console.log("Error: ", err.message);
});
