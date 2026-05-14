"use client"

import type { Variant } from "../../../../types"
import { ArrowRight } from "lucide-react"

export const dashedMarchingAntsButton: Variant = {
  id: "dashed-marching-ants-button",
  title: "Dashed Marching Ants Button",
  description: "Dashed border animates on hover (SVG dashoffset) with lift + rotate",
  tags: ["button", "hover", "svg", "border", "dashed"],
  preview: (
    <div className="relative inline-block">
      {/* ✅ Sombra/base fija detrás */}
      <div className="absolute inset-0 rounded-2xl bg-black" />

      {/* ✅ Botón real (div clickable, si prefieres button lo cambio) */}
      <div
        id="btn"
        className="relative flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-black
          transition-all duration-200 ease-in-out
          hover:-translate-x-2 hover:-translate-y-2 hover:-rotate-2
          active:translate-x-0 active:translate-y-0 active:rotate-0"
      >
        {/* ✅ Borde punteado animado: “marching ants” */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="96"
            height="36"
            rx="10"
            ry="10"
            fill="none"
            stroke="rgb(24 24 27)"
            strokeWidth="2"
            strokeDasharray="6 5"
            strokeDashoffset="0"
            vectorEffect="non-scaling-stroke"
          >
            {/* ✅ La animación empieza en hover del elemento con id="btn" */}
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="22"
              dur="0.6s"
              repeatCount="indefinite"
              begin="btn.mouseover"
              end="btn.mouseout"
            />
          </rect>
        </svg>

        <p className="font-semibold">HOVER ME!</p>
        <ArrowRight className="size-5" />
      </div>
    </div>
  ),
  code: `/**
 * Dashed Marching Ants Button (Tailwind + SVG)
 *
 * IDEAS CLAVE:
 * 1) La "base" negra es un div absoluto detrás del botón (shadow/fondo fijo).
 *
 * 2) El botón tiene movimiento en hover:
 *    - hover:-translate-x-2 hover:-translate-y-2 (se “levanta”)
 *    - hover:-rotate-2 (rota un poco)
 *    y vuelve a normal en active.
 *
 * 3) El borde punteado no es un border de Tailwind, es un <rect> SVG:
 *    - strokeDasharray="6 5" crea los guiones (6) y espacios (5)
 *    - strokeDashoffset es el “desplazamiento” del patrón
 *
 * 4) El efecto “marching ants” se logra animando stroke-dashoffset:
 *    - <animate ... repeatCount="indefinite" />
 *    - begin="btn.mouseover" / end="btn.mouseout"
 *      Esto escucha eventos del elemento con id="btn"
 *
 * NOTA: en JSX se usa strokeWidth / strokeDasharray / strokeDashoffset (camelCase).
 */

import { ArrowRight } from "lucide-react"

export function DashedMarchingAntsButton() {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 rounded-2xl bg-black" />

      <div
        id="btn"
        className="relative flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-black
          transition-all duration-200 ease-in-out
          hover:-translate-x-2 hover:-translate-y-2 hover:-rotate-2
          active:translate-x-0 active:translate-y-0 active:rotate-0"
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="96"
            height="36"
            rx="10"
            ry="10"
            fill="none"
            stroke="rgb(24 24 27)"
            strokeWidth="2"
            strokeDasharray="6 5"
            strokeDashoffset="0"
            vectorEffect="non-scaling-stroke"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="22"
              dur="0.6s"
              repeatCount="indefinite"
              begin="btn.mouseover"
              end="btn.mouseout"
            />
          </rect>
        </svg>

        <p className="font-semibold">HOVER ME!</p>
        <ArrowRight className="size-5" />
      </div>
    </div>
  )
}
`,
}
