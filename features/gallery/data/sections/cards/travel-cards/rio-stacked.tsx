
import type { Variant } from "../../../../types"
import { ChevronRight, Heart } from "lucide-react"

export const rioStacked: Variant = {
  id: "rio-stacked",
  title: "Stacked Travel Card (Rio)",
  description: "Tarjeta apilada con CTA y rating",
  tags: ["travel", "stacked", "image", "cta", "hover"],
  preview: (
    <div className="relative w-[320px]">
      {/* Back cards (stack) */}
      <div className="absolute -right-6 top-4 h-[420px] w-full rotate-[6deg] rounded-[28px] bg-amber-200/80 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-[8deg]" />
      <div className="absolute -left-4 top-10 h-[420px] w-full -rotate-[5deg] rounded-[28px] bg-emerald-200/80 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-rotate-[7deg]" />

      {/* Front card */}
      <div className="group relative h-[440px] w-full overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.55)]">
        {/* Image */}
        <img
          src="/cards/rio.png"
          alt="Rio de Janeiro"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        {/* Dark overlay (bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Heart button */}
        <button
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15"
          aria-label="Add to favorites"
        >
          {/* simple heart svg */}
          <Heart className="text-white"/>
        </button>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-sm text-white/80">Brazil</p>

          <h3 className="mt-0.5 text-2xl font-semibold tracking-tight text-white">
            Rio de Janeiro
          </h3>

          <div className="mt-2 flex items-center gap-3 text-xs text-white/75">
            <div className="flex items-center gap-1.5">
              <span className="text-white">★</span>
              <span className="font-semibold text-white">5.0</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>143 reviews</span>
          </div>

          {/* CTA bar */}
          <div className="mt-4 rounded-full bg-white/12 p-2 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/16">
            <div className="flex items-center justify-between">
              <button className="flex-1 rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition hover:text-white">
                See more
              </button>

              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-zinc-900 shadow-md transition active:scale-[0.98]"
                aria-label="Open"
              >
                <ChevronRight className="" />
              </button>
            </div>
          </div>
        </div>

        {/* subtle border */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
      </div>
    </div>
  ),
  code: `// Coloca la imagen en: public/cards/rio.jpg
<div className="relative w-[320px]">
  <div className="absolute -right-6 top-4 h-[420px] w-full rotate-[6deg] rounded-[28px] bg-amber-200/80 shadow-xl ring-1 ring-black/5" />
  <div className="absolute -left-4 top-10 h-[420px] w-full -rotate-[5deg] rounded-[28px] bg-emerald-200/80 shadow-xl ring-1 ring-black/5" />

  <div className="group relative h-[440px] w-full overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.55)]">
    <img
      src="/cards/rio.jpg"
      alt="Rio de Janeiro"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 transition-opacity duration-300 group-hover:opacity-95" />

    <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15" aria-label="Add to favorites">
      <Heart className="text-white"/>
    </button>

    <div className="absolute inset-x-0 bottom-0 p-5">
      <p className="text-sm text-white/80">Brazil</p>
      <h3 className="mt-0.5 text-2xl font-semibold tracking-tight text-white">Rio de Janeiro</h3>

      <div className="mt-2 flex items-center gap-3 text-xs text-white/75">
        <div className="flex items-center gap-1.5">
          <span className="text-white">★</span>
          <span className="font-semibold text-white">5.0</span>
        </div>
        <span className="h-1 w-1 rounded-full bg-white/35" />
        <span>143 reviews</span>
      </div>

      <div className="mt-4 rounded-full bg-white/12 p-2 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/16">
        <div className="flex items-center justify-between">
          <button className="flex-1 rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition hover:text-white">
            See more
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-zinc-900 shadow-md transition active:scale-[0.98]" aria-label="Open">
            <ChevronRight className="" />
          </button>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
  </div>
</div>`,
}
