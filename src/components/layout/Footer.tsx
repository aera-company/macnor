import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { CAPABILITIES } from "@/data/content";

const FOOTER_COLS = [
  {
    title: "Mercados",
    links: ["Marine", "Offshore"],
  },
  {
    title: "Capacidades",
    links: CAPABILITIES.map((c) => c.title),
  },
  {
    title: "Empresa",
    links: ["A MACNOR", "Soluções", "Bases e suporte", "Contato"],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="surface-darkest scroll-mt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          {/* Marca + endereço */}
          <div className="flex flex-col gap-6">
            <Logo className="h-11 w-auto self-start text-white" />
            <p className="max-w-[36ch] text-sm leading-relaxed text-white/70">
              Tecnologia global e engenharia local para os mercados Marine e
              Offshore.
            </p>
            <p className="eyebrow text-white/55">
              Rio de Janeiro · Barra da Tijuca
            </p>
          </div>

          {/* Colunas de navegação */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="eyebrow text-accent">{col.title}</span>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Suporte 24/7 em destaque */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-dark"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-dark" />
            Suporte emergencial 24/7
          </a>
          <div className="flex items-center gap-5">
            {["LinkedIn", "Instagram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MACNOR. Todos os direitos reservados.</span>
          <span className="eyebrow">
            {NAV_ITEMS.length} áreas · Marine · Offshore · Services
          </span>
        </div>
      </div>
    </footer>
  );
}
