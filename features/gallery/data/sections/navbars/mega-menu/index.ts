
import type { Collection } from "../../../../types"
import { megaMenuNavbar } from "./mega-menu-navbar"

export const megaMenu: Collection = {
  id: "mega-menu",
  title: "Mega Menu",
  description:
    "Navbar con mega menús en desktop y overlay con acordeón en móvil",
  variants: [
    megaMenuNavbar,
  ],
}
