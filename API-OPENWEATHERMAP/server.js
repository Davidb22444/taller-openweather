const http = require('http');

const API_KEY = 'adedd798efbb34370af29de98bc1439f';

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://localhost:3000`);
  const ciudad = url.searchParams.get('ciudad');
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');

  let climaURL, pronosticoURL;

  if (lat && lon) {
    climaURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    pronosticoURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
  } else if (ciudad) {
    climaURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
    pronosticoURL = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
  } else {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Debes enviar una ciudad o coordenadas' }));
    return;
  }

  try {
    const [climaRes, pronosticoRes] = await Promise.all([
      fetch(climaURL),
      fetch(pronosticoURL)
    ]);

    const clima = await climaRes.json();
    const pronostico = await pronosticoRes.json();

    res.writeHead(200);
    res.end(JSON.stringify({ clima, pronostico }));
  } catch (error) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'Error al consultar la API' }));
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});