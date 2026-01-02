
import type { Variant } from "../../../../types"

export const marketingHeroCollage: Variant = {
  id: "marketing-hero-collage",
  title: "Marketing Hero + Photo Collage",
  description: "Hero oscuro con franjas verticales y collage de fotos a la derecha (responsive)",
  tags: ["hero", "marketing", "dark", "stripes", "collage", "responsive"],
  preview: (
    <div className="w-full max-w-6xl">
      <section className="relative overflow-hidden rounded-2xl border bg-[#0b1430] text-white shadow-2xl">
        {/* stripes */}
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_60px)]" />
        {/* glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-14">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-blue-300">Marketing</span>
              <br />
              Solutions that help
              <br />
              businesses grow
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et ipsum vel, mattis
              neque. Tristique faucibus convallis semper condimentum sit nec.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="h-12 rounded-xl bg-blue-500 px-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                CONTACT
              </button>
              <button className="h-12 rounded-xl bg-white/90 px-10 text-sm font-semibold text-gray-900 hover:bg-white">
                SERVICES
              </button>
            </div>
          </div>

          {/* RIGHT collage */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-2 gap-6">
              {/* top-left: pill vertical */}
              <div className="relative overflow-hidden rounded-[28px]">
                <div className="absolute inset-0 bg-yellow-400/90" />
                <img
                  alt="portrait 1"
                  className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                />
              </div>

              {/* top-right: circle */}
              <div className="relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-yellow-300/80" />
                <img
                  alt="portrait 2"
                  className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                />
              </div>

              {/* bottom-left: circle */}
              <div className="relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-sky-400/70" />
                <img
                  alt="portrait 3"
                  className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                  src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=800&q=80"
                />
              </div>

              {/* bottom-right: pill vertical */}
              <div className="relative overflow-hidden rounded-[28px]">
                <div className="absolute inset-0 bg-white/90" />
                <img
                  alt="portrait 4"
                  className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>

            {/* soft border like mockup */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </section>
    </div>
  ),
  code: `export function MarketingHeroCollage() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-[#0b1430] text-white shadow-2xl">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_14px,transparent_14px,transparent_60px)]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-14">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-blue-300">Marketing</span><br />
            Solutions that help<br />
            businesses grow
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et ipsum vel, mattis
            neque. Tristique faucibus convallis semper condimentum sit nec.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="h-12 rounded-xl bg-blue-500 px-10 text-sm font-semibold text-white hover:bg-blue-600">
              CONTACT
            </button>
            <button className="h-12 rounded-xl bg-white/90 px-10 text-sm font-semibold text-gray-900 hover:bg-white">
              SERVICES
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 bg-yellow-400/90" />
              <img
                alt="portrait 1"
                className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              />
            </div>

            <div className="relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-yellow-300/80" />
              <img
                alt="portrait 2"
                className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              />
            </div>

            <div className="relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-sky-400/70" />
              <img
                alt="portrait 3"
                className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=800&q=80"
              />
            </div>

            <div className="relative overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 bg-white/90" />
              <img
                alt="portrait 4"
                className="relative h-[220px] w-full object-cover sm:h-[240px] lg:h-[260px]"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
`,
}
