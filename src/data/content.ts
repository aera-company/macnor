/* ============================================================
   CONTEÚDO INSTITUCIONAL — MACNOR
   Toda a copy aprovada vive aqui, separada dos componentes.
   Regra: não inventar dados (clientes, métricas, certificações,
   percentuais). Use placeholders identificados quando faltar
   material validado.
   ============================================================ */

/* ---------- PÁGINA /marine ---------- */
export const MARINE = {
  eyebrow: "Marine",
  headline:
    "Engenharia e sistemas para embarcações mais seguras, eficientes e disponíveis.",
  text: "Da concepção ao retrofit, integramos soluções para projetar, equipar e manter embarcações em operação — conectando tecnologia global à execução local.",
  poster: "/videos/marine.jpg",
  topics: [
    "Projetos e design naval",
    "Propulsão e Dynamic Positioning",
    "Equipamentos de convés",
    "Acomodação, HVAC e sistemas auxiliares",
    "Água, resíduos e segurança",
    "Performance e eficiência",
  ],
};

/* ---------- SEÇÃO 1 · MANIFESTO ---------- */
export const MANIFESTO = {
  stats: [
    { value: "2003", label: "Norwegian maritime roots" },
    { value: "20+", label: "Global technology partners" },
    { value: "Marine + Offshore", label: "One integrated engineering platform" },
  ],
  // nbsp ( ) mantém "marítimas e offshore" na mesma linha (evita órfã).
  body: "Com raízes na Noruega e visão global, a MACNOR integra engenharia, tecnologia e conhecimento para transformar complexidade em movimento. Da concepção ao próximo ciclo, desenvolvemos soluções integradas que elevam performance, confiabilidade e valor nas operações marítimas e offshore.",
};

/* ---------- CAPACIDADES (cards 01/02/03 — exibidos ao fim de Mercados) ---------- */
export const CAPABILITIES_INTRO = {
  eyebrow: "Como entregamos",
};

export const CAPABILITIES = [
  {
    n: "01",
    title: "Engineering & Design",
    text: "Projetos, especificação, integração, conversões e retrofits.",
  },
  {
    n: "02",
    title: "Equipment & Systems",
    text: "Sistemas críticos de fabricantes internacionais com suporte técnico local.",
  },
  {
    n: "03",
    title: "Services & Lifecycle Support",
    text: "Instalação, comissionamento, manutenção, peças, overhaul e modernização.",
  },
];

/* ---------- SEÇÃO 2 · FRENTES DE ATUAÇÃO ---------- */
export type Front = {
  id: string;
  name: string;
  description: string;
  video: string;
  poster: string;
  cta: string;
  href: string;
};

export const FRONTS_INTRO = {
  eyebrow: "Frentes de atuação",
  headline: "Uma estrutura global. Múltiplas frentes de atuação.",
};

export const FRONTS: Front[] = [
  {
    id: "marine",
    name: "Marine",
    description: "Engenharia, sistemas e soluções para embarcações.",
    video: "/videos/marine.mp4",
    poster: "/videos/marine.jpg",
    cta: "Explorar mais",
    href: "/marine",
  },
  {
    id: "offshore",
    name: "Offshore",
    description:
      "Tecnologia e integração para ativos e operações offshore.",
    video: "/videos/offshore.mp4",
    poster: "/videos/offshore.jpg",
    cta: "Explorar Offshore",
    href: "#solucoes",
  },
  {
    id: "services",
    name: "Services & Lifecycle",
    description:
      "Capacidade técnica para instalar, manter, modernizar e evoluir ativos.",
    video: "/videos/services.mp4",
    poster: "/videos/services.jpg",
    cta: "Conhecer Services & Lifecycle",
    href: "/services",
  },
  {
    id: "multibrand",
    name: "Multibrand Solutions",
    description:
      "Sourcing, procurement e integração de soluções além do portfólio representado.",
    video: "/videos/multibrand.mp4",
    poster: "/videos/multibrand.jpg",
    cta: "Conhecer Multibrand",
    href: "#contato",
  },
];

