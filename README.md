# SNCT 2026 · Ciência Delas (IFPE Palmares)

Site estático em **Nuxt 3** + **Tailwind** + **PWA**. Sem backend.

## Rodar
    npm install
    npm run dev          # http://localhost:3000
    npm run generate     # gera o site estático em .output/public

## Onde editar o conteúdo
`data/programacao.json`: atividades, locais (posição no mapa), avisos e FAQ.
Cada commit na branch `main` publica de novo (GitHub Actions → Pages).

## Estrutura
- `pages/` telas (início, programação, mapa, agenda, guia)
- `components/ActivityCard.vue` cartão de atividade
- `composables/useAgenda.ts` agenda pessoal em localStorage
- `utils/dados.ts` helpers (busca, choque de horário, link do Google Agenda)
- `tailwind.config.ts` tokens do DESIGN.md

## Pendências
- Trocar o número do WhatsApp em `pages/guia.vue`
- Adicionar `public/icon-192.png` e `public/icon-512.png` (já incluídos como provisórios)
- Incluir o widget VLibras (script do vlibras.gov.br) em `nuxt.config.ts` > `app.head.script`
- Em Pages: Settings > Pages > Source = GitHub Actions
