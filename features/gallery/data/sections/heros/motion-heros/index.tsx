import type { Collection } from "../../../../types"
import { multiServiceHeroLeftRailWipe } from "./multi-service-carousel-hero"
import { multiServiceHero } from "./multi-service-hero"
import { spotlightMaskShuffleHero } from "./spotlight-mask-shuffle-hero"

export const motionHeros: Collection = {
  id: 'aurora-heros',
  title: 'Aurora / Spotlight Heros',
  description: 'Modern heroes with animated gradients, spotlight glow and staggered motion.',
  variants: [spotlightMaskShuffleHero, multiServiceHero, multiServiceHeroLeftRailWipe],
}