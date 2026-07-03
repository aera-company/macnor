/* ============================================================
   CONFIGURAÇÃO DA HERO (frame-sequence) — MACNOR
   Frames extraídos de video-hero-macnor-final1.mp4 (18fps).
   A narrativa do vídeo: vista explodida (engenharia) → embarcação
   completa → navio em operação. Sincronizada ao scroll.
   ============================================================ */

// Nº de arquivos em /public/frames (frame_0001.jpg … frame_0120.jpg).
export const FRAME_COUNT = 120;

// Caminho de cada frame. WebP 1920px (q82) — mais nítido e mais leve
// que os JPGs anteriores (9,2 MB vs 15 MB no total).
export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.webp`;

/* ------------------------------------------------------------
   MOMENTOS NARRATIVOS DA HERO
   `show`/`hide` são frações do progresso (0 = topo, 1 = fim).
   Cada bloco entra (fade+translate), permanece e sai. Os
   intervalos não se sobrepõem para os textos nunca colidirem.
   ------------------------------------------------------------ */
export type HeroMoment = {
  id: string;
  show: number;
  hide: number;
  headline: string;
  text: string;
};

export const HERO_MOMENTS: HeroMoment[] = [
  {
    // aparece ~frame 50: navio em montagem.
    id: "m1",
    show: 0.4,
    hide: 0.63,
    headline: "A MACNOR conecta tecnologia global à engenharia brasileira.",
    text: "Raízes norueguesas, marcas de referência e capacidade técnica reunidas em uma única estrutura.",
  },
  {
    // aparece ~frame 85: navio em operação.
    id: "m2",
    show: 0.68,
    hide: 0.86,
    headline: "E converte conhecimento global em performance.",
    text: "Soluções integradas para elevar confiabilidade, eficiência e valor em operações marítimas e offshore.",
  },
];

// A partir deste ponto do scroll, entra o fechamento de marca.
export const HERO_CLOSING_START = 0.88;