/* ---------- SEÇÃO 4 · SERVICES & LIFECYCLE ---------- */
export const SERVICES = {
  eyebrow: "Services & Lifecycle Support",
  headline: "Quando o ativo não pode parar, o suporte não pode ser distante.",
  text: "A MACNOR acompanha o cliente antes, durante e depois da entrega, com engenharia, equipes locais, acesso aos fabricantes, peças, logística e atendimento técnico 24/7.",
  cycle: [
    "Diagnóstico",
    "Engenharia",
    "Fornecimento",
    "Instalação",
    "Operação assistida",
    "Manutenção",
    "Retrofit",
  ],
  highlights: [
    "Instalação e comissionamento",
    "Manutenção preventiva e corretiva",
    "Troubleshooting",
    "Overhaul e reparo",
    "Inspeções e recertificações",
    "Spare parts",
    "Modernização",
    "Treinamento",
    "Suporte emergencial 24/7",
  ],
};

/* ---------- SEÇÃO 5 · DIFERENCIAIS ---------- */
export const DIFFERENTIALS_INTRO = {
  eyebrow: "Por que MACNOR",
  headline:
    "Tecnologia internacional com responsabilidade local sobre o resultado.",
};

export const DIFFERENTIALS = [
  {
    n: "01",
    title: "Tecnologia global",
    text: "Acesso direto a fabricantes, especialistas e soluções reconhecidas internacionalmente.",
  },
  {
    n: "02",
    title: "Engenharia brasileira",
    text: "Profissionais preparados para especificar, instalar, comissionar, reparar e modernizar.",
  },
  {
    n: "03",
    title: "Suporte OEM",
    text: "Conhecimento de fábrica, peças originais e interface técnica direta.",
  },
  {
    n: "04",
    title: "Estrutura local",
    text: "Bases, workshops, equipes de campo, estoque e logística coordenada.",
  },
  {
    n: "05",
    title: "Atendimento 24/7",
    text: "Resposta para operações em que cada hora de parada importa.",
  },
  {
    n: "06",
    title: "Lifecycle responsibility",
    text: "Presença antes, durante e depois do fornecimento.",
  },
];

/* ---------- SEÇÃO 6 · SOLUÇÕES ESPECIAIS ---------- */
export type Solution = {
  id: string;
  title: string;
  text: string;
  topics: string[];
  cta: string;
  image: string;
};

export const SOLUTIONS_INTRO = {
  eyebrow: "Soluções para novos desafios",
  headline: "Performance, modernização e responsabilidade ambiental.",
};

export const SOLUTIONS: Solution[] = [
  {
    id: "macboom",
    title: "MACBOOM & Oil Spill Response",
    text: "Tecnologia de origem norueguesa, fabricação brasileira e suporte local para prevenção e resposta a derramamentos de óleo.",
    topics: [
      "Barreiras offshore",
      "Skimmers",
      "Oil recovery",
      "Treinamento",
      "Inspeção e manutenção",
      "Adequação de OSRVs",
    ],
    cta: "Conhecer Oil Spill Response",
    image: "/images/macboom.jpg",
  },
  {
    id: "green",
    title: "Green & Hybrid Solutions",
    text: "Soluções para reduzir consumo, emissões e impacto operacional sem comprometer disponibilidade.",
    topics: [
      "Propulsão híbrida",
      "Sistemas elétricos",
      "Eficiência energética",
      "Água e saneamento",
      "Gestão de resíduos",
    ],
    cta: "Explorar soluções sustentáveis",
    image: "/images/green.jpg",
  },
  {
    id: "digital",
    title: "Digital Performance",
    text: "Dados, monitoramento e suporte remoto para transformar condição operacional em decisões mais rápidas.",
    topics: [
      "Monitoramento de combustível",
      "Condition monitoring",
      "Performance analysis",
      "Otimização de operação",
      "Suporte remoto",
    ],
    cta: "Explorar performance digital",
    image: "/images/digital.jpg",
  },
];

