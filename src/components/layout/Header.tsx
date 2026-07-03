"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS, CONTACT } from "@/data/navigation";

/* Header sticky e adaptativo:
   - sobre a HERO: transparente, texto branco.
   - após sair da HERO: branco translúcido + blur, texto navy.
   O ponto de virada é ~80% da altura da viewport. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // O header só clareia quando a HERO (sticky, alta) termina de passar.
    // Enquanto a hero ocupa a viewport, o header fica transparente/branco.
    const onScroll = () => {
      const hero = document.getElementById("top");
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom;
        setScrolled(bottom <= 72);
      } else {
        // Páginas sem a hero escura (ex.: /services) → header claro desde o topo.
        setScrolled(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onLight = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onLight
          ? "border-b border-border bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6 md:h-[72px] md:px-10">
        <a
          href="/"
          className={onLight ? "text-deep" : "text-white"}
          aria-label="MACNOR — início"
        >
          <Logo className="h-7 w-auto transition-colors hover:text-accent md:h-8" />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV_ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-tight transition-colors hover:text-accent ${
                  active
                    ? "text-accent"
                    : onLight
                      ? "text-graphite"
                      : "text-white/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA 24/7 sempre visível */}
          <a
            href={CONTACT.emergencyHref}
            className={`hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-tight transition-colors sm:inline-flex ${
              onLight
                ? "bg-deep text-white hover:bg-navy"
                : "bg-white/12 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(197,138,61,0.9)]"
            />
            Suporte 24/7
          </a>

          {/* Botão de menu (mobile/tablet) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              onLight ? "text-deep" : "text-white"
            }`}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Painel mobile */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-deep px-6 pt-8 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 font-sans text-2xl font-medium tracking-tight text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.emergencyHref}
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-dark"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-dark" />
            Suporte 24/7
          </a>
        </div>
      )}
    </header>
  );
}
