"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface CardData {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  accent: string
}

const cards: CardData[] = [
  {
    id: 1,
    title: "NATURE",
    subtitle: "Tropical Paradise",
    description: "Discover the wonders of nature — lush rivers, vibrant wildlife, and the raw beauty of untouched landscapes waiting to be explored.",
    image: "/images/nature-1.png",
    accent: "#34d399",
  },
  {
    id: 2,
    title: "OCEAN",
    subtitle: "Coastal Beauty",
    description: "Crystal clear waters meet pristine beaches in a breathtaking display of coastal elegance and endless serenity.",
    image: "/images/nature-2.png",
    accent: "#38bdf8",
  },
  {
    id: 3,
    title: "CASCADE",
    subtitle: "Hidden Falls",
    description: "Majestic waterfalls carving through ancient rainforests, painting mist and golden light into something truly magical.",
    image: "/images/nature-3.png",
    accent: "#a78bfa",
  },
  {
    id: 4,
    title: "SUMMIT",
    subtitle: "Mountain Reflections",
    description: "Snow-capped peaks mirrored in serene alpine lakes, where silence speaks louder than words ever could.",
    image: "/images/nature-4.png",
    accent: "#fb923c",
  },
  {
    id: 5,
    title: "FOREST",
    subtitle: "Enchanted Woods",
    description: "Ancient trees standing guard over moss-covered paths, where sunbeams dance through the canopy like fireflies.",
    image: "/images/nature-5.png",
    accent: "#4ade80",
  },
]

/* Smooth spring for all card motion */
const cardSpring = { type: "spring" as const, stiffness: 90, damping: 22, mass: 1.2 }

/* Container dimensions (matching the rendered container) */
const CONTAINER_H = 560

/* ------------------------------------------------------------------ */
/*  Slot Styles — each queue position maps to a visual slot           */
/* ------------------------------------------------------------------ */

function getSlotStyles(queuePos: number) {
  switch (queuePos) {
    case 0: // HERO — full bleed
      return {
        top: 0,
        right: 0,
        width: "100%",
        height: CONTAINER_H,
        opacity: 1,
        scale: 1,
        zIndex: 1,
        rotateZ: 0,
        borderRadius: 0,
      }
    case 1: // Stack front
      return {
        top: 60,
        right: 48,
        width: 220,
        height: 300,
        opacity: 1,
        scale: 1,
        zIndex: 12,
        rotateZ: -2,
        borderRadius: 16,
      }
    case 2: // Stack back
      return {
        top: 80,
        right: 24,
        width: 200,
        height: 280,
        opacity: 0.55,
        scale: 0.94,
        zIndex: 10,
        rotateZ: -1,
        borderRadius: 16,
      }
    default: // Hidden (off-screen right)
      return {
        top: 100,
        right: -280,
        width: 200,
        height: 280,
        opacity: 0,
        scale: 0.85,
        zIndex: 0,
        rotateZ: 0,
        borderRadius: 16,
      }
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function HeroStackCarousel() {
  const [queue, setQueue] = useState(cards.map((_, i) => i))

  const handleStackClick = (clickedQueuePos: number) => {
    setQueue((prev) => {
      const next = [...prev]
      const removed = next.splice(0, clickedQueuePos)
      next.push(...removed)
      return next
    })
  }

  const heroCard = cards[queue[0]]

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none px-4">
      <div className="relative w-full overflow-hidden rounded-2xl bg-gray-950 shadow-2xl" style={{ height: CONTAINER_H }}>

        {/* ============================================================ */}
        {/*  ALL CARDS — persistent in DOM, animate between slots        */}
        {/* ============================================================ */}
        {cards.map((card, cardIndex) => {
          const queuePos = queue.indexOf(cardIndex)
          const isHero = queuePos === 0
          const isClickable = queuePos === 1 || queuePos === 2
          const styles = getSlotStyles(queuePos)

          return (
            <motion.div
              key={card.id}
              className={`absolute overflow-hidden ${isClickable ? "cursor-pointer" : ""}`}
              animate={styles}
              transition={cardSpring}
              onClick={() => {
                if (isClickable) handleStackClick(queuePos)
              }}
              whileHover={isClickable ? { scale: (styles.scale ?? 1) + 0.04, y: -4 } : {}}
              style={{
                border: isHero ? "none" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {/* Card image */}
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover pointer-events-none select-none"
                draggable={false}
              />

              {/* Stack card overlay + title (only visible when NOT hero) */}
              {!isHero && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: card.accent }}>
                      {card.subtitle}
                    </p>
                    <p className="mt-1 text-base font-bold text-white">{card.title}</p>
                  </div>
                  <div className="absolute right-3 top-3 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <div key={d} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )
        })}

        {/* ============================================================ */}
        {/*  HERO GRADIENTS (always on top of the hero image)            */}
        {/* ============================================================ */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" style={{ zIndex: 2 }} />

        {/* ============================================================ */}
        {/*  HERO TEXT CONTENT                                           */}
        {/* ============================================================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-text-${heroCard.id}`}
            className="absolute bottom-12 left-10 max-w-md md:left-14 md:bottom-14 pointer-events-none"
            style={{ zIndex: 3 }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: heroCard.accent }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {heroCard.subtitle}
            </motion.p>

            <motion.h2
              className="mt-2 text-5xl font-black tracking-tight text-white md:text-6xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {heroCard.title}
            </motion.h2>

            <motion.p
              className="mt-4 text-sm leading-relaxed text-gray-200/85 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {heroCard.description}
            </motion.p>

            <motion.button
              className="mt-6 inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 pointer-events-auto"
              style={{ backgroundColor: heroCard.accent }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Explore
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* ============================================================ */}
        {/*  Bottom navigation indicators                                */}
        {/* ============================================================ */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2" style={{ zIndex: 3 }}>
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              className="h-1.5 rounded-full"
              animate={{
                width: queue[0] === idx ? 28 : 8,
                backgroundColor: queue[0] === idx ? heroCard.accent : "rgba(255,255,255,0.35)",
              }}
              transition={{ duration: 0.35 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
