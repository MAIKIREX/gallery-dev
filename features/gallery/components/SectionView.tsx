"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Shell from "@/components/layout/Shell"
import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"
import SearchInput from "@/components/ui/SearchInput"
import TagChips from "@/components/ui/TagChips"
import CollectionList from "./CollectionList"
import { galleryData } from "../data/galleryData"

interface SectionViewProps {
  sectionId: string
}

export default function SectionView({ sectionId }: SectionViewProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const section = galleryData.sections.find((s) => s.id === sectionId)

  if (!section) {
    return <div className="p-8">Section not found</div>
  }

  // Get all unique tags from collections
  const allTags = Array.from(
    new Set(section.collections.flatMap((collection) => collection.variants.flatMap((variant) => variant.tags))),
  )

  // Filter collections based on search and tags
  const filteredCollections = section.collections.filter((collection) => {
    const matchesSearch =
      searchQuery === "" ||
      collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags =
      selectedTags.length === 0 ||
      collection.variants.some((variant) => selectedTags.some((tag) => variant.tags.includes(tag)))

    return matchesSearch && matchesTags
  })

  return (
    <Shell>
      <div className="flex">
        <Sidebar
          sections={galleryData.sections.map((s) => ({ id: s.id, name: s.name }))}
          activeSection={sectionId}
          onSectionChange={(id) => router.push(`/gallery/${id}`)}
        />
        <main className="flex-1">
          <Topbar title={section.name} subtitle={`Explore ${section.collections.length} collections`} />
          <div className="border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search collections..." />
            <div className="mt-4">
              <TagChips tags={allTags} selectedTags={selectedTags} onTagToggle={setSelectedTags} />
            </div>
          </div>
          <div className="p-8">
            {filteredCollections.length > 0 ? (
              <CollectionList collections={filteredCollections} sectionId={sectionId} />
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">No collections found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </Shell>
  )
}
