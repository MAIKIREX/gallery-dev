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
    description: "Discover the wonders of nature — lush rivers, vibrant wildlife, and the raw beauty of untouched landscapes.",
    image: "/images/nature-1.png",
    accent: "#34d399",
  },
  {
    id: 2,
    title: "OCEAN",
    subtitle: "Coastal Beauty",
    description: "Crystal clear waters meet pristine beaches in a breathtaking display of coastal elegance and serenity.",
    image: "/images/nature-2.png",
    accent: "#38bdf8",
  },
  {
    id: 3,
    title: "CASCADE",
    subtitle: "Hidden Falls",
    description: "Majestic waterfalls carving through ancient rainforests, painting mist and light into something magical.",
    image: "/images/nature-3.png",
    accent: "#a78bfa",
  },
  {
    id: 4,
    title: "SUMMIT",
    subtitle: "Mountain Reflections",
    description: "Snow-capped peaks mirrored in serene alpine lakes, where silence speaks louder than words.",
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

/* Shared spring — smooth, cinematic */
const smoothSpring = { type: "spring" as const, stiffness: 100, damping: 22, mass: 1.4 }

const COLLAPSED_WIDTH = 90
const EXPANDED_WIDTH = 680
const CARD_HEIGHT = 420
const GAP = 4
const ACTIVE_MARGIN = 16

/* ------------------------------------------------------------------ */
/*  Single Persistent Card                                            */
/* ------------------------------------------------------------------ */

function CarouselCard({
  card,
  isActive,
  onSelect,
}: {
  card: CardData
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <motion.div
      layout
      className="relative cursor-pointer overflow-hidden rounded-3xl"
      animate={{
        width: isActive ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
        height: CARD_HEIGHT,
        marginLeft: isActive ? ACTIVE_MARGIN : 0,
        marginRight: isActive ? ACTIVE_MARGIN : 0,
      }}
      transition={smoothSpring}
      onClick={() => { if (!isActive) onSelect() }}
      style={{ flexShrink: 0 }}
    >
      {/* ---- Background image (always present, always full-bleed) ---- */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
        draggable={false}
      />

      {/* ---- Dark overlay — heavier when collapsed ---- */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)",
        }}
        transition={{ duration: 0.5 }}
      />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      )}

      {/* ---- Expanded content ---- */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key={`content-${card.id}`}
            className="absolute inset-0 flex flex-col justify-end p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <motion.h3
              className="text-3xl font-extrabold tracking-wider text-white md:text-4xl"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            >
              {card.title}
            </motion.h3>

            <motion.p
              className="mt-1 text-sm font-semibold uppercase tracking-widest"
              style={{ color: card.accent }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.32, ease: "easeOut" }}
            >
              {card.subtitle}
            </motion.p>

            <motion.p
              className="mt-3 max-w-lg text-sm leading-relaxed text-gray-200/90 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.38, ease: "easeOut" }}
            >
              {card.description}
            </motion.p>

            <motion.button
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: card.accent }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.44, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Hover glow for collapsed cards ---- */}
      {!isActive && (
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 30px ${card.accent}30`,
            border: `1px solid ${card.accent}40`,
          }}
        />
      )}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Expanding Carousel                                           */
/* ------------------------------------------------------------------ */

export default function ExpandingCarousel() {
  const [activeId, setActiveId] = useState(cards[0].id)

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none px-4">
      <motion.div
        className="flex items-stretch justify-center"
        style={{ gap: GAP }}
        layout
        transition={smoothSpring}
      >
        {cards.map((card) => (
          <CarouselCard
            key={card.id}
            card={card}
            isActive={card.id === activeId}
            onSelect={() => setActiveId(card.id)}
          />
        ))}
      </motion.div>
    </div>
  )
}
