import type { GalleryData } from "../types"
import { buttonsSection } from "./sections/buttons"
import { cardsSection } from "./sections/cards"
import { carouselsSection } from "./sections/carousels"
import { herosSection } from "./sections/heros"
import { loginsSection } from "./sections/logins"
import { navbarsSection } from "./sections/navbars"

export const galleryData: GalleryData = {
  sections: [cardsSection, navbarsSection, buttonsSection, herosSection, loginsSection, carouselsSection],
}
