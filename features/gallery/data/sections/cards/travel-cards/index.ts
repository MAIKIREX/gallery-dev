
import type { Collection } from "../../../../types"
import { rioStacked } from "./rio-stacked"

export const travelCards: Collection = {
  id: "travel-cards",
  title: "Travel Cards",
  description: "Cards con imagen, overlay, stacked effect y CTA pill",
  variants: [
    rioStacked,
  ],
}
