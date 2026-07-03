# MACNOR — landing institucional (demo)

Landing institucional da **MACNOR** (engenharia, sistemas e serviços Marine &
Offshore) construída sobre uma base de **hero frame-sequence dirigida por scroll**
(Next.js 16 + React 19 + Tailwind v4 + Lenis + Framer Motion).

Fontes de verdade do conteúdo/estratégia: `../BRIEFING_MACNOR_HERO_DEMO.md` e
`../MACNOR_DOSSIE_ESTRATEGICO.md`.

## Regras de marca (não violar)

- **MACNOR** é a masterbrand. **Marine** e **Offshore** = mercados; **Services &
  Lifecycle Support** = capacidade transversal (não são 3 empresas).
- **Não inventar dados**: clientes, métricas, percentuais, certificações, SLA,
  cases. Use placeholders marcados ("CASE EM VALIDAÇÃO", `LogoPlaceholder`).
- Bases confirmadas: Rio de Janeiro, Niterói, Itaboraí, Porto do Açu. **Macaé
  não** sem validação.
- Estética: técnica/sólida/contemporânea. Evitar sci-fi, HUD, neon, paredes de
  logos. Amber (`#c58a3d`) é detalhe, nunca cor dominante.

## Modelo mental da hero

Sequência de imagens pré-renderizadas que um `<canvas>` percorre conforme o
scroll (não é WebGL). Seção alta (`.scroll-animation`) cria a distância; wrapper
`sticky top-0`. O handler: progresso 0→1 → frame → desenha cover-fit → controla
os 4 momentos narrativos + fechamento. Indicador de progresso = curva da marca.

## Regras de performance (não comprometer)

- `requestAnimationFrame` + `tickingRef`; canvas/opacidades/progresso via **ref**,
  nunca React state. DPR limitado a 2. Listener de scroll `{ passive: true }`.
- Pré-carrega os frames com barra de loading antes de animar.
- `prefers-reduced-motion` → hero estática (poster + fechamento), sem scrubbing.

## Onde mexer

- Frames → `public/frames/` + `FRAME_COUNT` em `src/lib/hero.ts`.
- Narrativa da hero → `HERO_MOMENTS` / `HERO_CLOSING_START` em `src/lib/hero.ts`.
- **Toda a copy** → `src/data/content.ts`; menu/contato → `src/data/navigation.ts`.
- Tema/paleta → `:root` em `src/app/globals.css`.
- Seções → `src/components/sections/`, compostas em `src/app/page.tsx`.

## Convenções

- Componentes com hooks/Framer Motion: `"use client"`. Alias `@/` → `src/`.
- Logos da marca em `public/brand/` (branco / branco+marine / azul).
- Lenis intercepta `window.scrollTo` (anima ~1.2s) — ao inspecionar posição,
  aguarde a animação assentar.

## Comandos

`npm run dev` (`:3000`) · `npm run build` · `npm start` · `npm run lint`.
