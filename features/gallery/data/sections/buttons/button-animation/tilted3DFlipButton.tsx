"use client"

import type { Variant } from "../../../../types"
import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"

const DUR = 0.42
const DELAY = 0.25

// ✅ Texto capa A: visible en "rest", se va hacia arriba y desaparece en hover
const textA: Variants = {
  rest: { y: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { y: -15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
}

// ✅ Texto capa B: oculto en "rest", entra desde abajo y aparece en hover (con delay)
const textB: Variants = {
  rest: { y: 15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
}

// ✅ Icono capa A: visible en "rest", se va a la derecha y desaparece en hover
const iconA: Variants = {
  rest: { x: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { x: 12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
}

// ✅ Icono capa B: oculto en "rest", entra desde la izquierda y aparece en hover (con delay)
const iconB: Variants = {
  rest: { x: -12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    x: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
}

export const tilted3DFlipButton: Variant = {
  id: "tilted-3d-flip-button",
  title: "Tilted 3D Flip Button",
  description: "3D tilted frame + swap text/icon on hover",
  tags: ["button", "hover", "3d", "framer-motion"],
  preview: (
    <div className="relative inline-block text-black">
      {/* ✅ “Sombra / base” fija: es el fondo negro detrás */}
      <div className="absolute inset-0 rotate-x-50 rotate-z-45 border-2 border-zinc-950 bg-black" />

      {/* ✅ Botón 3D: se inclina con rotate-x / rotate-z y habilita el 3D */}
      <button
        type="button"
        className="relative rotate-x-50 rotate-z-45 transform-3d"
      >
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap="tap"
          className="relative flex cursor-pointer items-center justify-center gap-3 border-2 border-zinc-950 bg-amber-50 px-4 py-3 transition-transform duration-200 hover:translate-z-3 active:translate-z-0"
        >
          {/* ✅ TEXTO: 2 capas dentro de overflow-hidden para “swap” */}
          <span className="relative block overflow-hidden">
            <motion.span variants={textA} className="block font-semibold">
              HOVER ME!
            </motion.span>

            <motion.span
              variants={textB}
              className="absolute left-0 top-0 block font-semibold"
            >
              HOVER ME!
            </motion.span>
          </span>

          {/* ✅ ICONO: 2 capas dentro de overflow-hidden para “swap” */}
          <span className="relative block w-6 overflow-hidden">
            <motion.span variants={iconA} className="block">
              <ArrowRight className="size-5" />
            </motion.span>

            <motion.span
              variants={iconB}
              className="absolute left-0 top-0 block text-[#ef4444]"
            >
              <ArrowRight className="size-5" />
            </motion.span>
          </span>
        </motion.div>
      </button>
    </div>
  ),
  code: `/**
 * Tilted 3D Flip Button (Framer Motion + Tailwind)
 *
 * IDEAS CLAVE:
 * 1) Usamos 2 capas para texto y 2 capas para icono:
 *    - Capa A se va (sube / se desplaza) y desaparece en hover
 *    - Capa B entra (desde abajo / izquierda) y aparece en hover (con delay)
 *
 * 2) overflow-hidden en los contenedores permite que “salgan/entren”
 *    sin verse fuera del área.
 *
 * 3) El efecto 3D se logra con:
 *    - rotate-x-50 rotate-z-45 para inclinar el botón
 *    - transform-3d para que translate-z-* funcione
 *    - hover:translate-z-3 para “levantar” el botón al pasar el mouse
 */

"use client"

import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"

const DUR = 0.42
const DELAY = 0.25

const textA: Variants = {
  rest: { y: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { y: -15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
}

const textB: Variants = {
  rest: { y: 15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
}

const iconA: Variants = {
  rest: { x: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { x: 12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
}

const iconB: Variants = {
  rest: { x: -12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    x: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
}

export function Tilted3DFlipButton() {
  return (
    <div className="relative inline-block text-black">
      <div className="absolute inset-0 rotate-x-50 rotate-z-45 border-2 border-zinc-950 bg-black" />

      <button type="button" className="relative rotate-x-50 rotate-z-45 transform-3d">
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap="tap"
          className="relative flex items-center justify-center gap-3 border-2 border-zinc-950 bg-amber-50 px-4 py-3 transition-transform duration-200 hover:translate-z-3 active:translate-z-0"
        >
          <span className="relative block overflow-hidden">
            <motion.span variants={textA} className="block font-semibold">
              HOVER ME!
            </motion.span>
            <motion.span
              variants={textB}
              className="absolute left-0 top-0 block font-semibold"
            >
              HOVER ME!
            </motion.span>
          </span>

          <span className="relative block w-6 overflow-hidden">
            <motion.span variants={iconA} className="block">
              <ArrowRight className="size-5" />
            </motion.span>
            <motion.span
              variants={iconB}
              className="absolute left-0 top-0 block text-[#ef4444]"
            >
              <ArrowRight className="size-5" />
            </motion.span>
          </span>
        </motion.div>
      </button>
    </div>
  )
}
`,
}
