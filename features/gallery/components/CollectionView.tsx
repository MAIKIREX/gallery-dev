"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import Shell from "@/components/layout/Shell"
import Sidebar from "@/components/layout/Sidebar"
import Breadcrumbs from "./Breadcrumbs"
import VariantBlock from "./VariantBlock"
import { galleryData } from "../data/galleryData"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CollectionViewProps {
  sectionId: string
  collectionId: string
}

export default function CollectionView({ sectionId, collectionId }: CollectionViewProps) {
  const router = useRouter()
  const container = useRef<HTMLDivElement>(null)

  const section = galleryData.sections.find((s) => s.id === sectionId)
  const collection = section?.collections.find((c) => c.id === collectionId)

  useGSAP(() => {
    if (!container.current) return
    const variants = gsap.utils.toArray<HTMLElement>('.variant-item')
    
    variants.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, { scope: container })

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
      <div className="flex" ref={container}>
        <Sidebar
          sections={galleryData.sections.map((s) => ({ id: s.id, name: s.name }))}
          activeSection={sectionId}
          onSectionChange={(id) => router.push(`/gallery/${id}`)}
        />
        <main className="flex-1 min-w-0 pb-32">
          <div className="px-12 pt-16 pb-12">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="mt-8 text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">{collection.title}</h1>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 max-w-[65ch] leading-relaxed">{collection.description}</p>
            <p className="mt-6 text-sm font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
              {collection.variants.length} {collection.variants.length === 1 ? "variant" : "variants"}
            </p>
          </div>
          <div className="space-y-32 px-12">
            {collection.variants.map((variant) => (
              <div key={variant.id} className="variant-item">
                 <VariantBlock variant={variant} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Shell>
  )
}
