
import type { Collection } from "../../../../types"
import { solidButton } from "./solid-button"
import { gradientButton } from "./gradient-button"
import { largeButton } from "./large-button"
import { shadowButton } from "./shadow-button"

export const primaryButtons: Collection = {
  id: "primary-buttons",
  title: "Primary Buttons",
  description: "Main action buttons with solid backgrounds",
  variants: [
    solidButton,
    gradientButton,
    largeButton,
    shadowButton,
  ],
}
