'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Variant } from "../../../../types";
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

// shuffle helper
function shuffle<T>(arr: T[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function SpotlightMaskShuffleHeroPreview() {
  const ref = useRef<HTMLDivElement | null>(null)

  // Spotlight that affects the whole hero
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 420, damping: 55, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 420, damping: 55, mass: 0.6 })

  // 4 photos provided by you (Unsplash)
  const images = useMemo(
    () => [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    ],
    []
  )

  // grid order (shuffle randomly every few seconds)
  const [order, setOrder] = useState(() => images.map((_, i) => i))

  useEffect(() => {
    const t = setInterval(() => {
      setOrder((prev) => shuffle(prev))
    }, 2600) // feel free to tune (2000-3500)
    return () => clearInterval(t)
  }, [])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top

    // store as center-based values for stable motion
    const dx = clamp(x - r.width / 2, -240, 240)
    const dy = clamp(y - r.height / 2, -180, 180)
    mx.set(dx)
    my.set(dy)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative overflow-hidden rounded-[34px] bg-neutral-950 text-white ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
        >
          {/* Ambient gradient */}
          <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(800px_360px_at_20%_10%,rgba(236,72,153,0.28),transparent_60%),radial-gradient(820px_380px_at_85%_30%,rgba(59,130,246,0.26),transparent_62%),radial-gradient(820px_420px_at_60%_90%,rgba(16,185,129,0.18),transparent_65%)]" />

          {/* Spotlight following cursor (whole hero) */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(580px 360px at 50% 45%, rgba(255,255,255,0.22), transparent 65%)`,
              transform: 'translateZ(0)',
              x: sx,
              y: sy,
            }}
          />

          {/* subtle center divider */}
          <div className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16">
            {/* LEFT: Mask reveal title + text */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Sparkles className="h-4 w-4" />
                </span>
                Spotlight + Mask Reveal
              </div>

              {/* Mask Reveal Title */}
              <div className="mt-6">
                <div className="relative inline-block">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
                  >
                    Discover the title
                    <span className="block text-white/70">with a masked wipe.</span>
                  </motion.h1>

                  {/* “wipe mask” overlay */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ x: '0%' }}
                    animate={{ x: '110%' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-xl bg-neutral-950"
                    style={{
                      // soft edge / premium mask feel
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset',
                    }}
                  />
                </div>

                {/* extra “blur → sharp” after reveal */}
                <motion.p
                  initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 max-w-xl text-pretty text-sm text-white/65 md:text-base"
                >
                  Move your cursor to feel the spotlight across the entire hero. On the right,
                  a 2×2 photo matrix reshuffles positions over time with smooth layout transitions.
                </motion.p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    View gallery
                    <ArrowRight className="h-4 w-4 opacity-80" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* RIGHT: 2x2 photo matrix shuffle */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[28px] bg-white/5 ring-1 ring-white/10" />

              <div className="relative grid gap-4 p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/85">Photo Matrix</div>
                  <div className="text-xs text-white/55">Shuffle every ~2.6s</div>
                </div>

                <motion.div
                  layout
                  className="grid grid-cols-2 gap-3"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                >
                  {order.map((idx) => (
                    <motion.div
                      key={images[idx]}
                      layout
                      className="group relative aspect-square overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                      whileHover={{ y: -2 }}
                    >
                      {/* Use <img> to avoid next/image host config */}
                      <img
                        src={images[idx]}
                        alt="Gallery photo"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_240px_at_50%_0%,rgba(255,255,255,0.14),transparent_60%)]" />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="rounded-2xl bg-white/5 p-4 text-xs text-white/60 ring-1 ring-white/10">
                  Tip: en producción puedes cambiar el intervalo, o “pinnear” una imagen favorita en top-left.
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>
      </div>
    </section>
  )
}

export const spotlightMaskShuffleHero: Variant = {
  id: 'spotlight-mask-shuffle-hero',
  title: 'Spotlight + Mask Reveal + Shuffle Grid',
  description:
    'Left: masked title reveal. Whole hero: spotlight follows cursor. Right: 2×2 photo matrix shuffles positions over time.',
  tags: ['hero', 'spotlight', 'mask-reveal', 'shuffle', 'framer-motion', 'tailwind', 'lucide', 'responsive'],
  preview: <SpotlightMaskShuffleHeroPreview />,
  code: `'use client'

/**
 * Copy the full component from the preview for a complete runnable snippet.
 * (Same JSX + hooks, using <img> to avoid next/image hostname config issues.)
 */
`,
}
