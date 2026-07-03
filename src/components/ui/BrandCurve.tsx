/* Curva da marca MACNOR — elemento gráfico proprietário inspirado
   na linha/curva do logo (casco, rota, horizonte, ciclo de vida).
   Usada como divisor de seção e base do indicador de progresso. */

// Path único reaproveitado em divisores e no progresso da hero.
export const BRAND_CURVE_PATH = "M0 38 L150 38 C260 38 300 8 400 8";
export const BRAND_CURVE_VIEWBOX = "0 0 400 44";

type Props = { className?: string; strokeWidth?: number };

export function BrandCurve({ className = "", strokeWidth = 1.5 }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox={BRAND_CURVE_VIEWBOX}
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d={BRAND_CURVE_PATH}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
