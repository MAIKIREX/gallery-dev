"use client"

import { useState } from "react"
import Shell from "@/components/layout/Shell"
import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"
import CollectionList from "./CollectionList"
import { galleryData } from "../data/galleryData"

export default function BrowseDashboard() {
  const [activeSection, setActiveSection] = useState(galleryData.sections[0].id)

  const currentSection = galleryData.sections.find((s) => s.id === activeSection)

  return (
    <Shell>
      <div className="flex">
        <Sidebar
          sections={galleryData.sections.map((s) => ({ id: s.id, name: s.name }))}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 min-w-0">
          <Topbar title="UI Components" subtitle="Browse our collection of beautiful Tailwind CSS components" />
          <div className="p-8">
            {currentSection && (
              <CollectionList collections={currentSection.collections} sectionId={currentSection.id} />
            )}
          </div>
        </main>
      </div>
    </Shell>
  )
}
