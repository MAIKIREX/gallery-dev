import type { Variant } from "../../../../types"
import { motion } from "framer-motion"

export const motionHighlight: Variant = {
  id: "motion-highlight",
  title: "Motion Highlight",
  description: "Subrayado animado para destacar una palabra clave",
  tags: ["text", "motion", "highlight"],
  preview: (
    <div className="max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Framer motion</p>
      <h3 className="mt-4 text-3xl font-semibold text-neutral-900">
        Texto que{" "}
        <span className="relative inline-flex">
          <span className="relative z-10">respira</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-x-0 -bottom-1 h-2 origin-left rounded-full bg-amber-200/70"
          />
        </span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        Usa un subrayado animado para guiar la mirada sin distraer. Ideal para frases cortas o
        slogans con una sola palabra clave.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
        {["claridad", "ritmo", "foco"].map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  ),
  code: `<div className="max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
  <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Framer motion</p>
  <h3 className="mt-4 text-3xl font-semibold text-neutral-900">
    Texto que{" "}
    <span className="relative inline-flex">
      <span className="relative z-10">respira</span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-x-0 -bottom-1 h-2 origin-left rounded-full bg-amber-200/70"
      />
    </span>
  </h3>
  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
    Usa un subrayado animado para guiar la mirada sin distraer. Ideal para frases cortas o
    slogans con una sola palabra clave.
  </p>
  <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
    {["claridad", "ritmo", "foco"].map((word, index) => (
      <motion.span
        key={word}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.3 }}
        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1"
      >
        {word}
      </motion.span>
    ))}
  </div>
</div>`,
}
