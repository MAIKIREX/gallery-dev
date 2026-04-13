"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion"

// Duplicating the 5 team members to create a 10-piece continuous ring showcase.
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

// Mathematical Radius for regular decagon: (Width / 2) / Math.tan(PI / 10)
// Math.tan(18deg) approx 0.3249. 130 / 0.3249 = 400.1
// We use 415 to leave a pristine gap of ~10px between the images
const RADIUS = 415 

function RingItem({ image, index, rotation, onClick }: any) {
  const baseAngle = index * THETA;
  
  // Normalized global angle relative to camera (0 = center)
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
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] cursor-pointer"
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        translateX: "-50%",
        translateY: "-50%",
        x,
        z,
        rotateY,
        opacity,
        // @ts-ignore
        pointerEvents,
        filter,
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

  // Drag handlers
  const handlePanStart = () => { setIsDragging(true) }
  
  const handlePan = (e: any, info: PanInfo) => { 
    // Reduced sensitivity slightly to feel heavy and cinematic
    rotation.set(rotation.get() + info.delta.x * 0.25) 
  }
  
  const handlePanEnd = (e: any, info: PanInfo) => {
    setIsDragging(false)
    lastPanTime.current = Date.now()
    
    // Nearest snap mechanism considering kinetic velocity
    const targetRot = rotation.get() + info.velocity.x * 0.05
    animate(rotation, Math.round(targetRot / THETA) * THETA, { type: "spring", stiffness: 150, damping: 25 })
  }

  // Click handler to bring clicked item to front
  const handleItemClick = (index: number) => {
    if (Date.now() - lastPanTime.current < 200) return // filter out pseudo-clicks from dragging
    
    const currentRot = rotation.get()
    const targetBase = -(index * THETA)
    
    // Shortest path interpolation algorithm
    let delta = (targetBase - currentRot) % 360
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360
    
    animate(rotation, currentRot + delta, { type: "spring", stiffness: 150, damping: 25, mass: 0.9 })
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl select-none">
       {/* Cinematic theater background */}
      <div className="relative overflow-hidden rounded-2xl bg-black py-12 h-[650px] flex items-center justify-center">

        <motion.div 
            className={`absolute inset-0 flex items-center justify-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            // Perspective lengthened to 1100 to make the concave room feel vast and grand
            style={{ perspective: 1100 }} 
            onPanStart={handlePanStart}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
        >
            <div className="relative w-full h-full scale-[0.6] sm:scale-75 md:scale-100 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                {teamImages.map((img, idx) => (
                    <RingItem 
                       key={idx} 
                       image={img} 
                       index={idx}
                       rotation={rotation}
                       onClick={() => handleItemClick(idx)}
                    />
                ))}
            </div>
        </motion.div>
        
        {/* Soft edge fade for theater vignetting */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />

      </div>
    </div>
  )
}
