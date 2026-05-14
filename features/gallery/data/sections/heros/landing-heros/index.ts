
import type { Collection } from "../../../../types"
import { synqriDarkHero } from "./synqri-dark-hero"
import { dataEnrichSplitHero } from "./data-enrich-split-hero"
import { startupHeroNavbar } from "./startup-hero-navbar"
import { startupHeroBlobNavbar } from "./startup-hero-blob-navbar"
import { musiklyHeroDark } from "./musikly-hero-dark"
import { agencyHeroXander } from "./agency-hero-xander"
import { marketingHeroCollage } from "./marketing-hero-collage"
import { soltUiuxBrandHero } from "./solt-uiux-brand-hero"

export const landingHeros: Collection = {
  id: "landing-heros",
  title: "Landing Heros",
  description: "Hero sections para páginas de inicio y landing pages",
  variants: [
    synqriDarkHero,
    dataEnrichSplitHero,
    startupHeroNavbar,
    startupHeroBlobNavbar,
    musiklyHeroDark,
    agencyHeroXander,
    marketingHeroCollage,
    soltUiuxBrandHero,
  ],
}
