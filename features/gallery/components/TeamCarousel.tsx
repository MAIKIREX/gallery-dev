"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michael Steward",
    role: "Creative Director",
    image: "/images/team/member-1.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "/images/team/member-2.png",
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Senior Developer",
    image: "/images/team/member-3.png",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "UX Researcher",
    image: "/images/team/member-4.png",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Product Manager",
    image: "/images/team/member-5.png",
  },
]

/**
 * Calculates the shortest circular distance from `idx` to `active`.
 * Returns a value like -2, -1, 0, 1, 2 etc.
 * Negative = left of center, Positive = right of center.
 */
function getCircularOffset(idx: number, active: number, total: number): number {
  let diff = idx - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

/**
 * Maps an offset (distance from center) to visual properties.
 * offset 0 = center card, ±1 = immediate neighbors, ±2 = far neighbors.
 */
function getPositionStyles(offset: number) {
  switch (offset) {
    case 0:
      return { x: 0, scale: 1, opacity: 1, zIndex: 5, blur: 0 }
    case -1:
      return { x: -220, scale: 0.78, opacity: 0.65, zIndex: 3, blur: 1 }
    case 1:
      return { x: 220, scale: 0.78, opacity: 0.65, zIndex: 3, blur: 1 }
    case -2:
      return { x: -380, scale: 0.58, opacity: 0.3, zIndex: 1, blur: 3 }
    case 2:
      return { x: 380, scale: 0.58, opacity: 0.3, zIndex: 1, blur: 3 }
    default:
      // Off-screen: push far away so they don't flash
      return {
        x: offset < 0 ? -550 : 550,
        scale: 0.4,
        opacity: 0,
        zIndex: 0,
        blur: 5,
      }
  }
}

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = teamMembers.length

  const goTo = useCallback(
    (dir: number) => {
      setActiveIndex((prev) => (prev + dir + total) % total)
    },
    [total],
  )

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          OUR{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            TEAM
          </span>
        </h2>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          Meet the people behind the magic
        </p>
      </div>

      {/* Carousel container */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 480 }}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous team member"
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:shadow-xl dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700 md:left-4 md:h-14 md:w-14"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* All cards rendered — each persists and slides to its new position */}
        {teamMembers.map((member, idx) => {
          const offset = getCircularOffset(idx, activeIndex, total)
          const pos = getPositionStyles(offset)
          const isCenter = offset === 0

          return (
            <motion.div
              key={member.id}
              animate={{
                x: pos.x,
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
                filter: `blur(${pos.blur}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 28,
                mass: 0.9,
              }}
              className="absolute left-1/2 top-1/2 w-52 md:w-60"
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <div
                className={`overflow-hidden rounded-2xl bg-white shadow-2xl transition-shadow duration-300 dark:bg-gray-800 ${
                  isCenter
                    ? "ring-2 ring-blue-500/30 shadow-blue-500/10"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Info */}
                <div className="px-5 py-4 text-center">
                  <h3
                    className={`font-bold tracking-wide text-gray-900 dark:text-white ${
                      isCenter ? "text-lg" : "text-base"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`mt-1 font-medium uppercase tracking-widest ${
                      isCenter
                        ? "text-xs text-blue-500 dark:text-blue-400"
                        : "text-[11px] text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next team member"
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:shadow-xl dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700 md:right-4 md:h-14 md:w-14"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {teamMembers.map((member, idx) => (
          <button
            key={member.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to ${member.name}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-8 bg-gradient-to-r from-blue-500 to-violet-500"
                : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
