const express = require('express');
const server = express();
const routes = require('./routes');

//Habilitar arquivos estáticos
server.use(express.static('public'));
server.use(routes);

server.get('/test', (request, response) => {
  return response.status(200).json({ message: 'API Works! 🆙'})
});

server.listen(3333, () => {
  console.log('Server listening on http://localhost:3333 🚀');
});