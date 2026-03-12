import type { Collection } from "../../../../types"
import { editorialLede } from "./editorial-lede"
import { gradientHeadline } from "./gradient-headline"
import { motionHighlight } from "./motion-highlight"

export const textSnippets: Collection = {
  id: "text-snippets",
  title: "Textos UI",
  description: "Fragmentos listos para hero, titulares y microcopy",
  variants: [editorialLede, gradientHeadline, motionHighlight],
}
