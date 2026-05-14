import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { useMemo } from "react"
import { DemoFrame } from "./demo-frame"

function StaggerWordsText() {
  const text = "Culinario. Calma. Montaña."
  const words = useMemo(() => text.split(" "), [text])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }

  const child = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  } as const

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={child} className="mr-2 inline-block">
          {w}
        </motion.span>
      ))}
    </motion.h2>
  )
}

function StaggerWordsPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="4) Stagger: Palabras" subtitle="Más natural para frases">
        <StaggerWordsText />
      </DemoFrame>
    </div>
  )
}

export const textStaggerWords: Variant = {
  id: "text-stagger-words",
  title: "Text: Stagger Words",
  description: "Animación palabra por palabra, ideal para claims o descripciones.",
  tags: ["text", "framer-motion", "stagger", "words"],
  preview: <StaggerWordsPreview />,
  code: `
"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

export function TextStaggerWords() {
  const text = "Culinario. Calma. Montaña."
  const words = useMemo(() => text.split(" "), [text])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }

  const child = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="show"
      className="text-3xl font-semibold tracking-tight text-[#224A3A]"
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={child} className="mr-2 inline-block">
          {w}
        </motion.span>
      ))}
    </motion.h2>
  )
}
`,
}
