
import type { Collection } from "../../../../types"
import { pillNavbar } from "./pill-navbar"
import { footwearNavbar } from "./footwear-navbar"
import { l2ToitureNavbar } from "./l2-toiture-navbar"
import { hepVintageNavbar } from "./hep-vintage-navbar"
import { belleOaksNavbar } from "./belle-oaks-navbar"

export const standarNavbars: Collection = {
  id: "standar-navbars",
  title: "Standar Navbars",
  description:
    "Navbar con mega menús en desktop y overlay con acordeón en móvil",
  variants: [
    pillNavbar,
    footwearNavbar,
    l2ToitureNavbar,
    hepVintageNavbar,
    belleOaksNavbar,
  ],
}
