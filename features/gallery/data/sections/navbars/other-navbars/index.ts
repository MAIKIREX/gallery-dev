
import type { Collection } from "../../../../types"
import { animatedNavbar } from "./animated-navbar"
import { spotlightNavbar } from "./spotlight-navbar"
import { scrollTransformNavbar } from "./scroll-transform-navbar"
import { jagerhofNavbar } from "./Jager-hof-navbar"

export const otherNavbars: Collection = {
  id: "other-navbars",
  title: "Other Navbars",
  description:
    "Navbar que se transforma con el scroll (Framer Motion)",
  variants: [
    animatedNavbar,
    spotlightNavbar,
    scrollTransformNavbar,
    jagerhofNavbar
  ],
}
