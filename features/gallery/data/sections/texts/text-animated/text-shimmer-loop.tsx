import type { Variant } from "../../../../types"
import { motion } from "framer-motion"
import { DemoFrame } from "./demo-frame"

function ShimmerText() {
  return (
    <div className="text-center">
      <motion.span
        className="inline-block bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(34,74,58,0.35), rgba(34,74,58,1), rgba(34,74,58,0.35))",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPositionX: ["0%", "100%", "0"] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Oferta de temporada
      </motion.span>
      <p className="mt-3 text-center text-xs text-[#224A3A]/70">
        Brillo suave continuo (va y vuelve)
      </p>
    </div>
  )
}

function ShimmerPreview() {
  return (
    <div className="w-full bg-[#F4EFE8] p-6">
      <DemoFrame title="8) Shimmer Loop" subtitle="Brillo suave continuo (no invasivo)">
        <ShimmerText />
      </DemoFrame>
    </div>
  )
}

export const textShimmerLoop: Variant = {
  id: "text-shimmer-loop",
  title: "Text: Shimmer Loop",
  description: "Efecto shimmer premium para promociones o CTA.",
  tags: ["text", "framer-motion", "loop", "shimmer"],
  preview: <ShimmerPreview />,
  code: `
"use client"

import { motion } from "framer-motion"

export function TextShimmerLoop() {
  return (
    <motion.span
      className="inline-block bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(34,74,58,0.35), rgba(34,74,58,1), rgba(34,74,58,0.35))",
        backgroundSize: "200% 100%",
      }}
      animate={{ backgroundPositionX: ["0%", "100%", "0"] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      Oferta de temporada
    </motion.span>
  )
}
`,
}
