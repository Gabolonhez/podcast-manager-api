# Podcast Frontend

Frontend React TypeScript para o sistema de gerenciamento de podcasts.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Axios** para consumo da API
- **React Router** para navegação
- **Lucide React** para ícones

## 📋 Pré-requisitos

- Node.js 16+
- npm ou yarn
- API do podcast rodando na porta 3333

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do frontend:

```bash
cd podcast-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Certifique-se de que a API está rodando:

```bash
# Na pasta da API (podcast-api)
npm run start:dev
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse a aplicação em: `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho da aplicação
│   └── PodcastCard.tsx # Card para exibir episódios
├── pages/              # Páginas da aplicação
│   └── PodcastList.tsx # Página principal com lista de episódios
├── services/           # Serviços para consumo da API
│   └── api.ts         # Configuração do Axios e endpoints
├── types/              # Tipos TypeScript
│   └── podcast.ts     # Interfaces dos dados
├── App.tsx            # Componente principal
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais
```

## 🔌 API Endpoints

O frontend consome os seguintes endpoints da API:

- `GET /list` - Lista todos os episódios
- `GET /episode?p=nome` - Busca episódios por nome do podcast

## 📱 Funcionalidades

- ✅ Listagem de episódios de podcast
- ✅ Busca por nome do podcast, episódio ou categoria
- ✅ Reprodução de episódios (abre no YouTube)
- ✅ Interface responsiva
- ✅ Loading states e tratamento de erros

## 🎨 Customização

### Cores

As cores primárias podem ser alteradas no arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores aqui
      }
    }
  }
}
```

### API URL

Para alterar a URL da API, edite o arquivo `src/services/api.ts`:

```ts
const api = axios.create({
  baseURL: "http://localhost:3333", // Sua URL aqui
});
```

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🤝 Integração com a API

Este frontend foi desenvolvido para trabalhar com a API de podcast que possui os seguintes endpoints:

### Modelo de Dados

```typescript
interface PodcastEpisode {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

interface PodcastTransferModel {
  statusCode: string;
  body: PodcastEpisode[];
}
```

### CORS

Certifique-se de que a API está configurada para aceitar requisições do frontend:

```typescript
// Na sua API, adicione headers CORS
response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
response.setHeader("Access-Control-Allow-Headers", "Content-Type");
```
