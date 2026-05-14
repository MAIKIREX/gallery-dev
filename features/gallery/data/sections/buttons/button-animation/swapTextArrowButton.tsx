"use client";

import type { Variant } from "../../../../types";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const card: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 7, y: -7 },
  tap: { x: 0, y: 0 },
};

const DUR = 0.42;
const DELAY = 0.25;

const textA: Variants = {
  rest: { y: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { y: -15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
};

const textB: Variants = {
  rest: { y: 15, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
};

const iconA: Variants = {
  rest: { x: 0, opacity: 1, transition: { duration: DUR, ease: "easeOut" } },
  hover: { x: 12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
};

const iconB: Variants = {
  rest: { x: -12, opacity: 0, transition: { duration: DUR, ease: "easeOut" } },
  hover: {
    x: 0,
    opacity: 1,
    transition: { duration: DUR, ease: "easeOut", delay: DELAY },
  },
};

export const swapTextArrowButton: Variant = {
  id: "swap-text-arrow-button",
  title: "Swap Text + Arrow Button",
  description: "Double-layer text & icon swap with a lifted shadow frame",
  tags: ["button", "animation", "hover", "framer-motion"],
  preview: (
    <div className="relative inline-block text-black">
      {/* marco/sombra fija detrás */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-zinc-950 bg-zinc-950" />

      <motion.button
        type="button"
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="tap"
        variants={card}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
          mass: 0.9,
        }}
        className="relative flex items-center justify-center gap-7 rounded-xl border-2 border-zinc-950 bg-amber-50 px-6 py-3"
      >
        {/* TEXTO */}
        <span className="relative block overflow-hidden">
          <motion.span variants={textA} className="block font-semibold">
            Ver galería
          </motion.span>

          <motion.span
            variants={textB}
            className="absolute left-0 top-0 block font-semibold"
          >
            Ver galería
          </motion.span>
        </span>

        {/* ICONO */}
        <span className="relative block w-6 overflow-hidden">
          <motion.span variants={iconA} className="block">
            <ArrowRight className="size-5" />
          </motion.span>

          <motion.span
            variants={iconB}
            className="absolute left-0 top-0 block text-red-500"
          >
            <ArrowRight className="size-5" />
          </motion.span>
        </span>
      </motion.button>
    </div>
  ),
  code: `"use client"

import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"

const card: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 7, y: -7 },
  tap: { x: 0, y: 0 },
}

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

export function SwapTextArrowButton() {
  return (
    <div className="relative inline-block text-black">
      <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-zinc-950 bg-zinc-950" />

      <motion.button
        type="button"
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="tap"
        variants={card}
        transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.9 }}
        className="relative flex items-center justify-center gap-7 rounded-xl border-2 border-zinc-950 bg-amber-50 px-6 py-3"
      >
        <span className="relative block overflow-hidden">
          <motion.span variants={textA} className="block font-semibold">
            Ver galería
          </motion.span>
          <motion.span
            variants={textB}
            className="absolute left-0 top-0 block font-semibold"
          >
            Ver galería
          </motion.span>
        </span>

        <span className="relative block w-6 overflow-hidden">
          <motion.span variants={iconA} className="block">
            <ArrowRight className="size-5" />
          </motion.span>
          <motion.span
            variants={iconB}
            className="absolute left-0 top-0 block text-red-500"
          >
            <ArrowRight className="size-5" />
          </motion.span>
        </span>
      </motion.button>
    </div>
  )
}`,
};
