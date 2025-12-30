"use client"

import { useRouter } from "next/navigation"
import Shell from "@/components/layout/Shell"
import Sidebar from "@/components/layout/Sidebar"
import Breadcrumbs from "./Breadcrumbs"
import VariantBlock from "./VariantBlock"
import { galleryData } from "../data/galleryData"

interface CollectionViewProps {
  sectionId: string
  collectionId: string
}

export default function CollectionView({ sectionId, collectionId }: CollectionViewProps) {
  const router = useRouter()

  const section = galleryData.sections.find((s) => s.id === sectionId)
  const collection = section?.collections.find((c) => c.id === collectionId)

  if (!section || !collection) {
    return <div className="p-8">Collection not found</div>
  }

  const breadcrumbs = [
    { label: "Gallery", href: "/gallery" },
    { label: section.name, href: `/gallery/${sectionId}` },
    { label: collection.title, href: `/gallery/${sectionId}/${collectionId}` },
  ]

  return (
    <Shell>
      <div className="flex">
        <Sidebar
          sections={galleryData.sections.map((s) => ({ id: s.id, name: s.name }))}
          activeSection={sectionId}
          onSectionChange={(id) => router.push(`/gallery/${id}`)}
        />
        <main className="flex-1 min-w-0">
          <div className="border-b border-gray-200 bg-white px-8 py-6 dark:border-gray-700 dark:bg-gray-800">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{collection.title}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{collection.description}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {collection.variants.length} {collection.variants.length === 1 ? "variant" : "variants"}
            </p>
          </div>
          <div className="space-y-12 p-8">
            {collection.variants.map((variant) => (
              <VariantBlock key={variant.id} variant={variant} />
            ))}
          </div>
        </main>
      </div>
    </Shell>
  )
}
