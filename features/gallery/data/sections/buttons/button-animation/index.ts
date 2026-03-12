import type { Collection } from "../../../../types"
import { animatedHamburgerButton } from "./animatedHamburgerButton"
import { dashedMarchingAntsButton } from "./dashedMarchingAntsButton"
import { dotArrowPillButton } from "./dotArrowPillButton"
import { liftShadowButton } from "./lift-shadow-button"
import { marqueeMotionButton } from "./marqueeMotionButton"
import { pingRingButton } from "./ping-ring-button"
import { swapTextArrowButton } from "./swapTextArrowButton"
import { tilted3DFlipButton } from "./tilted3DFlipButton"

export const buttonAnimation: Collection = {
  id: "button-animation",
  title: "Button Animation",
  description: "Animated button treatments for feedback and delight",
  variants: [
    liftShadowButton,
    pingRingButton,
    swapTextArrowButton,
    tilted3DFlipButton,
    dotArrowPillButton,
    dashedMarchingAntsButton,
    marqueeMotionButton,
    animatedHamburgerButton
  ],
}
