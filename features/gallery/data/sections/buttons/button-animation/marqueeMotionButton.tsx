"use client"

import type { Variant } from "../../../../types"
import { motion, type Variants } from "framer-motion"

const card: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export const marqueeMotionButton: Variant = {
  id: "marquee-motion-button",
  title: "Marquee Motion Button",
  description: "Pill button with infinite scrolling (marquee) text + spring scale",
  tags: ["button", "framer-motion", "marquee", "hover", "infinite"],
  preview: (
    <motion.button
      type="button"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={card}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-full bg-[#C7D2FE] py-3 text-black"
    >
      {/* ✅ “Ventana”: limita el área visible del texto */}
      <span className="relative block w-[280px] overflow-hidden whitespace-nowrap px-6">
        {/* ✅ Track continuo: se repite el texto 2 veces para que no haya cortes */}
        <motion.span
          className="inline-flex text-[#312E81] font-semibold text-2xl"
          style={{ width: "max-content" }}
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        >
          <span className="pr-8">Hi I'm a button with framer motion</span>
          <span className="pr-8" aria-hidden="true">
            Hi I'm a button with framer motion
          </span>
        </motion.span>
      </span>
    </motion.button>
  ),
  code: `/**
 * Marquee Motion Button (Framer Motion)
 *
 * IDEAS CLAVE:
 * 1) Variants (card):
 *    - rest: escala normal
 *    - hover: agranda un poco
 *    - tap: se encoge (feedback al click)
 *
 * 2) “Ventana”:
 *    - w-[280px] + overflow-hidden + whitespace-nowrap
 *    Esto recorta el texto y evita saltos de línea.
 *
 * 3) “Track” (marquee):
 *    - Duplicamos el texto 2 veces
 *    - Animamos x de "-50%" a "0%"
 *    - repeat: Infinity y ease: "linear"
 *    Esto genera un scroll infinito suave sin cortes visibles.
 */

"use client"

import { motion, type Variants } from "framer-motion"

const card: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export function MarqueeMotionButton() {
  const text = "Hi I'm a button with framer motion"

  return (
    <motion.button
      type="button"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={card}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-full bg-[#C7D2FE] py-3 text-black"
    >
      <span className="relative block w-[280px] overflow-hidden whitespace-nowrap px-6">
        <motion.span
          className="inline-flex text-[#312E81] font-semibold text-2xl"
          style={{ width: "max-content" }}
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        >
          <span className="pr-8">{text}</span>
          <span className="pr-8" aria-hidden="true">
            {text}
          </span>
        </motion.span>
      </span>
    </motion.button>
  )
}
`,
}
