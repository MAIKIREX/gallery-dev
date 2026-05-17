"use client"

import { useRef } from "react"
import Link from "next/link"
import type { Collection } from "../types"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CollectionListProps {
  collections: Collection[]
  sectionId: string
}

export default function CollectionList({ collections, sectionId }: CollectionListProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!container.current) return

    const items = gsap.utils.toArray<HTMLElement>('.gallery-item')
    
    // Cinematic scroll reveal for gallery items
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { 
          y: 80, 
          opacity: 0,
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: i % 2 === 0 ? 0 : 0.1 // subtle stagger for asymmetric rows
        }
      )
    })
  }, { scope: container })

  return (
    <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 px-12 pb-32">
      {collections.map((collection, index) => {
        // Asymmetric offset for odd items to create the Art Gallery feel
        const isOffset = index % 2 !== 0
        
        return (
          <Link
            key={collection.id}
            href={`/gallery/${sectionId}/${collection.id}`}
            className={`gallery-item group block outline-none ${isOffset ? 'md:mt-32' : ''}`}
          >
            {/* Visual Placeholder for Gallery Art */}
            <div className="aspect-[4/3] w-full mb-8 overflow-hidden rounded-[2.5rem] bg-zinc-200/50 dark:bg-zinc-800/30 relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.98]">
              {/* Added a subtle inner light reflection to keep it looking premium */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-black/5 dark:border-white/5 pointer-events-none" />
            </div>
            
            <div className="flex items-baseline justify-between mb-3 px-2">
              <h3 className="text-2xl font-medium tracking-tight text-zinc-900 transition-colors dark:text-zinc-50 group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
                {collection.title}
              </h3>
              <span className="text-sm font-mono text-zinc-400 dark:text-zinc-500">
                {String(collection.variants.length).padStart(2, '0')} VARIANTS
              </span>
            </div>
            
            <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-[45ch] leading-relaxed px-2">
              {collection.description}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
