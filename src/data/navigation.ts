/* Navegação principal e dados de contato. */

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Marine", href: "/#mercados" },
  { label: "Offshore", href: "/#mercados" },
  { label: "Serviços", href: "/services" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "A MACNOR", href: "/#posicionamento" },
  { label: "Contato", href: "/#contato" },
];

export const CONTACT = {
  emergency: "Emergência 24/7",
  emergencyHref: "/#contato",
  primaryCta: "Falar com a MACNOR",
  supportCta: "Solicitar suporte técnico",
  founded: "Fundada no Rio de Janeiro em 2003",
};
