import type { ReactNode } from "react"

export interface Variant {
  id: string
  title: string
  description: string
  tags: string[]
  preview: ReactNode
  code: string
}

export interface Collection {
  id: string
  title: string
  description: string
  variants: Variant[]
}

export interface Section {
  id: string
  name: string
  collections: Collection[]
}

export interface GalleryData {
  sections: Section[]
}
