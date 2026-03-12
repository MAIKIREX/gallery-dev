import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { DemoFrame } from "./demo-frame"

function ClipRevealText() {
  return (
    <div className="relative overflow-hidden">
      <motion.h2
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
      >
        Naturaleza a un paso
      </motion.h2>
    </div>
  )
}

function ClipRevealPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="2) Reveal: Clip-path" subtitle="Efecto ‘destapar’ el texto">
        <ClipRevealText />
      </DemoFrame>
    </div>
  )
}

export const textClipReveal: Variant = {
  id: "text-clip-reveal",
  title: "Text: Clip-path Reveal",
  description: "Revela el texto con máscara (clip-path) para un look editorial.",
  tags: ["text", "framer-motion", "clip-path", "reveal"],
  preview: <ClipRevealPreview />,
  code: `
"use client"

import { motion } from "framer-motion"

export function TextClipReveal() {
  return (
    <div className="relative overflow-hidden">
      <motion.h2
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-3xl font-semibold tracking-tight text-[#224A3A]"
      >
        Naturaleza a un paso
      </motion.h2>
    </div>
  )
}
`,
}