/* ---------- SEÇÃO 7 · PROVAS DE CAPACIDADE (placeholders) ---------- */
export const PROOF_INTRO = {
  eyebrow: "Provas de capacidade",
  headline: "Capacidade técnica precisa aparecer em operação.",
  note: "Os cases abaixo são estruturas de exemplo. Nenhum cliente, métrica ou resultado foi inventado — serão preenchidos após validação.",
};

// Estrutura preparada; conteúdo marcado como "CASE EM VALIDAÇÃO".
export const CASES = [
  {
    id: "case-1",
    assetType: "Tipo de ativo",
    fields: [
      "Problema",
      "Solução",
      "Escopo MACNOR",
      "Resultado",
      "Local",
      "Parceiro ou fabricante",
    ],
  },
  {
    id: "case-2",
    assetType: "Tipo de ativo",
    fields: [
      "Problema",
      "Solução",
      "Escopo MACNOR",
      "Resultado",
      "Local",
      "Parceiro ou fabricante",
    ],
  },
  {
    id: "case-3",
    assetType: "Tipo de ativo",
    fields: [
      "Problema",
      "Solução",
      "Escopo MACNOR",
      "Resultado",
      "Local",
      "Parceiro ou fabricante",
    ],
  },
];

/* ---------- SEÇÃO 8 · MARCAS E PARCEIROS ---------- */
export const PARTNERS_INTRO = {
  eyebrow: "Marcas e parceiros",
  headline: "Marcas globais. Engenharia e suporte local.",
  text: "Os fabricantes reforçam a MACNOR — não competem com ela. Marcas representadas com suporte técnico e engenharia locais.",
};

// Marcas em ordem alfabética (logos em /public/logos).
export const PARTNERS = [
  { name: "Aeron", file: "/logos/aeron.svg" },
  { name: "Aksisfire", file: "/logos/aksisfire.svg" },
  { name: "Beha-Hedo", file: "/logos/beha-hedo.png" },
  { name: "Brunvoll", file: "/logos/brunvoll.svg" },
  { name: "Delitek", file: "/logos/delitek.png" },
  { name: "DOE", file: "/logos/doe.svg" },
  { name: "Eltorque", file: "/logos/eltorque.webp" },
  { name: "FFS", file: "/logos/ffs.svg" },
  { name: "GTT Marine", file: "/logos/gtt-marine.svg" },
  { name: "Haakon", file: "/logos/haakon.png" },
  { name: "IMS", file: "/logos/ims.png" },
  { name: "Jets", file: "/logos/jets.svg", big: true },
  { name: "Lamor", file: "/logos/lamor.png" },
  { name: "MACBOOM", file: "/logos/macboom.svg" },
  { name: "Maritime Partner", file: "/logos/maritime-partner.svg" },
  { name: "Melcal", file: "/logos/melcal.png" },
  { name: "PG Flow Solutions", file: "/logos/pg-flowsolutions.png" },
  { name: "Rheinhold & Mahla", file: "/logos/rheinhold-mahla.svg", big: "xl" },
  { name: "Stahl", file: "/logos/stahl.webp" },
  { name: "TeamTec", file: "/logos/teamtec.svg" },
  { name: "Ulmatec", file: "/logos/ulmatec.svg" },
  { name: "Ulstein", file: "/logos/ulstein.jpg", big: "xl" },
];

/* ---------- SEÇÃO 9 · BASES E SUPORTE ---------- */
export const BASES_INTRO = {
  eyebrow: "Bases e suporte",
  headline: "Estrutura local para responder onde a operação acontece.",
};

