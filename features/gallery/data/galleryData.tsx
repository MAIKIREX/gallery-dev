import type { GalleryData } from "../types"
import { buttonsSection } from "./sections/buttons"
import { cardsSection } from "./sections/cards"
import { carouselsSection } from "./sections/carousels"
import { herosSection } from "./sections/heros"
import { loginsSection } from "./sections/logins"
import { navbarsSection } from "./sections/navbars"
import { textsSection } from "./sections/texts"
import { gsapSection } from "./sections/gsap"

export const galleryData: GalleryData = {
  sections: [cardsSection, navbarsSection, buttonsSection, herosSection, loginsSection, carouselsSection, textsSection, gsapSection],
}
