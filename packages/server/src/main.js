import express, { response } from 'express';
// Abaixo, duas importações que eram usadas sem o express
// import { createServer, request } from 'http';
// import { parse } from 'querystring'; // Configura/Formata os dados recebidos

const server = express();

server.get('/status', (_, response) => {
   response.send({
      status: 'Okay'
   });
});

server.post('/authenticate', express.json(), (request, response) => {
   console.log(
      'E-mail', request.body.email,
      'Senha', request.body.password
   );
   response.send();
});

// env -> Objeto com as variaveis de ambiente
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
   console.log(`Server is listening at http:${HOSTNAME}:${PORT}`);
})