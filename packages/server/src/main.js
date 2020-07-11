import { createServer, request } from 'http';
import { readFile } from 'fs';
import { resolve } from 'path';
import { parse } from 'querystring'; // Configura/Formatar os dados recebidos

// Criação e configuração inicial do router
const server = createServer((req, res) => {
   switch (req.url) {
      case '/status': {
         res.writeHead(200, {
            'Content-Type': 'application/json',
         });
         res.write(
            JSON.stringify({
               status: 'Okay'
            })
         );
         res.end();
         break;
      }
      case '/sign-in': {
         const filePath = resolve(__dirname, './pages/sign-in.html');
         readFile(filePath, (error, file) => {
            if (error) {
               res.writeHead(500, "Can't process HTML file.");
               res.end();
               return;
            }
            res.writeHead(200);
            res.write(file);
            res.end();
         });
         break;
      }
      case '/home': {
         const filePath = resolve(__dirname, './pages/home.html');
         readFile(filePath, (error, file) => {
            if (error) {
               res.writeHead(500, "Can't process HTML file.");
               res.end();
               return;
            }
            res.writeHead(200);
            res.write(file);
            res.end();
         });
         break;
      }

      case '/authenticate': {
         let data = '';
         req.on('data', (chunk) => {
            data += chunk;
         });
         req.on('end', () => {
            // console.log(parse(data))
            const params = parse(data);
            res.writeHead(301, {
               Location: '/home',
            });
            res.end()
         });
         break;
      }
      default: {
         res.writeHead(404, 'Service not found');
         res.end();
      }
   }
});

// env -> Objeto com as variaveis de ambiente
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
   console.log(`Server is listening at http:${HOSTNAME}:${PORT}`);
})