// Bases confirmadas no dossiê (Macaé NÃO entra sem validação).
export const BASES = [
  { name: "Rio de Janeiro", role: "Sede" },
  { name: "Niterói", role: "Base de serviço" },
  { name: "Itaboraí", role: "Base de serviço" },
  { name: "Porto do Açu", role: "Base de serviço" },
  { name: "Macaé", role: "Base de serviço" },
];

export const BASE_SUPPORT = [
  "Atendimento a bordo",
  "Execução em workshop",
  "Estoque e spare parts",
  "Logística door-to-door",
  "Suporte emergencial 24/7",
];

/* ---------- SEÇÃO 10 · NOSSOS CLIENTES ---------- */
export const CLIENTS_INTRO = {
  eyebrow: "Nossos clientes",
  headline: "Ao lado de quem mantém a operação em movimento.",
};

// Logos de clientes em ordem alfabética (em /public/logos-clientes).
export const CLIENTS: {
  name: string;
  file: string;
  big?: boolean;
  small?: boolean;
}[] = [
  { name: "Belov", file: "/logos-clientes/belov.png", small: true },
  { name: "Bourbon", file: "/logos-clientes/bourbon.png" },
  { name: "Bram", file: "/logos-clientes/bram.png" },
  { name: "Bravante", file: "/logos-clientes/bravante.svg" },
  { name: "CBO", file: "/logos-clientes/cbo.png" },
  { name: "DOF", file: "/logos-clientes/dof.svg" },
  { name: "Equinor", file: "/logos-clientes/equinor.jpeg", big: true },
  { name: "Farol", file: "/logos-clientes/farol.png", big: true },
  { name: "Fugro", file: "/logos-clientes/fugro.png" },
  { name: "Galáxia Marítima", file: "/logos-clientes/galaxia-maritima.png", big: true },
  { name: "Helix", file: "/logos-clientes/helix.svg" },
  { name: "MACBOOM", file: "/logos-clientes/macboom.svg" },
  { name: "Marinha do Brasil", file: "/logos-clientes/marinha.png", big: true },
  { name: "Marlin", file: "/logos-clientes/marlin.png", big: true },
  { name: "MODEC", file: "/logos-clientes/modec.png" },
  { name: "OceanPact", file: "/logos-clientes/oceanpact.svg" },
  { name: "Oceânica", file: "/logos-clientes/oceanica.png" },
  { name: "Ocyan", file: "/logos-clientes/ocyan.svg" },
  { name: "OSM", file: "/logos-clientes/osm.png", big: true },
  { name: "Petrobras", file: "/logos-clientes/petrobras.svg" },
  { name: "SAAM", file: "/logos-clientes/saam.png" },
  { name: "SBM Offshore", file: "/logos-clientes/sbm.svg" },
  { name: "Siem", file: "/logos-clientes/siem.png" },
  { name: "Sistac", file: "/logos-clientes/sistac.png", small: true },
  { name: "Solstad Offshore", file: "/logos-clientes/solstad.png" },
  { name: "Starnav", file: "/logos-clientes/starnav.png" },
  { name: "Technip", file: "/logos-clientes/technip.svg" },
  { name: "Transpetro", file: "/logos-clientes/transpetro.png" },
  { name: "Wilson Sons", file: "/logos-clientes/wilson-sons.svg" },
];

// Ecossistemas / associações (abaixo dos clientes).
export const ECOSYSTEM_INTRO = {
  headline: "Conectados a ecossistemas que movem a indústria.",
};

export const ECOSYSTEM = [
  { name: "NBCC", file: "/logos-ecosystem/nbcc.png" },
  { name: "Cluster Tec", file: "/logos-ecosystem/cluster-tec.png" },
  { name: "Innovation Norway", file: "/logos-ecosystem/innovation-norway.png" },
];

/* ---------- CTA FINAL ---------- */
export const FINAL_CTA = {
  headline: "Uma MACNOR. Toda a operação.",
  text: "Engenharia, tecnologia e sistemas para levar ativos marítimos e offshore mais longe.",
};
