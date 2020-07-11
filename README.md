# Gama Academy - GraphQL 

## Projeto Educativo - Criação de um software para organizar demandas de um programdor
Tecnologia utilizadas (Monorepo):
- Node
- Graph QL


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

**Configurar package.json**
