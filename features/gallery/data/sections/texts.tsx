import type { Section } from "../../types"
import { textAnimated } from "./texts/text-animated"
import { textSnippets } from "./texts/text-snippets"

export const textsSection: Section = {
  id: "texts",
  name: "Textos",
  collections: [textSnippets, textAnimated],
}
