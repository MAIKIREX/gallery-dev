import type { Variant } from "../../../../types"
import type { MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"
import { DemoFrame } from "./demo-frame"

function MagneticText() {
  const ref = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 })

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    x.set(dx * 0.12)
    y.set(dy * 0.12)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative">
      <motion.h2
        style={{ x: sx, y: sy }}
        className="text-center text-3xl font-semibold tracking-tight text-[#224A3A]"
      >
        Explorar servicios
      </motion.h2>
      <p className="mt-3 text-center text-xs text-[#224A3A]/70">
        Hover y mueve el cursor encima del texto
      </p>
    </div>
  )
}

function MagneticPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="7) Magnetic Hover" subtitle="El texto se ‘atrae’ al cursor">
        <MagneticText />
      </DemoFrame>
    </div>
  )
}

export const textMagneticHover: Variant = {
  id: "text-magnetic-hover",
  title: "Text: Magnetic Hover",
  description: "Microinteracción ‘magnetic’ elegante para CTA o enlaces grandes.",
  tags: ["text", "framer-motion", "hover", "magnetic"],
  preview: <MagneticPreview />,
  code: `
"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function TextMagneticHover() {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 })

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    x.set(dx * 0.12)
    y.set(dy * 0.12)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.h2
        style={{ x: sx, y: sy }}
        className="text-3xl font-semibold tracking-tight text-[#224A3A]"
      >
        Explorar servicios
      </motion.h2>
    </div>
  )
}
`,
}
