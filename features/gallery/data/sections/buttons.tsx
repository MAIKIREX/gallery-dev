import type { Section } from "../../types"
import { primaryButtons } from "./buttons/primary-buttons"
import { secondaryButtons } from "./buttons/secondary-buttons"

export const buttonsSection: Section = {
  id: "buttons",
  name: "Buttons",
  collections: [
    primaryButtons,
    secondaryButtons,
  ],
}