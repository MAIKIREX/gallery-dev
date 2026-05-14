import type { Collection } from "../../../../types"
import { textClipReveal } from "./text-clip-reveal"
import { textFadeSlide } from "./text-fade-slide"
import { textMagneticHover } from "./text-magnetic-hover"
import { textScrollReveal } from "./text-scroll-reveal"
import { textShimmerLoop } from "./text-shimmer-loop"
import { textStaggerLetters } from "./text-stagger-letters"
import { textStaggerWords } from "./text-stagger-words"
import { textSwapRotate } from "./text-swap-rotate"
import { textUnderlineDraw } from "./text-underline-draw"

export const textAnimated: Collection = {
  id: "text-animated",
  title: "Textos Animados",
  description: "Ejemplos con Framer Motion para titulares y microinteracciones",
  variants: [
    textFadeSlide,
    textClipReveal,
    textStaggerLetters,
    textStaggerWords,
    textUnderlineDraw,    
    textMagneticHover,
    textShimmerLoop,
    textScrollReveal,
    textSwapRotate,
  ],
}
