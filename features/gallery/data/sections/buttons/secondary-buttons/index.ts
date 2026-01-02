
import type { Collection } from "../../../../types"
import { outlineButton } from "./outline-button"
import { ghostButton } from "./ghost-button"
import { linkButton } from "./link-button"
import { subtleButton } from "./subtle-button"

export const secondaryButtons: Collection = {
  id: "secondary-buttons",
  title: "Secondary Buttons",
  description: "Outline and ghost style buttons for secondary actions",
  variants: [
    outlineButton,
    ghostButton,
    linkButton,
    subtleButton,
  ],
}
