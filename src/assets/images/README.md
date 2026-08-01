# Imagens do site

Todas as imagens do site estão em `/public` e são servidas diretamente a partir da raiz:

- `/logo.jpeg` — logótipo da marca (fundo preto, conteúdo branco)
- Fotografias de produto (960×1280, 3:4), nomeadas pelo próprio produto:
  - `/tshirt1.jpeg` … `/tshirt7.jpeg` — T-Shirts
  - `/sueter1.jpeg` … `/sueter4.jpeg` — Suéteres
  - `/calca1.jpeg` … `/calca3.jpeg` — Calças
  - `/cueca1.jpeg` … `/cueca2.jpeg` — Cuecas
  - `/relogio1.jpeg` … `/relogio2.jpeg` — Relógios
  - `/regata.jpeg` — Regatas
  - `/necessary1.jpeg` — Necessaires
  - `/bolsa1.jpeg` — Bolsas

O catálogo é gerado a partir destes ficheiros em `src/data/fromPublic.js`: cada imagem
vira um produto com nome, categoria e preço derivados do ficheiro
(ex.: `tshirt1.jpeg` → “T-Shirt 1”, categoria “T-Shirts”, preço da categoria).

As referências decorativas (hero, categorias, editoriais, lookbook, instagram) estão
centralizadas nos ficheiros de dados em `src/data/`:

- `src/data/products.js` — distribuição dos produtos (Novidades / Em Alta)
- `src/data/fromPublic.js` — catálogo gerado a partir de `/public`
- `src/data/categories.js`, `editorials.js`, `featuredCollection.js`, `lookbook.js`, `instagram.js`
- `src/data/site.js` (`heroMedia` + `logo`)

Para adicionar mais imagens: coloque-as em `/public` com o nome do produto
(ex.: `tshirt8.jpeg`) e adicione o sufixo correspondente em `src/data/fromPublic.js`.
Não são precisas alterações nos componentes — todas as imagens são conduzidas pelos dados.
