"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BRAND_CURVE_PATH, BRAND_CURVE_VIEWBOX } from "@/components/ui/BrandCurve";
import {
  FRAME_COUNT,
  HERO_MOMENTS,
  HERO_CLOSING_START,
  framePath,
} from "@/lib/hero";

/**
 * HERO MACNOR — sequência de frames dirigida por scroll.
 *
 * A <section> tem altura alta (.scroll-animation) → cria a distância de
 * scroll. O wrapper interno é `sticky top-0`. O handler calcula o progresso
 * (0→1), escolhe o frame, desenha no <canvas> com cover-fit e controla a
 * entrada/saída dos 4 momentos narrativos + fechamento de marca.
 *
 * Performance (não comprometer):
 *  - requestAnimationFrame + tickingRef: 1 update por frame.
 *  - Canvas, opacidades e progresso atualizam direto via ref.
 *  - Pré-carrega todos os frames com barra de loading antes de animar.
 *  - Canvas escalado por devicePixelRatio. Listener de scroll passivo.
 *
 * Reduced motion: renderiza uma hero estática (poster + fechamento), sem
 * scrubbing — preservando a mensagem.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const momentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closingRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const seqReadoutRef = useRef<HTMLSpanElement | null>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(false);
  const lastFrameRef = useRef(-1);

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Detecta prefers-reduced-motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Pré-carrega todos os frames (pulado no modo reduzido).
  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      const done = () => {
        if (cancelled) return;
        count++;
        setLoadProgress(count / FRAME_COUNT);
        if (count === FRAME_COUNT) {
          loadedRef.current = true;
          setLoaded(true);
        }
      };
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    framesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
    } else {
      drawH = ch;
      drawW = ch * imgRatio;
    }
    // Mobile: leve zoom para o navio ler melhor em tela pequena.
    if (window.innerWidth <= 768) {
      drawW *= 1.25;
      drawH *= 1.25;
    }
    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
  }, [drawFrame]);

  useEffect(() => {
    if (reduced) return;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas, reduced]);

  useEffect(() => {
    if (!loaded) return;
    drawFrame(0);
    lastFrameRef.current = 0;
  }, [loaded, drawFrame]);

  useEffect(() => {
    if (reduced) return;

    // Curva de progresso: usa pathLength=1 → strokeDashoffset 1→0.
    const path = progressPathRef.current;
    if (path) {
      path.style.strokeDasharray = "1";
      path.style.strokeDashoffset = "1";
    }

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        const section = sectionRef.current;
        if (!section || !loadedRef.current) return;

        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress =
          scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

        // Frame correspondente.
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT),
        );
        if (frameIndex !== lastFrameRef.current) {
          lastFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        // Momentos narrativos: fade-in / hold / fade-out por janela.
        HERO_MOMENTS.forEach((m, i) => {
          const el = momentRefs.current[i];
          if (!el) return;
          const span = m.hide - m.show;
          const ramp = Math.min(0.18, span * 0.4);
          let op = 0;
          if (progress >= m.show && progress <= m.hide) {
            const inOp = Math.min(1, (progress - m.show) / ramp);
            const outOp = Math.min(1, (m.hide - progress) / ramp);
            op = Math.min(inOp, outOp);
          }
          el.style.opacity = String(op);
          el.style.transform = `translateY(${(1 - op) * 16}px)`;
        });

        // Fechamento de marca.
        if (closingRef.current) {
          const op = Math.min(
            1,
            Math.max(0, (progress - HERO_CLOSING_START) / (1 - HERO_CLOSING_START - 0.02)),
          );
          closingRef.current.style.opacity = String(op);
          closingRef.current.style.transform = `translateY(${(1 - op) * 18}px)`;
          closingRef.current.style.pointerEvents = op > 0.6 ? "auto" : "none";
        }

        // Dica de scroll some logo no início.
        if (scrollHintRef.current) {
          scrollHintRef.current.style.opacity = String(
            Math.max(0, 1 - progress / 0.06),
          );
        }

        // Indicador de progresso na curva da marca.
        if (progressPathRef.current) {
          progressPathRef.current.style.strokeDashoffset = String(1 - progress);
        }
        if (seqReadoutRef.current) {
          seqReadoutRef.current.textContent = `${String(frameIndex + 1).padStart(3, "0")} / ${FRAME_COUNT}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [drawFrame, reduced]);

  /* ---------- FALLBACK REDUCED MOTION ---------- */
  if (reduced) {
    return (
      <section id="top" className="surface-darkest relative min-h-[100dvh] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={framePath(60)}
          alt="Embarcação de apoio marítimo da MACNOR em operação."
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/30" />
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1320px] flex-col justify-end gap-6 px-6 pb-24 pt-32 md:px-10">
          <h1 className="font-sans text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
            Do projeto à performance.
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-white/70">
            Tecnologia global, engenharia brasileira e suporte local para manter
            ativos marítimos e offshore em operação.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button href="#posicionamento" tone="dark">Conheça nossas soluções</Button>
            <Button href="#contato" variant="outline" tone="dark">Solicite suporte técnico</Button>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- HERO COM SCROLL ---------- */
  return (
    <section id="top" ref={sectionRef} className="scroll-animation relative">
      <div
        className="sticky top-0 min-h-[100dvh] w-full overflow-hidden bg-dark"
        style={{ height: "100dvh", willChange: "transform", transform: "translateZ(0)" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "contents", transform: "translateZ(0)" }}
          aria-hidden="true"
        />

        {/* Vinheta para legibilidade. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(130% 90% at 50% 0%, transparent 35%, rgba(9,15,38,0.55) 75%, rgba(9,15,38,0.92) 100%)",
          }}
        />

        {/* H1 da página + conteúdo alternativo para leitores de tela. */}
        <h1 className="sr-only">
          MACNOR — Engenharia, sistemas e serviços Marine &amp; Offshore
        </h1>
        <p className="sr-only">
          Animação cinematográfica de uma embarcação de apoio marítimo, da
          engenharia e seus sistemas internos até a operação no mar. MACNOR — do
          projeto ao ciclo de vida.
        </p>

        {/* Momentos narrativos (bottom-left). */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-28 md:px-12 md:pb-32">
          <div className="relative h-[42vh] max-w-[58ch] md:h-[40vh]">
            {HERO_MOMENTS.map((m, i) => (
              <div
                key={m.id}
                ref={(el) => {
                  momentRefs.current[i] = el;
                }}
                className="absolute bottom-0 left-0 flex flex-col gap-4"
                style={{ opacity: i === 0 ? 1 : 0, transition: "opacity 90ms linear" }}
              >
                <h2 className="max-w-[18ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
                  {m.headline}
                </h2>
                <p className="max-w-[40ch] text-balance text-sm leading-relaxed text-white/70 md:text-base">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fechamento de marca. */}
        <div
          ref={closingRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{ opacity: 0, transition: "opacity 90ms linear" }}
        >
          <h2 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
            Do projeto à performance.
          </h2>
          <p className="max-w-[60ch] text-base leading-relaxed text-white/75">
            Tecnologia global, engenharia brasileira e suporte local para manter
            ativos marítimos e offshore em operação.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button href="#posicionamento" tone="dark">Conheça nossas soluções</Button>
            <Button href="#contato" variant="outline" tone="dark">Solicite suporte técnico</Button>
          </div>
          <a
            href="#contato"
            className="mt-1 inline-flex items-center gap-2 py-2 text-sm text-accent transition-opacity hover:opacity-80"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(197,138,61,0.85)]" />
            Emergência 24/7
          </a>
        </div>

        {/* Indicador de progresso — curva da marca (rodapé). */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-6 mb-3 md:mx-12">
            <svg
              viewBox={BRAND_CURVE_VIEWBOX}
              preserveAspectRatio="none"
              fill="none"
              className="h-6 w-full"
              aria-hidden="true"
            >
              {/* trilho */}
              <path d={BRAND_CURVE_PATH} stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeLinecap="round" />
              {/* progresso */}
              <path
                ref={progressPathRef}
                d={BRAND_CURVE_PATH}
                pathLength={1}
                stroke="var(--accent)"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 90ms linear" }}
              />
            </svg>
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 eyebrow text-white/50 md:mx-12">
            <span ref={seqReadoutRef}>001 / {FRAME_COUNT}</span>
            <span>Marine · Offshore · Services</span>
            <span ref={scrollHintRef} style={{ transition: "opacity 120ms linear" }}>
              Role &darr;
            </span>
          </div>
        </div>

        {/* Loading com progresso real do pré-carregamento. */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-dark px-6">
            <SectionLabel tone="dark">Carregando</SectionLabel>
            <div className="h-px w-60 bg-white/12 md:w-80">
              <div
                className="h-full bg-accent transition-[width] duration-150 ease-out"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <p className="eyebrow text-white/50">
              {Math.round(loadProgress * 100)}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
