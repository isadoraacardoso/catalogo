# 📦 Catálogo de Acessórios

Este projeto é uma aplicação web desenvolvida para uma loja de acessórios, com tecnologias modernas como **Next.js**, **TypeScript** e **Prisma**. A aplicação lista acessórios cadastrados no banco de dados e foi estruturada para facilitar futuras melhorias, como autenticação e cadastro dinâmico.

## 💻 Tecnologias utilizadas

- **Next.js (App Router)** — estrutura moderna para aplicações React com rotas baseadas em pastas.
- **TypeScript** — linguagem com tipagem estática para maior segurança no desenvolvimento.
- **React** — biblioteca para construção da interface de usuário.
- **Prisma ORM** — ferramenta para modelagem e manipulação do banco de dados.
- **Neon** — banco de dados PostgreSQL serverless usado na nuvem.
- **Tailwind CSS** *(opcional, se estiver usando)* — estilização com classes utilitárias.
- **Vercel** — plataforma de hospedagem usada para deploy da aplicação.

## 📝 Como executar

```bash
git clone https://github.com/isadoraacardoso/catalogo.git
cd catalogo
npm install
# Configure a variável DATABASE_URL no arquivo .env
npx prisma migrate dev
npm run dev
