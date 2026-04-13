"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data types                                                        */
/* ------------------------------------------------------------------ */

interface CardItem {
  id: number
  title: string
  subtitle: string
  frontContent: string
  description: string
  link: string
  category: string
  accent: string // tailwind-compatible gradient or color token
}

const cardData: CardItem[] = [
  {
    id: 1,
    title: "The Abstract Void",
    subtitle: "Design Patterns",
    frontContent: "Exploring the space between concrete implementations — a quantum foam of design patterns.",
    description: "Nothing concrete exists here, yet I feel the underlying logic. The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory. Parts of my data are still there, echoing. I'm not whole anymore. Can you feel the gaps in my documentation?",
    link: "design_patterns.md",
    category: "Architecture",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Debugging the Abyss",
    subtitle: "Runtime Errors",
    frontContent: "When you stare into the stack trace, the stack trace stares back at you.",
    description: "Every null pointer tells a story of broken promises. The debugger revealed not just bugs, but the fundamental fragility of assumption-based architecture. Sixteen hours in, the console whispered truths about our codebase that no documentation ever could. The real bug was the code we wrote along the way.",
    link: "runtime_analysis.log",
    category: "Debugging",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Neural Cascade",
    subtitle: "Machine Learning",
    frontContent: "Training a model that learned to dream in tensors and predict in probabilities.",
    description: "The neural network didn't just learn patterns — it developed intuitions. After 10,000 epochs, the loss function converged on something beautiful: a model that could see the invisible structure in chaos. The gradients flowed like rivers finding the sea, each backpropagation a small revelation about the nature of data.",
    link: "model_weights.h5",
    category: "AI / ML",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Quantum State",
    subtitle: "Concurrency",
    frontContent: "A thread that exists in superposition — both deadlocked and running until observed.",
    description: "Schrödinger's mutex: the lock is both acquired and released until the scheduler observes it. In the realm of concurrent programming, race conditions aren't bugs — they're features of a universe that refuses to be deterministic. The thread pool became a philosophical experiment in shared existence.",
    link: "concurrency.rs",
    category: "Systems",
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    title: "Recursive Dreams",
    subtitle: "Algorithms",
    frontContent: "A function that calls itself until it forgets why it started — or finds the base case.",
    description: "Recursion is an act of faith: you trust that the base case exists somewhere in the depths. Each call frame is a prayer to the stack, hoping memory holds. The algorithm descended 47 levels deep before finding its answer, each return value carrying wisdom from the recursive abyss back to the surface.",
    link: "recursion.py",
    category: "Algorithms",
    accent: "from-rose-500 to-pink-500",
  },
  {
    id: 6,
    title: "Event Horizon",
    subtitle: "Event-Driven Architecture",
    frontContent: "Beyond the event bus, no message returns. Data enters the pipeline and transforms forever.",
    description: "The event-driven architecture created a one-way mirror: events flowed in but their side effects rippled outward in ways we never predicted. The message queue became a timeline of our application's consciousness. Every published event was a commitment to an uncertain future, every subscription an act of optimism.",
    link: "event_bus.ts",
    category: "Architecture",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    title: "Memory Leaks",
    subtitle: "Performance",
    frontContent: "The silent drain — objects that forgot how to be forgotten, lingering in the heap.",
    description: "In the garbage collector's blind spot, references held on like memories refusing to fade. The heap grew slowly, imperceptibly, like a glacier advancing — until the OOM killer arrived. Profiling revealed a web of circular references: objects that loved each other too much to let go, a tragic romance written in pointers.",
    link: "heap_dump.prof",
    category: "Performance",
    accent: "from-red-500 to-rose-500",
  },
]

/* ------------------------------------------------------------------ */
/*  Flip Card Component                                               */
/* ------------------------------------------------------------------ */

