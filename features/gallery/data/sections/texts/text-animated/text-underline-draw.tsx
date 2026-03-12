import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { DemoFrame } from "./demo-frame"

function UnderlineDrawText() {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="inline-block"
    >
      <span className="relative inline-block text-center text-3xl font-semibold tracking-tight text-[#224A3A]">
        Preguntas frecuentes
        <motion.span
          aria-hidden="true"
          className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#224A3A]"
          variants={{
            rest: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </span>

      <p className="mt-3 text-center text-xs text-[#224A3A]/70">
        Hover para ver el “dibujo” del subrayado
      </p>
    </motion.div>
  )
}

function UnderlineDrawPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="5) Underline Draw" subtitle="Subrayado se ‘dibuja’ L→R al hover">
        <UnderlineDrawText />
      </DemoFrame>
    </div>
  )
}

export const textUnderlineDraw: Variant = {
  id: "text-underline-draw",
  title: "Text: Underline Draw",
  description: "Subrayado animado estilo premium (izquierda → derecha).",
  tags: ["text", "framer-motion", "underline", "hover"],
  preview: <UnderlineDrawPreview />,
  code: `
"use client"

import { motion } from "framer-motion"

export function TextUnderlineDraw() {
  return (
    <motion.div initial="rest" animate="rest" whileHover="hover" className="inline-block">
      <span className="relative inline-block text-3xl font-semibold tracking-tight text-[#224A3A]">
        Preguntas frecuentes

        <motion.span
          aria-hidden="true"
          className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#224A3A]"
          variants={{
            rest: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </span>
    </motion.div>
  )
}
`,
}
