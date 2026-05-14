import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { DemoFrame } from "./demo-frame"

function ScrollRevealText() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
    >
      Aparece al hacer scroll
    </motion.h2>
  )
}

function ScrollRevealPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="9) Scroll Reveal" subtitle="Se repite al salir y volver a entrar">
        <div className="w-full space-y-10">
          <div className="h-14" />
          <ScrollRevealText />
          <div className="h-14" />
        </div>
      </DemoFrame>
    </div>
  )
}

export const textScrollReveal: Variant = {
  id: "text-scroll-reveal",
  title: "Text: Scroll Reveal (Repeat)",
  description:
    "Aparición al hacer scroll que se repite al salir y volver a entrar al viewport.",
  tags: ["text", "framer-motion", "scroll", "whileInView"],
  preview: <ScrollRevealPreview />,
  code: `
"use client"

import { motion } from "framer-motion"

export function TextScrollReveal() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-3xl font-semibold tracking-tight text-[#224A3A]"
    >
      Aparece al hacer scroll
    </motion.h2>
  )
}
`,
}
