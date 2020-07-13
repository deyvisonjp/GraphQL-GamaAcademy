# Gama Academy - GraphQL 

## Projeto Educativo - Criação de um software para organizar demandas de um programdor
Tecnologias utilizadas (Monorepo):
- Node
- Express
- React
- Graph QL
- Apollo


### Iniciar projeto com :

- `npm init`

- `npm init -D esm` ou `yarn create esm` : _esm é o carregador de módulo ECMAScript_

- Configurar estrutura das pastas

- `npm i -g pnpm` : package manage para monorepos

- `pnpm init` : Observar o package nome

- Alterar o nome do package.json iniciado em src -> "name": "@dev-demands/server",

- Criar o arquivo pnpm-workspace.yaml (Motivação): Indicar onde ficam os pacotes do monorepositórios

- `pnpm i --filter @dev-demands/server`

- `pnpm run start @dev-demands/server`

- Estrutura das pastas (funcionando linux):   
![Estrutura inicial das pastas](./img/estrutura-pastas.png?raw=true "Optional Title")

## Pacotes com ReactJs

- `pnpx create-react-app packages/web` -> 'pnpx' Serve para rodar comandos npx;
- Excluir node_modules e yarn.lock criado na pasta web;
- `pnpm i --filter @dev-demands/web` -> ons. renomear name=@dev-demands/web;
- `pnpm i react-router-dom --filter @dev-demands/web`;
- `pnpm run start --filter @dev-demands/web` -> Executar com react

## Instalando express para requisições

- `pnpm install express --filter @dev-demands/server`   
_midlewares: são padroes(pattern's) de implementação para encaixar várias funções para rodarem em sequência_
- Exemplo COM EXPRESS     
`
server.get('/status', (_, response) => {
   response.send({
      status: 'Okay'
   })
})
` 
- Exemplo SEM EXPRESS     
`
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
` 
## Requisição assíncrona

- Instalar a extensão do cors, para tratamento de erros   
`pnpm i cors --filter dev-demands/server` 

## API REST

#### Como funciona RESTful?
- Recebe parâmetros e envia dados usando como JSON como formato;
- Todas as operações são abstraidas dentro dos metodos HTTP (GET, POST, PUT, PATCH, DELETE e OPTIONS);
- As rotas, ou endpoints são baseadas nas entidades das aplicações (ex. /users/:userID);

#### Problemas
APIs RESTful são limitadas pelos protocolos que a definem, pois não é possível lidar com as relações entre entidades, sendo necessária a implementação manual.   
   
- Dados insuficientes nas API - (Under-Fetching);
- Dados mais que suficientes nas APIs - (Over-Fetching); 

## Apollo Server 
Plataforma que auxilia no trabalho com Graphql

Instalação
- `pnpm i apollo-server-express --filter @dev-demands/server` 

- Ao terḿino da configuração, será gerada uma endpoint (/graphql) para testes.
