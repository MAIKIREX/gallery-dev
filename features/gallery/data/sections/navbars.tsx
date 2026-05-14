import type { Section } from "../../types"
import { standarNavbars } from "./navbars/standar-navbars"
import { megaMenu } from "./navbars/mega-menu"
import { otherNavbars } from "./navbars/other-navbars"

export const navbarsSection: Section = {
  id: "navbars",
  name: "Navbars",
  collections: [
    standarNavbars,
    megaMenu,
    otherNavbars,
  ],
}