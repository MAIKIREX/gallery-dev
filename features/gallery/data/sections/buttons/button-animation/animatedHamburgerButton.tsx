"use client"

import type { Variant } from "../../../../types"
import * as React from "react"
import { MotionConfig, motion, type Variants } from "framer-motion"

const VARIANTS: Record<"top" | "middle" | "bottom", Variants> = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
}

export const animatedHamburgerButton: Variant = {
  id: "animated-hamburger-button",
  title: "Animated Hamburger Button",
  description: "Hamburger → X with keyframed rotations and positions",
  tags: ["button", "menu", "hamburger", "toggle", "framer-motion"],
  preview: (
    <AnimatedHamburgerButton />
  ),
  code: `/**
 * Animated Hamburger Button (Framer Motion)
 *
 * IDEAS CLAVE:
 * 1) active (boolean) controla el estado:
 *    - active = false  -> "closed" (hamburguesa)
 *    - active = true   -> "open"   (X)
 *
 * 2) MotionConfig define la transición global para TODOS los motion.* dentro:
 *    duration: 0.5 y ease: "easeInOut"
 *
 * 3) Cada barra (top/middle/bottom) es un motion.span con variants:
 *    - En "open" y "closed" cambiamos rotate y posición (top/bottom/left)
 *    - Usamos arrays (keyframes) para que el movimiento tenga “pasos”
 *      (ej: ["0deg","0deg","45deg"])
 *
 * 4) initial={false} evita la animación inicial al renderizar.
 */

"use client"

import * as React from "react"
import { MotionConfig, motion } from "framer-motion"

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
} as const

export function AnimatedHamburgerButton() {
  const [active, setActive] = React.useState(false)

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        type="button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        aria-label={active ? "Close menu" : "Open menu"}
        aria-pressed={active}
      >
        {/* Barra superior */}
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />

        {/* Barra del medio */}
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />

        {/* Barra inferior (más corta y desfasada) */}
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }}
        />
      </motion.button>
    </MotionConfig>
  )
}
`,
}

/** ✅ Componente usado en preview */
function AnimatedHamburgerButton() {
  const [active, setActive] = React.useState(false)

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        type="button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        aria-label={active ? "Close menu" : "Open menu"}
        aria-pressed={active}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }}
        />
      </motion.button>
    </MotionConfig>
  )
}
