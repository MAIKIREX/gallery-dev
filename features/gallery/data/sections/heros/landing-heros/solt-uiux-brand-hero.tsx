import type { Variant } from "../../../../types"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function SoltDesignerHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-[#d9d7cf] text-neutral-900 shadow-2xl">
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)]">
          <div className="min-w-0 max-w-xl lg:pr-6">
            <p className="font-serif text-2xl text-neutral-800 sm:text-3xl">Hey. I'm Solt,</p>

            <div className="mt-3 leading-[0.92] tracking-tight">
              <div className="text-5xl font-black uppercase sm:text-6xl">A UI/UX</div>

              <div className="mt-2 flex items-end gap-3">
                <div className="font-serif text-5xl italic sm:text-6xl">&amp; Brand</div>
              </div>

              <div className="mt-2 text-6xl font-black uppercase sm:text-7xl lg:text-6xl xl:text-7xl">
                DESIGNER
              </div>
            </div>

            <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-neutral-700">
              Transforming ideas into stunning visuals— UI/UX and brand design that captivates,
              engages, and delivers results.
            </p>

            <div className="mt-7">
              <Button className="h-12 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white hover:bg-neutral-800">
                <span className="mr-3">CONTACT ME</span>
                <span className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[380px] -translate-x-1/2 rounded-[999px] bg-white/40" />

              <div className="relative mx-auto w-[340px] overflow-hidden rounded-[999px] bg-neutral-200 shadow-lg">
                <img
                  alt="portrait"
                  className="h-[560px] w-full object-cover object-center"
                  src="/cards/rio.png"
                />
              </div>

              <div className="pointer-events-none absolute -bottom-5 left-1/2 h-12 w-[70%] -translate-x-1/2 rounded-full bg-neutral-900/12 blur-xl" />
            </div>
          </div>

          <div className="min-w-0 flex justify-start lg:justify-end">
            <div className="w-full max-w-xs space-y-10 text-right">
              <div>
                <div className="text-3xl font-extrabold">15+</div>
                <div className="mt-1 font-serif text-sm text-neutral-700">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">280+</div>
                <div className="mt-1 font-serif text-sm text-neutral-700">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">*99%</div>
                <div className="mt-1 font-serif text-sm text-neutral-700">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">50</div>
                <div className="mt-1 font-serif text-sm text-neutral-700">Clients worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900/15 px-6 py-6 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {[ { title: "USER-CENTERED DESIGN", desc: "Intuitive and engaging experiences tailored for your audience." }, { title: "BRAND IDENTITY & STRATEGY", desc: "Strong visual storytelling that makes your brand unforgettable." }, { title: "RESPONSIVE & MODERN UI", desc: "Pixel-perfect designs optimized for all devices." }, { title: "SEAMLESS PROTOTYPING", desc: "Interactive mockups to bring ideas to life before development." }, ].map((item, idx) => (
            <div key={item.title} className={`px-0 lg:px-6 ${idx !== 0 ? "lg:border-l lg:border-neutral-900/15" : ""}`}>
              <div className="text-xs font-extrabold tracking-wide text-neutral-900">{item.title}</div>
              <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const soltUiuxBrandHero: Variant = {
  id: "solt-uiux-brand-hero",
  title: "Solt UI/UX Brand Hero",
  description: "Hero personal para diseñadora UI/UX con layout editorial.",
  tags: ["hero", "portfolio", "designer", "uiux", "brand", "light"],
  preview: <SoltDesignerHero />,
  code: ``,
}
