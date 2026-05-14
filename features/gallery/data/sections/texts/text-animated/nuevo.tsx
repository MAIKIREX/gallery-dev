"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroWithVariants() {
  return (
    <section className="w-full bg-amber-50 px-6 py-16">
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-3xl flex-col gap-6"
      >
        <motion.h1
          variants={heroItem}
          className="text-4xl font-semibold tracking-tight text-black"
        >
          Framer Motion + Tailwind
        </motion.h1>

        <motion.p variants={heroItem} className="text-base text-black/70">
          Entra con jerarquía: título → texto → botón, usando staggerChildren.
        </motion.p>

        <motion.div variants={heroItem} className="flex gap-3">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Empezar
          </motion.button>

          <button className="rounded-2xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold">
            Ver más
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
