import type { Section } from "../../types"
import { landingHeros } from "./heros/landing-heros"
import { motionHeros } from "./heros/motion-heros"

export const herosSection: Section = {
  id: "heros",
  name: "Heros",
  collections: [
    landingHeros,
    motionHeros,
  ],
}