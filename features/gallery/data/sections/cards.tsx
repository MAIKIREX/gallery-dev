import type { Section } from "../../types"
import { profileCards } from "./cards/profile-cards"
import { pricingCards } from "./cards/pricing-cards"
import { bookingCards } from "./cards/booking-cards"
import { travelCards } from "./cards/travel-cards"

export const cardsSection: Section = {
  id: "cards",
  name: "Cards",
  collections: [
    profileCards,
    pricingCards,
    bookingCards,
    travelCards,
  ],
}