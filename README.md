# Catering MCZ — apresentação web

Uma landing page responsiva criada a partir do material de apresentação atualizado da Catering MCZ. Não requer JavaScript de servidor nem instalação de dependências.

## Abrir

Abra `index.html` em um navegador atualizado. Para testar com um servidor local, execute na pasta do projeto:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Recursos

- Roteiro comercial em nove etapas, da história e estrutura ao contato comercial.
- Seções institucionais de estrutura, qualidade e segurança alimentar, operação, segmentos de clientes e personalização.
- Navegação por temas, busca e filtros de gastronomia.
- Galeria deslizante com navegação por botões e gesto em telas sensíveis ao toque.
- Fotos interativas com informações, navegação entre imagens, ampliação e download.
- Conteúdo editável no próprio site; as alterações são salvas no armazenamento local do navegador usado para editar.
- Roteiro de conversa comercial para baixar, compartilhamento e impressão.

## Editar os textos

Use **Editar conteúdo** no rodapé ou pressione `E`. Selecione os textos destacados, faça as alterações e escolha **Salvar neste navegador**. As alterações ficam neste dispositivo e navegador; para removê-las, use **Restaurar original**.

O conteúdo e as fotografias de origem ficam em `assets/deck/deck-data.js` e `assets/deck/`. Serviços sem fotografia específica no material são apresentados sem imagem inventada.

## Portfólio comercial

O site separa a apresentação institucional do catálogo de produtos. A seção do catálogo indica as categorias previstas — sanduíches e lanches, refeições, cafés e salgados, sobremesas — sem apresentar preços; as imagens atuais continuam identificadas como exemplos do material institucional. Para concluir o catálogo comercial, substitua ou complemente esses exemplos por fotografias reais dos produtos aprovados.

A capacidade diária atual de produção não foi informada no material recebido. Por isso, o site apresenta o planejamento por demanda, sem divulgar um volume não confirmado. Atualize essa informação somente após validação da equipe MCZ.

## Publicar

Publique `index.html`, `styles.css`, `script.js` e a pasta `assets/` em qualquer hospedagem estática. As fontes tipográficas são carregadas do Google Fonts; o restante do site funciona sem serviços de terceiros.
