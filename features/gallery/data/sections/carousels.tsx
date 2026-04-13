import type { Section } from "../../types"
import TeamCarousel from "../../components/TeamCarousel"
import Carousel3D from "../../components/Carousel3D"
import PanoramicRingCarousel from "../../components/PanoramicRingCarousel"
import ExpandingCarousel from "../../components/ExpandingCarousel"
import HeroStackCarousel from "../../components/HeroStackCarousel"

export const carouselsSection: Section = {
  id: "carousels",
  name: "Carruseles",
  collections: [
    {
      id: "team-carousels",
      title: "Team Carousels",
      description: "Interactive team member carousels with smooth animations and depth effects",
      variants: [
        {
          id: "team-carousel-depth",
          title: "Team Carousel with Depth Effect",
          description:
            "A premium team carousel featuring a centered active card with lateral cards at reduced scale and opacity. Each card persists in the DOM and slides to its new position with spring physics, creating a real carousel sliding effect.",
          tags: ["carousel", "team", "framer-motion", "animated", "interactive"],
          preview: <TeamCarousel />,
          code: `"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TeamMember {
  id: number; name: string; role: string; image: string
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Michael Steward", role: "Creative Director", image: "/images/team/member-1.png" },
  { id: 2, name: "Sarah Johnson", role: "Lead Designer", image: "/images/team/member-2.png" },
  { id: 3, name: "David Martinez", role: "Senior Developer", image: "/images/team/member-3.png" },
  { id: 4, name: "Emily Chen", role: "UX Researcher", image: "/images/team/member-4.png" },
  { id: 5, name: "James Wilson", role: "Product Manager", image: "/images/team/member-5.png" },
]

function getCircularOffset(idx: number, active: number, total: number) {
  let diff = idx - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

function getPositionStyles(offset: number) {
  switch (offset) {
    case 0:  return { x: 0,    scale: 1,    opacity: 1,    zIndex: 5, blur: 0 }
    case -1: return { x: -220, scale: 0.78, opacity: 0.65, zIndex: 3, blur: 1 }
    case 1:  return { x: 220,  scale: 0.78, opacity: 0.65, zIndex: 3, blur: 1 }
    case -2: return { x: -380, scale: 0.58, opacity: 0.3,  zIndex: 1, blur: 3 }
    case 2:  return { x: 380,  scale: 0.58, opacity: 0.3,  zIndex: 1, blur: 3 }
    default: return { x: offset < 0 ? -550 : 550, scale: 0.4, opacity: 0, zIndex: 0, blur: 5 }
  }
}

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = teamMembers.length
  const goTo = useCallback((dir: number) => {
    setActiveIndex(prev => (prev + dir + total) % total)
  }, [total])

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none">
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: 480 }}>
        <button onClick={() => goTo(-1)} className="absolute left-4 z-10 flex size-14 items-center justify-center rounded-full bg-white/80 shadow-lg">
          <ChevronLeft />
        </button>
        {teamMembers.map((member, idx) => {
          const offset = getCircularOffset(idx, activeIndex, total)
          const pos = getPositionStyles(offset)
          return (
            <motion.div key={member.id}
              animate={{ x: pos.x, scale: pos.scale, opacity: pos.opacity, zIndex: pos.zIndex, filter: \`blur(\${pos.blur}px)\` }}
              transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.9 }}
              className="absolute left-1/2 top-1/2 w-60" style={{ translateX: "-50%", translateY: "-50%" }}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={member.name} className="size-full object-cover" />
                </div>
                <div className="px-5 py-4 text-center">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-blue-500">{member.role}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
        <button onClick={() => goTo(1)} className="absolute right-4 z-10 flex size-14 items-center justify-center rounded-full bg-white/80 shadow-lg">
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}`,
        },
      ],
    },
    {
      id: "3d-carousels",
      title: "3D Carousels",
      description: "Immersive 3D carousels with drag interaction, perspective depth, and card flip animations",
      variants: [
        {
          id: "carousel-3d-ring",
          title: "3D Ring Carousel with Flip",
          description:
            "A true cylindrical 3D carousel. Cards are distributed in a ring with geometric depth. The entire cylinder can be rotated smoothly via drag gestures or directional buttons. Clicking a card flips it 180 degrees to reveal detailed content on the back face.",
          tags: ["carousel", "3d", "cylinder", "drag", "flip", "framer-motion", "perspective"],
          preview: <Carousel3D />,
          code: `"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ... CardItem Interface & cardData Array ...

function FlipCard({ item, isFlipped, onFlip }: any) {
  return (
    <div className="h-full w-full cursor-pointer" style={{ perspective: 1200 }} onClick={onFlip}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{ backfaceVisibility: "hidden" }}>
          {/* Detailed layout code... */}
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          {/* Detailed layout code... */}
        </div>
      </motion.div>
    </div>
  )
}

function Carousel3DCard({ item, index, rotation, theta, RADIUS, isFlipped, onFlip }: any) {
  const baseAngle = index * theta

  const cardGlobalAngle = useTransform(rotation, (r: number) => {
    let angle = (r + baseAngle) % 360
    if (angle < 0) angle += 360
    if (angle > 180) angle -= 360
    return angle
  })

  // True 3D circle distribution
  const x = useTransform(cardGlobalAngle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS)
  const z = useTransform(cardGlobalAngle, (a) => Math.cos((a * Math.PI) / 180) * RADIUS)
  const rotateY = cardGlobalAngle

  const opacity = useTransform(cardGlobalAngle, [-180, -90, -45, 0, 45, 90, 180], [0.15, 0.4, 0.8, 1, 0.8, 0.4, 0.15])
  const scale = useTransform(cardGlobalAngle, [-180, -90, 0, 90, 180], [0.8, 0.9, 1, 0.9, 0.8])
  const filter = useTransform(cardGlobalAngle, [-180, -90, -45, 0, 45, 90, 180], ["blur(6px)", "blur(3px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(3px)", "blur(6px)"])
  const pointerEvents = useTransform(cardGlobalAngle, (a) => (a >= -50 && a <= 50 ? "auto" : "none"))

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[280px] h-[380px]"
      style={{ translateX: "-50%", translateY: "-50%", x, z, rotateY, opacity, scale, filter, pointerEvents, transformStyle: "preserve-3d" }}
    >
      <FlipCard item={item} isFlipped={isFlipped} onFlip={onFlip} />
    </motion.div>
  )
}

export default function Carousel3D() {
  const [flippedId, setFlippedId] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const lastPanTime = useRef(0)
  
  const rotation = useMotionValue(0)
  const total = 7 // cardData.length
  const theta = 360 / total
  const RADIUS = 380

  const handlePanStart = () => { setIsDragging(true) }
  const handlePan = (e: any, info: PanInfo) => { 
    rotation.set(rotation.get() + info.delta.x * 0.4) 
  }
  const handlePanEnd = (e: any, info: PanInfo) => {
    setIsDragging(false)
    lastPanTime.current = Date.now()
    const targetRot = rotation.get() + info.velocity.x * 0.1
    animate(rotation, Math.round(targetRot / theta) * theta, { type: "spring", stiffness: 200, damping: 30 })
  }

  const moveCarousel = (direction: -1 | 1) => {
    const finalRot = (Math.round(rotation.get() / theta) + direction) * theta
    animate(rotation, finalRot, { type: "spring", stiffness: 200, damping: 30 })
  }

  const handleFlip = (id: number) => {
    if (Date.now() - lastPanTime.current < 200) return // Skip flip if dragged
    setFlippedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl select-none">
      <div className="relative overflow-hidden rounded-3xl bg-gray-950 py-12 h-[600px] flex items-center justify-center">
        
        {/* Buttons */}
        <button onClick={() => moveCarousel(1)} className="absolute left-4 z-20 ..."><ChevronLeft /></button>
        <button onClick={() => moveCarousel(-1)} className="absolute right-4 z-20 ..."><ChevronRight /></button>

        {/* Rotatable Cylinder */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ perspective: 1200 }}
            onPanStart={handlePanStart} onPan={handlePan} onPanEnd={handlePanEnd}
        >
            <div className="relative w-full h-full scale-[0.6] sm:scale-75 md:scale-100 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                {cardData.map((item, idx) => ( // assuming cardData is mapped
                    <Carousel3DCard key={item.id} item={item} index={idx} rotation={rotation} theta={theta} RADIUS={RADIUS} isFlipped={flippedId === item.id} onFlip={() => handleFlip(item.id)} />
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  )
}`,
        },
        {
          id: "panoramic-ring",
          title: "Panoramic Gallery Ring",
          description:
            "A seamless, tightly packed continuous ring of tall images forming a panoramic theater. Minimal gaps and dynamic curved edge shadowing mimic a physical circular screen. Features interactive focus snapping when clicking any segment.",
          tags: ["carousel", "3d", "cinema", "drag", "panoramic"],
          preview: <PanoramicRingCarousel />,
          code: `"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion"

const teamImages = [
  "/images/team/member-1.png",
  "/images/team/member-2.png",
  "/images/team/member-3.png",
  "/images/team/member-4.png",
  "/images/team/member-5.png",
  "/images/team/member-1.png",
  "/images/team/member-2.png",
  "/images/team/member-3.png",
  "/images/team/member-4.png",
  "/images/team/member-5.png",
]

const ITEM_WIDTH = 260
const ITEM_HEIGHT = 450
const TOTAL_ITEMS = teamImages.length
const THETA = 360 / TOTAL_ITEMS
const RADIUS = 415 

function RingItem({ image, index, rotation, onClick }: any) {
  const baseAngle = index * THETA;
  
  const cardGlobalAngle = useTransform(rotation, (r: number) => {
    let angle = (r + baseAngle) % 360
    if (angle < 0) angle += 360
    if (angle > 180) angle -= 360
    return angle
  })
  
  // IMMERSIVE CYLINDER (Concave room): Z is completely inverted (-cos) and Y rotation faces inward (-a)
  const x = useTransform(cardGlobalAngle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS)
  const z = useTransform(cardGlobalAngle, (a) => -Math.cos((a * Math.PI) / 180) * RADIUS)
  const rotateY = useTransform(cardGlobalAngle, (a) => -a)

  // Visibility logic: soften items as they approach the camera edges 
  const opacity = useTransform(cardGlobalAngle, [-90, -60, -20, 20, 60, 90], [0, 0.4, 1, 1, 0.4, 0])
  const pointerEvents = useTransform(cardGlobalAngle, (a) => Math.abs(a) < 70 ? "auto" : "none")

  // Curve shading: diminish brightness heavily on the sides to amplify depth
  const brightness = useTransform(cardGlobalAngle, [-90, -45, 0, 45, 90], [0.1, 0.5, 1.1, 0.5, 0.1])
  const filter = useTransform(brightness, (b) => \`brightness(\${b})\`)

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] cursor-pointer"
      style={{
        width: ITEM_WIDTH, height: ITEM_HEIGHT,
        translateX: "-50%", translateY: "-50%",
        x, z, rotateY, opacity, pointerEvents, filter,
        transformStyle: "preserve-3d"
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={image} className="w-full h-full object-cover pointer-events-none select-none" alt="Gallery item" />
    </motion.div>
  )
}

export default function PanoramicRingCarousel() {
  const rotation = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)
  const lastPanTime = useRef(0)

  const handlePanStart = () => { setIsDragging(true) }
  
  const handlePan = (e: any, info: PanInfo) => { 
    rotation.set(rotation.get() + info.delta.x * 0.25) 
  }
  
  const handlePanEnd = (e: any, info: PanInfo) => {
    setIsDragging(false)
    lastPanTime.current = Date.now()
    const targetRot = rotation.get() + info.velocity.x * 0.05
    animate(rotation, Math.round(targetRot / THETA) * THETA, { type: "spring", stiffness: 150, damping: 25 })
  }

  const handleItemClick = (index: number) => {
    if (Date.now() - lastPanTime.current < 200) return
    const currentRot = rotation.get()
    const targetBase = -(index * THETA)
    let delta = (targetBase - currentRot) % 360
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360
    animate(rotation, currentRot + delta, { type: "spring", stiffness: 150, damping: 25, mass: 0.9 })
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl select-none">
      <div className="relative overflow-hidden rounded-2xl bg-black py-12 h-[650px] flex items-center justify-center">

        <motion.div 
            className={\`absolute inset-0 flex items-center justify-center \${isDragging ? "cursor-grabbing" : "cursor-grab"}\`}
            style={{ perspective: 1100 }} 
            onPanStart={handlePanStart}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
        >
            <div className="relative w-full h-full scale-[0.6] sm:scale-75 md:scale-100 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                {teamImages.map((img, idx) => (
                    <RingItem key={idx} image={img} index={idx} rotation={rotation} onClick={() => handleItemClick(idx)} />
                ))}
            </div>
        </motion.div>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>
    </div>
  )
}`,
        },
      ],
    },
    {
      id: "expanding-carousels",
      title: "Expanding Carousels",
      description: "Stacked accordion-style carousels where selecting a compressed card expands it into the hero position with fluid layout animations",
      variants: [
        {
          id: "expanding-nature",
          title: "Expanding Nature Gallery",
          description:
            "A premium accordion carousel where one card is always expanded as the hero and the rest are compressed into narrow strips. Clicking a compressed card triggers a smooth Framer Motion layoutId morph, seamlessly swapping the hero with fluid spring physics. Features numbered badges, gradient overlays, and action buttons.",
          tags: ["carousel", "expanding", "accordion", "stacked", "framer-motion", "layout-animation"],
          preview: <ExpandingCarousel />,
          code: `"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    description: "Discover the wonders of nature.",
    image: "/images/nature-1.png",
    accent: "#34d399",
  },
  // ... more cards
]

function CollapsedCard({ card, index, onClick }: { card: CardData; index: number; onClick: () => void }) {
  return (
    <motion.div
      layoutId={\`card-container-\${card.id}\`}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-3xl"
      style={{ width: 90, height: 420, flexShrink: 0 }}
      whileHover={{ width: 110, transition: { duration: 0.25 } }}
      transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.8 }}
    >
      <motion.div layoutId={\`card-image-\${card.id}\`} className="absolute inset-0">
        <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <motion.div layoutId={\`card-number-\${card.id}\`} className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: \`\${card.accent}55\`, borderColor: card.accent, borderWidth: 2 }}>
          {index + 1}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ExpandedCard({ card, index }: { card: CardData; index: number }) {
  return (
    <motion.div
      layoutId={\`card-container-\${card.id}\`}
      className="relative overflow-hidden rounded-3xl"
      style={{ flex: 1, minWidth: 0, height: 420 }}
      transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.8 }}
    >
      <motion.div layoutId={\`card-image-\${card.id}\`} className="absolute inset-0">
        <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <motion.div layoutId={\`card-number-\${card.id}\`} className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
            style={{ backgroundColor: \`\${card.accent}55\`, borderColor: card.accent, borderWidth: 2 }}>
            {index + 1}
          </div>
        </motion.div>
        <AnimatePresence>
          <motion.div key={\`info-\${card.id}\`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.15, duration: 0.35 }}>
            <h3 className="text-3xl font-extrabold tracking-wider text-white">{card.title}</h3>
            <p className="mt-1 text-sm font-semibold uppercase" style={{ color: card.accent }}>{card.subtitle}</p>
            <p className="mt-3 max-w-lg text-sm text-gray-200/90">{card.description}</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: card.accent }}>Explore →</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function ExpandingCarousel() {
  const [activeId, setActiveId] = useState(cards[0].id)

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none px-4">
      <motion.div className="flex items-stretch gap-3" layout
        transition={{ type: "spring", stiffness: 350, damping: 35 }}>
        {cards.map((card, idx) => {
          const isActive = card.id === activeId
          if (isActive) return <ExpandedCard key={card.id} card={card} index={idx} />
          return <CollapsedCard key={card.id} card={card} index={idx} onClick={() => setActiveId(card.id)} />
        })}
      </motion.div>
    </div>
  )
}`,
        },
      ],
    },
    {
      id: "hero-carousels",
      title: "Hero Carousels",
      description: "Full-bleed hero carousels with stacked side cards and cinematic transitions",
      variants: [
        {
          id: "hero-stack-carousel",
          title: "Hero Stack Carousel",
          description:
            "A cinematic full-bleed hero carousel where the active card fills the entire container as a background. Two preview cards are stacked on the right with depth and rotation effects. Clicking a stack card rotates the circular queue, sending the current hero to the back and expanding the selected card with a smooth crossfade.",
          tags: ["carousel", "hero", "full-bleed", "stack", "cinematic", "framer-motion"],
          preview: <HeroStackCarousel />,
          code: `// See HeroStackCarousel.tsx for full implementation`,
        },
      ],
    },
  ],
}
