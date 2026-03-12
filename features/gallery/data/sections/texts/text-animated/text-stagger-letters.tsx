import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { useMemo } from "react"
import { DemoFrame } from "./demo-frame"

function StaggerLettersText() {
  const text = "Jägerhof Experience"
  const letters = useMemo(() => text.split(""), [text])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.02 } },
  }

  const child = {
    hidden: { opacity: 0, y: -14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  }

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h2>
  )
}

function StaggerLettersPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="3) Stagger: Letras" subtitle="Cada letra entra con delay">
        <StaggerLettersText />
      </DemoFrame>
    </div>
  )
}

export const textStaggerLetters: Variant = {
  id: "text-stagger-letters",
  title: "Text: Stagger Letters",
  description: "Animación letra por letra (ideal para headings cortos).",
  tags: ["text", "framer-motion", "stagger", "letters"],
  preview: <StaggerLettersPreview />,
  code: `
"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

export function TextStaggerLetters() {
  const text = "Jägerhof Experience"
  const letters = useMemo(() => text.split(""), [text])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.02 } },
  }

  const child = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  }

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="show"
      className="text-3xl font-semibold tracking-tight text-[#224A3A]"
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {ch === " " ? "\\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h2>
  )
}
`,
}
