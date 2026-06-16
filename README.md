# TechBlog | Portal de Tecnologia

Este projeto é uma aplicação de blog desenvolvida com Next.js 15 (App Router), focada em performance, SEO dinâmico e boas práticas de arquitetura de software com Server Components.

## Funcionalidades

- **Roteamento Dinâmico:** Artigos renderizados dinamicamente através de slugs.
- **Data Fetching:** Utilização de dados mockados (JSON local) com simulação de delay para ambiente assíncrono.
- **SEO Dinâmico:** Implementação da função `generateMetadata` para otimização de busca por página.
- **Arquitetura Moderna:** Uso de Server Components para renderização estática (SSG) no build.
- **UX/UI Rebuscado:** Interface com design moderno, utilizando Glassmorphism e transições suaves.

## Tecnologias Utilizadas

- Next.js 15
- React
- TypeScript
- CSS Modules
- Prettier (Padronização de 4 espaços)

## Como Instalar e Executar

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/meu-blog-next.git](https://github.com/SEU-USUARIO/meu-blog-next.git)
   ```
2. **Instale as dependências:**

  ```bash
  npm install
  ```
3. **Execute o servidor de desenvolvimento:**

  ```bash
  npm run dev
  ```
4. **Acesse a aplicação:**
  Abra http://localhost:3000 no seu navegador.

## Manutenção de Código
O projeto possui integração com ESLint e Prettier para garantir a qualidade do código.

## Para formatar todo o código automaticamente:
  ```bash
  npm run format
  ```
## Para verificar a formatação:

  ```bash
  npm run format:check
  ```

## Deploy
O projeto está configurado para deploy contínuo na Vercel. Ao subir alterações para o repositório principal, o build de produção é gerado automaticamente.
