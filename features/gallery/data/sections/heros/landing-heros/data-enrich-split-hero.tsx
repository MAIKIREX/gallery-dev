
import type { Variant } from "../../../../types"

export const dataEnrichSplitHero: Variant = {
  id: "data-enrich-split-hero",
  title: "Data Enrich Split Hero",
  description: "Hero con panel oscuro + imagen a la derecha y corte diagonal (responsive)",
  tags: ["hero", "landing", "split", "image", "diagonal", "responsive"],
  preview: (
  <div className="w-full max-w-6xl">
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* RIGHT IMAGE (en mobile va arriba) */}
        <div className="relative order-1 min-h-[260px] sm:min-h-[340px] md:order-2 md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
            }}
          />
          {/* overlay suave */}
          <div className="absolute inset-0 bg-black/10 md:bg-black/0" />
          {/* degradado para “fundir” con el panel izquierdo */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/5 to-[#071226]/60 md:to-[#071226]/30" />
        </div>

        {/* LEFT */}
        <div
          className="
            relative z-10 order-2 bg-[#071226] px-6 py-8 sm:px-10 sm:py-10 md:order-1 md:px-12 md:py-12
            md:-mr-16 md:pr-20
            md:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]
          "
        >
          {/* Navbar */}
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600" />
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Marketplace</a>
              <a href="#" className="hover:text-white">Company</a>
            </nav>

            <a href="#" className="text-sm text-white/70 hover:text-white">
              Log in
            </a>
          </header>

          {/* Content */}
          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <span className="cursor-pointer text-indigo-300 hover:text-indigo-200">
                Read more →
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Data to enrich
              <br />
              your business
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
),
code: `export function DataEnrichSplitHero() {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* RIGHT IMAGE (mobile arriba) */}
        <div className="relative order-1 min-h-[260px] sm:min-h-[340px] md:order-2 md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-black/10 md:bg-black/0" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/5 to-[#071226]/60 md:to-[#071226]/30" />
        </div>

        {/* LEFT */}
        <div
          className="
            relative z-10 order-2 bg-[#071226] px-6 py-8 sm:px-10 sm:py-10 md:order-1 md:px-12 md:py-12
            md:-mr-16 md:pr-20
            md:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]
          "
        >
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600" />
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Marketplace</a>
              <a href="#" className="hover:text-white">Company</a>
            </nav>

            <a href="#" className="text-sm text-white/70 hover:text-white">
              Log in
            </a>
          </header>

          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <span className="cursor-pointer text-indigo-300 hover:text-indigo-200">
                Read more →
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Data to enrich<br />your business
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}`,
}