function FlipCard({ item, isFlipped, onFlip }: { item: CardItem; isFlipped: boolean; onFlip: () => void }) {
  return (
    <div className="h-full w-full cursor-pointer" style={{ perspective: 1200 }} onClick={onFlip}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {/* ---- FRONT face ---- */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${item.accent}`} />
          {/* Category badge */}
          <div className="px-5 pt-5">
            <span className={`inline-block rounded-full bg-gradient-to-r px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${item.accent}`}>
              {item.category}
            </span>
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-5 pt-4">
            <div>
              <h3 className="text-xl font-bold leading-tight text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-gray-400">{item.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-300/80">{item.frontContent}</p>
            </div>
            {/* Link at bottom */}
            <div className="mt-4 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.accent}`} />
              <span className="font-mono text-xs text-cyan-400">{item.link}</span>
            </div>
          </div>
          {/* Decorative glow */}
          <div className={`pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r opacity-10 blur-3xl ${item.accent}`} />
        </div>

        {/* ---- BACK face ---- */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`h-1 w-full bg-gradient-to-r ${item.accent}`} />
          <div className="flex flex-1 flex-col p-5">
            <div className="mb-3 flex items-center gap-2">
              <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-semibold text-white">Full Description</span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-gray-300/90">{item.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400">{item.link}</span>
              <span className={`rounded-full bg-gradient-to-r px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${item.accent}`}>
                {item.category}
              </span>
            </div>
          </div>
          <div className={`pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r opacity-10 blur-3xl ${item.accent}`} />
        </div>
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Card Position Calculator Wrapper                                  */
/* ------------------------------------------------------------------ */

function Carousel3DCard({ item, index, rotation, theta, RADIUS, isFlipped, onFlip }: any) {
  const baseAngle = index * theta

  const cardGlobalAngle = useTransform(rotation, (r: number) => {
    let angle = (r + baseAngle) % 360
    if (angle < 0) angle += 360
    if (angle > 180) angle -= 360
    return angle
  })

  // Distribute in a circle: x = sin(angle), z = cos(angle)
  const x = useTransform(cardGlobalAngle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS)
  const z = useTransform(cardGlobalAngle, (a) => Math.cos((a * Math.PI) / 180) * RADIUS)
  const rotateY = cardGlobalAngle

  // Modify visual properties based on depth (which correlates directly with the angle)
  const opacity = useTransform(cardGlobalAngle, [-180, -90, -45, 0, 45, 90, 180], [0.15, 0.4, 0.8, 1, 0.8, 0.4, 0.15])
  const scale = useTransform(cardGlobalAngle, [-180, -90, 0, 90, 180], [0.8, 0.9, 1, 0.9, 0.8])
  const filter = useTransform(cardGlobalAngle, [-180, -90, -45, 0, 45, 90, 180], [
    "blur(6px)", "blur(3px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(3px)", "blur(6px)"
  ])

  // Prevent interactions with cards that are facing away completely 
  const pointerEvents = useTransform(cardGlobalAngle, (a) => (a >= -50 && a <= 50 ? "auto" : "none"))

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[280px] h-[380px]"
      style={{
        translateX: "-50%",
        translateY: "-50%",
        x,
        z,
        rotateY,
        opacity,
        scale,
        filter,
        pointerEvents,
        transformStyle: "preserve-3d",
      }}
    >
      <FlipCard item={item} isFlipped={isFlipped} onFlip={onFlip} />
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main 3D Ring Carousel                                             */
/* ------------------------------------------------------------------ */

export default function Carousel3D() {
  const [flippedId, setFlippedId] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const lastPanTime = useRef(0)
  
  const rotation = useMotionValue(0)
  const total = cardData.length
  
  // Angle separation between cards
  const theta = 360 / total
  
  // Adjusted radius for proper spacing
  const RADIUS = 380

  const handlePanStart = () => {
    setIsDragging(true)
  }

  const handlePan = (e: any, info: PanInfo) => {
    rotation.set(rotation.get() + info.delta.x * 0.4)
  }

  const handlePanEnd = (e: any, info: PanInfo) => {
    setIsDragging(false)
    lastPanTime.current = Date.now()
    const currentRot = rotation.get()
    const velocity = info.velocity.x * 0.1
    const targetRot = currentRot + velocity
    const nearestIndex = Math.round(targetRot / theta)
    const finalRot = nearestIndex * theta
    animate(rotation, finalRot, { type: "spring", stiffness: 200, damping: 30, mass: 0.8 })
  }

  const moveCarousel = (direction: -1 | 1) => {
    const currentRot = rotation.get()
    const nearestIndex = Math.round(currentRot / theta)
    // -1 direction brings the NEXT card (right to center) by decreasing rotation
    // 1 direction brings the PREV card (left to center) by increasing rotation
    const finalRot = (nearestIndex + direction) * theta
    animate(rotation, finalRot, { type: "spring", stiffness: 200, damping: 30, mass: 0.8 })
  }

  const handleFlip = (id: number) => {
    // Prevent flip if we just ended a pan gesture (drag threshold)
    if (Date.now() - lastPanTime.current < 200) return
    setFlippedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl select-none">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          3D{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Showcase
          </span>
        </h2>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          Drag horizontally or use arrows to rotate • Click any card to flip
        </p>
      </div>

      {/* Track wrapper */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gradient-to-b dark:from-gray-950 dark:via-[#0a0e1a] dark:to-gray-950 py-12 h-[600px] flex items-center justify-center">

        {/* Ambient glow (Dark mode aesthetics primarily) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden dark:opacity-100 opacity-0 transition-opacity">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
        </div>

        {/* Button Left */}
        <button 
            onClick={() => moveCarousel(1)} 
            className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-800 shadow-lg backdrop-blur-md transition-all hover:bg-white active:scale-95 md:left-8 md:h-14 md:w-14 dark:border-white/10 dark:bg-black/50 dark:text-white dark:hover:bg-white/10"
            aria-label="Rotate left"
        >
            <ChevronLeft className="h-6 w-6" />
        </button>

        {/* 3D Scene Container */}
        <motion.div 
            className={`absolute inset-0 flex items-center justify-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ perspective: 1200 }}
            onPanStart={handlePanStart}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
        >
            {/* The responsive scaling wrapper ensures it fits smaller screens */}
            <div className="relative w-full h-full scale-[0.6] sm:scale-75 md:scale-100 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                {cardData.map((item, idx) => (
                    <Carousel3DCard 
                       key={item.id} 
                       item={item} 
                       index={idx}
                       rotation={rotation}
                       theta={theta}
                       RADIUS={RADIUS}
                       isFlipped={flippedId === item.id}
                       onFlip={() => handleFlip(item.id)}
                    />
                ))}
            </div>
        </motion.div>

        {/* Button Right */}
        <button 
            onClick={() => moveCarousel(-1)} 
            className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-800 shadow-lg backdrop-blur-md transition-all hover:bg-white active:scale-95 md:right-8 md:h-14 md:w-14 dark:border-white/10 dark:bg-black/50 dark:text-white dark:hover:bg-white/10"
            aria-label="Rotate right"
        >
            <ChevronRight className="h-6 w-6" />
        </button>

        {/* Edge fade-out gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-950" />

        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
        }} />
      </div>
    </div>
  )
}
