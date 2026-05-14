import type { Variant } from "../../../../types"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { DemoFrame } from "./demo-frame"

function RotatingText() {
  const phrases = useMemo(() => ["Hotel", "Culinario", "Naturaleza", "Nosotros"], [])
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % phrases.length), 1600)
    return () => clearInterval(t)
  }, [phrases.length])

  return (
    <div className="text-center">
      <div className="text-3xl font-semibold tracking-tight text-[#224A3A]">
        <span className="opacity-70">Explora:</span>{" "}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={phrases[i]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block"
          >
            {phrases[i]}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-center text-xs text-[#224A3A]/70">
        Cambio automático con transición suave
      </p>
    </div>
  )
}

function RotatingPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="10) Text Swap" subtitle="Frases que rotan con AnimatePresence">
        <RotatingText />
      </DemoFrame>
    </div>
  )
}

export const textSwapRotate: Variant = {
  id: "text-swap-rotate",
  title: "Text: Swap / Rotate",
  description: "Rotación de frases para hero o categoría de servicios (suave y limpia).",
  tags: ["text", "framer-motion", "animatepresence", "swap"],
  preview: <RotatingPreview />,
  code: `
"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function TextSwapRotate() {
  const phrases = useMemo(() => ["Hotel", "Culinario", "Naturaleza", "Nosotros"], [])
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % phrases.length), 1600)
    return () => clearInterval(t)
  }, [phrases.length])

  return (
    <div className="text-3xl font-semibold tracking-tight text-[#224A3A]">
      <span className="opacity-70">Explora:</span>{" "}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={phrases[i]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-block"
        >
          {phrases[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
`,
}
