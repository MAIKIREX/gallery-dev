import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { DemoFrame } from "./demo-frame"

function FadeSlideText() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
    >
      Descansa con estilo
    </motion.h2>
  )
}

function FadeSlidePreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="1) Reveal: Fade + Slide" subtitle="Entrada suave desde abajo">
        <FadeSlideText />
      </DemoFrame>
    </div>
  )
}

export const textFadeSlide: Variant = {
  id: "text-fade-slide",
  title: "Text: Fade + Slide",
  description: "Entrada suave para títulos o subtítulos (fade + desplazamiento).",
  tags: ["text", "framer-motion", "reveal"],
  preview: <FadeSlidePreview />,
  code: `
"use client"

import { motion } from "framer-motion"

export function TextFadeSlide() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-3xl font-semibold tracking-tight text-[#224A3A]"
    >
      Descansa con estilo
    </motion.h2>
  )
}
`,
}
