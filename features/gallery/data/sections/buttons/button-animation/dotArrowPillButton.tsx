"use client"

import type { Variant } from "../../../../types"
import { ArrowRight } from "lucide-react"

export const dotArrowPillButton: Variant = {
  id: "dot-arrow-pill-button",
  title: "Dot → Arrow Pill Button",
  description: "Dot expands into an arrow + pill background swap + glow text on active",
  tags: ["button", "hover", "group", "active", "pill"],
  preview: (
    <button
      type="button"
      className="group flex cursor-pointer items-center gap-3 rounded-3xl bg-gray-300 px-4 py-3 text-black transition-all duration-200 ease-in-out hover:scale-x-105 hover:bg-black"
    >
      {/* ✅ Punto que se transforma en “botón” con flecha */}
      <div className="size-2 rounded-full bg-black transition-all duration-200 ease-in-out group-hover:flex group-hover:size-7 group-hover:items-center group-hover:justify-center group-hover:bg-amber-50">
        <span className="hidden transition-all duration-200 ease-in-out group-hover:flex group-hover:text-xl">
          {/* ✅ En active rota -45° */}
          <ArrowRight className="transition-transform duration-200 group-active:-rotate-45" />
        </span>
      </div>

      {/* ✅ Texto: cambia color/peso en hover y se ilumina en active */}
      <p className="transition-all duration-200 ease-in-out group-hover:font-semibold group-hover:text-white group-active:[text-shadow:0_0_2px_rgba(255,255,255,0.9),0_0_10px_rgba(255,255,255,0.75),0_0_18px_rgba(245,158,11,0.65)]">
        Hover this link
      </p>
    </button>
  ),
  code: `/**
 * Dot → Arrow Pill Button (Tailwind)
 *
 * IDEAS CLAVE:
 * 1) "group" en el botón hace que los hijos reaccionen a hover/active del botón.
 * 2) El punto (size-2) se expande (size-7) y cambia de color en hover.
 * 3) La flecha está oculta (hidden) y aparece en hover (group-hover:flex).
 * 4) En active, la flecha rota -45° (group-active:-rotate-45).
 * 5) El texto se vuelve blanco y más "bold" en hover; en active usa un text-shadow
 *    (brillo tipo neon) con arbitrary value: group-active:[text-shadow:...]
 */

import { ArrowRight } from "lucide-react"

export function DotArrowPillButton() {
  return (
    <button
      type="button"
      className="group flex cursor-pointer items-center gap-3 rounded-3xl bg-gray-300 px-4 py-3 text-black transition-all duration-200 ease-in-out hover:scale-x-105 hover:bg-black"
    >
      <div className="size-2 rounded-full bg-black transition-all duration-200 ease-in-out group-hover:flex group-hover:size-7 group-hover:items-center group-hover:justify-center group-hover:bg-amber-50">
        <span className="hidden transition-all duration-200 ease-in-out group-hover:flex group-hover:text-xl">
          <ArrowRight className="transition-transform duration-200 group-active:-rotate-45" />
        </span>
      </div>

      <p className="transition-all duration-200 ease-in-out group-hover:font-semibold group-hover:text-white group-active:[text-shadow:0_0_2px_rgba(255,255,255,0.9),0_0_10px_rgba(255,255,255,0.75),0_0_18px_rgba(245,158,11,0.65)]">
        Hover this link
      </p>
    </button>
  )
}
`,
}
