# MACNOR — Landing institucional (demo)

Demo navegável da nova landing page institucional da MACNOR.

**Posicionamento:** _Tecnologia global. Engenharia local. Performance por todo o
ciclo de vida._
**Conceito narrativo:** _From design to lifecycle — do projeto ao ciclo de vida._

A marca **MACNOR** é a masterbrand. **Marine** e **Offshore** são tratados como
**mercados** (onde atuamos); **Services & Lifecycle Support** como **capacidade
transversal** (como entregamos). Base estratégica: `../BRIEFING_MACNOR_HERO_DEMO.md`
e `../MACNOR_DOSSIE_ESTRATEGICO.md`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens em `@theme inline`)
- **Lenis** — scroll suave (config Safari-safe)
- **Framer Motion** — reveals de seções pós-hero
- **Geist** — fonte sans + mono

## Comandos

| Comando         | Ação                                  |
| --------------- | ------------------------------------- |
| `npm install`   | Instala dependências                  |
| `npm run dev`   | Servidor de desenvolvimento (`:3000`) |
| `npm run build` | Build de produção                     |
| `npm start`     | Sobe o build                          |
| `npm run lint`  | ESLint                                |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # fontes, metadata (SEO), SmoothScrollProvider
│   ├── page.tsx             # compõe Header + seções + Footer
│   └── globals.css          # design tokens (paleta MACNOR) + utilitários
├── components/
│   ├── layout/              # Header (adaptativo), Footer
│   ├── sections/            # Hero + 9 seções institucionais
│   └── ui/                  # SectionLabel, Button, Placeholder, Logo, BrandCurve…
├── data/
│   ├── navigation.ts        # menu + contato
│   └── content.ts           # TODA a copy (separada dos componentes)
└── lib/hero.ts              # FRAME_COUNT, narrativa da hero, paths dos frames
public/
├── frames/                  # sequência da hero (frame_0001.jpg … frame_0120.jpg)
└── brand/                   # logos MACNOR (branco / branco+marine / azul)
```

## A HERO (frame-sequence dirigida por scroll)

A sensação cinematográfica **não é WebGL**: é uma sequência de imagens
pré-renderizadas que um `<canvas>` percorre conforme o scroll. A `<section>` tem
altura alta (`.scroll-animation`); o wrapper interno fica `sticky top-0`. A cada
frame de scroll: calcula o progresso (0→1), escolhe o frame, desenha em cover-fit
e controla a entrada/saída dos **4 momentos narrativos + fechamento de marca**.

Indicador de progresso = **curva da marca MACNOR** (desenha-se com o scroll).
`prefers-reduced-motion` → hero estática (poster + fechamento), sem scrubbing.

### Como trocar o vídeo / gerar os frames

Os frames foram extraídos de `../video-hero-macnor-final1.mp4` (1280×720, 24fps).
Sem `ffmpeg` no sistema, use o binário estático via npm:

```bash
npx ffmpeg-static -i video.mp4 -vf "fps=18" -qscale:v 5 public/frames/frame_%04d.jpg
```

Depois ajuste **`FRAME_COUNT`** em `src/lib/hero.ts` para a quantidade exata de
arquivos. Mantenha o zero-padding (`0001`) e a extensão. Resolução do vídeo de
origem = teto de qualidade dos frames.

### Como alterar a narrativa da hero

Edite `HERO_MOMENTS` em `src/lib/hero.ts`: cada momento tem `eyebrow`, `headline`,
`text` e a janela de scroll (`show`/`hide`, frações de 0→1, sem sobreposição).
`HERO_CLOSING_START` define quando entra o fechamento de marca.

## Onde editar conteúdo

- **Copy das seções, mercados, capacidades, serviços, soluções** → `src/data/content.ts`
- **Menu e contato** → `src/data/navigation.ts`
- **Cases** → `CASES` em `content.ts`. Estrutura pronta, marcada como **“CASE EM
  VALIDAÇÃO”**. Não inventar clientes, métricas ou resultados.
- **Marcas/parceiros** → `PARTNER_CATEGORIES` em `content.ts`. Logos são
  **placeholders marcados** (`LogoPlaceholder`), exibidos por categoria; inserir
  apenas com autorização de uso de marca.
- **Bases** → `BASES` em `content.ts`. Apenas bases confirmadas (Rio de Janeiro,
  Niterói, Itaboraí, Porto do Açu). **Macaé não entra sem validação.**
- **Tema/paleta** → `:root` em `src/app/globals.css`.

## Placeholders de mídia

Fotos, imagens e logos ainda não fornecidos aparecem como **espaços marcados**
(`MediaPlaceholder` / `LogoPlaceholder`) com rótulo do que entra ali, preservando
o layout. Substitua por `next/image` quando o material chegar.

## Performance

- Canvas via `requestAnimationFrame` + refs (sem re-render por frame), DPR limitado a 2.
- Pré-carregamento dos frames com barra de loading; listener de scroll passivo.
- Build estático, fontes otimizadas, sem WebGL.
- **Nota:** os 120 frames somam ~15 MB. Para produção, considere converter para
  AVIF/WebP e carregamento progressivo (hoje o pré-carregamento é total).

## Limitações atuais (demo)

- Imagens e logos são placeholders marcados.
- Cases sem conteúdo (aguardando validação).
- Links de navegação âncora/`#` (páginas internas ainda não existem).
- Pré-carregamento total dos frames (otimizar para progressivo).

## Próximos passos

1. Inserir fotografia real (mercados, soluções, cases) e logos autorizados.
2. Otimizar frames (AVIF/WebP + carregamento progressivo).
3. Validar bases, marcas e claims com a empresa.
4. Construir páginas internas (Marine, Offshore, Soluções, A MACNOR, Contato).
5. SEO/OG completos, analytics e formulário de contato.
```
