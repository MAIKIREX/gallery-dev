import type { Section } from "../../types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const gsapSection: Section = {
  id: "gsap",
  name: "GSAP Animations",
  collections: [
    {
      id: "cinematic-parallax",
      title: "Cinematic Parallax",
      description: "A scroll-linked cinematic animation using GSAP ScrollTrigger.",
      variants: [
        {
          id: "default",
          title: "Default Parallax",
          description: "Pinned parallax effect with staggered animations.",
          tags: ["gsap", "parallax", "scrolltrigger"],
          preview: (
            <div className="flex flex-col items-center justify-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Full Screen Animation</h3>
              <p className="text-slate-400 text-center max-w-sm mb-6 text-sm">
                GSAP ScrollTrigger animations require the native window scrollbar to function properly and calculate viewport pinning.
              </p>
              <Link
                href="/preview/gsap"
                target="_blank"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Open Demo in New Tab
                <ExternalLink size={16} />
              </Link>
            </div>
          ),
          code: `import CinematicParallaxSection from "@/components/gsap/animated-card-section";\n\n<CinematicParallaxSection />`,
        },
      ],
    },
    {
      id: "horizontal-scroll",
      title: "Horizontal Scroll",
      description: "A pinned vertical scroll that translates into a cinematic horizontal journey.",
      variants: [
        {
          id: "horizontal-gallery",
          title: "Cinematic Horizontal",
          description: "Transforms vertical scroll into horizontal movement with inner parallax effects.",
          tags: ["gsap", "scrolltrigger", "horizontal", "parallax"],
          preview: (
            <div className="flex flex-col items-center justify-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Full Screen Animation</h3>
              <p className="text-slate-400 text-center max-w-sm mb-6 text-sm">
                Horizontal ScrollTrigger animations require full viewport width and native scrollbars to calculate containerAnimation boundaries correctly.
              </p>
              <Link
                href="/preview/gsap-horizontal"
                target="_blank"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Open Demo in New Tab
                <ExternalLink size={16} />
              </Link>
            </div>
          ),
          code: `import HorizontalScrollSection from "@/components/gsap/horizontal-scroll";\n\n<HorizontalScrollSection />`,
        },
      ],
    },
    {
      id: "stacking-cards",
      title: "Stacking Cards",
      description: "Cards that stick to the top and stack on each other as you scroll down.",
      variants: [
        {
          id: "stacking-3d",
          title: "3D Stacking Cards",
          description: "Dynamic layered sticky effect using ScrollTrigger pin sequences.",
          tags: ["gsap", "sticky", "cards", "scrolltrigger"],
          preview: (
            <div className="flex flex-col items-center justify-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Full Screen Animation</h3>
              <p className="text-slate-400 text-center max-w-sm mb-6 text-sm">
                Sequential pinning requires absolute viewport boundaries to correctly stack the DOM elements without visual clipping.
              </p>
              <Link
                href="/preview/gsap-stacking"
                target="_blank"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Open Demo in New Tab
                <ExternalLink size={16} />
              </Link>
            </div>
          ),
          code: `import StackingCardsSection from "@/components/gsap/stacking-cards";\n\n<StackingCardsSection />`,
        },
      ],
    },
    {
      id: "text-reveal",
      title: "Text Mask Zoom",
      description: "Giant typography that scales up infinitely to reveal an immersive scene.",
      variants: [
        {
          id: "text-scale-zoom",
          title: "Cinematic Text Zoom",
          description: "A huge text mask that scales up on scroll to transition into full video/image.",
          tags: ["gsap", "text", "zoom", "mask", "scrolltrigger"],
          preview: (
            <div className="flex flex-col items-center justify-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-16 h-16 bg-pink-500/20 text-pink-400 rounded-full flex items-center justify-center mb-4">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Full Screen Animation</h3>
              <p className="text-slate-400 text-center max-w-sm mb-6 text-sm">
                Infinite scaling transforms need pure layout freedom to avoid breaking out of parent overflow containers.
              </p>
              <Link
                href="/preview/gsap-reveal"
                target="_blank"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Open Demo in New Tab
                <ExternalLink size={16} />
              </Link>
            </div>
          ),
          code: `import TextRevealSection from "@/components/gsap/text-reveal";\n\n<TextRevealSection />`,
        },
      ],
    }
  ],
}
