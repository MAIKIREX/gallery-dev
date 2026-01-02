
import type { Variant } from "../../../../types"
import { BadgeCheck, User, Eye } from "lucide-react";

export const profileSophieGlassDark: Variant = {
  id: "profile-sophie-glass-dark",
  title: "Profile Card (Glass Dark Overlay)",
  description: "Foto completa + panel glass oscuro y texto blanco",
  tags: ["profile", "glass", "dark", "overlay", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.5)]">
        <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Sophie Bennett"
            className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* stronger dark tint like reference */}
          <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/30" />

          {/* GLASS panel bottom (dark) */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-[22px] bg-zinc-950/35 p-4 backdrop-blur-xl ring-1 ring-white/15">
              <div className="flex items-center gap-2">
                <h3 className="text-[22px] font-semibold tracking-tight text-white">
                  Sophie Bennett
                </h3>

                {/* verified gray */}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/18 text-white ring-1 ring-white/15">
                  <BadgeCheck className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-white/80">
                A Product Designer focused on intuitive user experiences.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" /> 312
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="h-4 w-4" /> 48
                  </span>
                </div>

                <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] transition hover:bg-white active:scale-[0.99]">
                  Follow <span className="ml-1 font-bold">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* subtle inner border like reference */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
        </div>
      </div>
    );
  })(),
  code: `import { BadgeCheck, User, Eye } from "lucide-react";

<div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.5)]">
  <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
      alt="Sophie Bennett"
      className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />

    <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/30" />

    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="rounded-[22px] bg-zinc-950/35 p-4 backdrop-blur-xl ring-1 ring-white/15">
        <div className="flex items-center gap-2">
          <h3 className="text-[22px] font-semibold tracking-tight text-white">Sophie Bennett</h3>

          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/18 text-white ring-1 ring-white/15">
            <BadgeCheck className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-1 text-sm leading-relaxed text-white/80">
          A Product Designer focused on intuitive user experiences.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> 312</span>
            <span className="inline-flex items-center gap-1.5"><Eye className="h-4 w-4" /> 48</span>
          </div>

          <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] transition hover:bg-white active:scale-[0.99]">
            Follow <span className="ml-1 font-bold">+</span>
          </button>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
  </div>
</div>`,
}
