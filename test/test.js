import http from 'http';

const options = {
  hostname: '127.0.0.1', // Cambiar localhost por 127.0.0.1
  port: 3001,            // El puerto donde está escuchando tu servidor
  path: '/api/test',     // La ruta que deseas probar
  method: 'GET'          // El método HTTP que estás utilizando
};

// Realizar la solicitud
const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk; // Acumular los datos de la respuesta
  });

  res.on('end', () => {
    console.log('Respuesta del servidor:', data); // Imprimir la respuesta
  });
});

// Manejar errores de la solicitud
req.on('error', (error) => {
  console.error('Error en la solicitud:', error);
});

// Finalizar la solicitud
req.end();
