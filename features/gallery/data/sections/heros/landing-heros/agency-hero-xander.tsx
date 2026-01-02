
import type { Variant } from "../../../../types"
import { Sparkles, PenTool, Palette } from "lucide-react";

export const agencyHeroXander: Variant = {
  id: "agency-hero-xander",
  title: "Agency Hero (Xander) — Floating Tags",
  description: "Hero tipo agencia creativa con badges flotantes posicionados y métricas (responsive)",
  tags: ["hero", "landing", "agency", "light", "badges", "metrics", "responsive"],
  preview: (
    <div className="w-full max-w-6xl">
      <div className="rounded-2xl bg-gradient-to-b from-sky-300/80 to-sky-400/70 p-6 sm:p-8">
        <section className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-white/80 via-white/70 to-indigo-50/60 shadow-2xl backdrop-blur">
          {/* decor */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full bg-sky-300/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.14)_1px,transparent_0)] [background-size:42px_42px]" />

          <div className="relative px-6 py-6 sm:px-10 sm:py-8">
            {/* NAVBAR */}
            <header className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-gray-900">
                Xander<span className="text-gray-400">.</span>
              </div>

              <nav className="hidden items-center gap-10 text-xs font-medium text-gray-600 md:flex">
                <a className="hover:text-gray-900" href="#">About</a>
                <a className="hover:text-gray-900" href="#">Service</a>
                <a className="hover:text-gray-900" href="#">Works</a>
                <a className="hover:text-gray-900" href="#">Products</a>
                <a className="hover:text-gray-900" href="#">Contact</a>
              </nav>

              <button className="rounded-full bg-indigo-400 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500">
                Sign up
              </button>
            </header>

            {/* HERO */}
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
                  Let’s Work
                  <br />
                  Together to Create
                  <br />
                  Wonders with Us
                </h1>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                  A visionary creative, crafting captivating wonders through art and design.
                  Adept at turning imagination into extraordinary reality.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button className="rounded-full bg-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Let’s Talk
                  </button>
                  <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                    Start Project
                  </button>
                </div>

                {/* metrics */}
                <div className="mt-10 grid max-w-md grid-cols-3 gap-8">
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">15+</div>
                    <div className="mt-1 text-xs text-gray-500">years<br />experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">26K</div>
                    <div className="mt-1 text-xs text-gray-500">projects<br />success</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">98%</div>
                    <div className="mt-1 text-xs text-gray-500">satisfied<br />rate</div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative mx-auto w-full max-w-lg">
                {/* imagen */}
                <div className="relative overflow-hidden rounded-2xl bg-white/40">
                  <img
                    alt="person"
                    className="h-[420px] w-full object-cover object-center"
                    // ✅ recomendado (local):
                    // src="/heros/xander.jpg"
                    // ✅ alternativa remota:
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                  />
                </div>

                {/* badges flotantes (posiciones distintas) */}
                <div className="pointer-events-none absolute inset-0 hidden sm:block">
                  {/* 1) arriba (cerca de cabeza/hombro) */}
                  <div className="absolute right-10 top-10">
                    <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <PenTool className="h-4 w-4" />
                      </span>
                      <div className="text-sm font-semibold text-gray-900">Illustration</div>
                    </div>
                  </div>

                  {/* 2) medio (lado derecho) */}
                  <div className="absolute right-2 top-44">
                    <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                        <Palette className="h-4 w-4" />
                      </span>
                      <div className="text-sm font-semibold text-gray-900">Graphic Design</div>
                    </div>
                  </div>

                  {/* 3) abajo (más cerca a la cintura, un poco hacia adentro) */}
                  <div className="absolute right-14 bottom-14">
                    <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <Sparkles className="h-4 w-4" />
                      </span>
                      <div className="text-sm font-semibold text-gray-900">Creative Branding</div>
                    </div>
                  </div>

                  {/* puntitos decorativos */}
                  <div className="absolute left-6 top-24 h-2 w-2 rounded-full bg-indigo-300/60" />
                  <div className="absolute left-10 bottom-20 h-3 w-3 rounded-full bg-sky-300/60" />
                  <div className="absolute right-24 bottom-8 h-2 w-2 rounded-full bg-emerald-300/60" />
                </div>
              </div>
            </div>

            <div className="h-3" />
          </div>
        </section>
      </div>
    </div>
  ),
  code: `import { Sparkles, PenTool, Palette } from "lucide-react";

export function AgencyHeroXanderFloating() {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-sky-300/80 to-sky-400/70 p-6 sm:p-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-white/80 via-white/70 to-indigo-50/60 shadow-2xl backdrop-blur">
        <div className="relative px-6 py-6 sm:px-10 sm:py-8">
          {/* Navbar */}
          <header className="flex items-center justify-between gap-4">
            <div className="text-sm font-semibold text-gray-900">Xander<span className="text-gray-400">.</span></div>
            <nav className="hidden items-center gap-10 text-xs font-medium text-gray-600 md:flex">
              <a className="hover:text-gray-900" href="#">About</a>
              <a className="hover:text-gray-900" href="#">Service</a>
              <a className="hover:text-gray-900" href="#">Works</a>
              <a className="hover:text-gray-900" href="#">Products</a>
              <a className="hover:text-gray-900" href="#">Contact</a>
            </nav>
            <button className="rounded-full bg-indigo-400 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-500">
              Sign up
            </button>
          </header>

          {/* Body */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
                Let’s Work<br />Together to Create<br />Wonders with Us
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                A visionary creative, crafting captivating wonders through art and design.
                Adept at turning imagination into extraordinary reality.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl bg-white/40">
                <img
                  alt="person"
                  className="h-[420px] w-full object-cover object-center"
                  src="/heros/xander.jpg"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="absolute right-10 top-10">
                  <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <PenTool className="h-4 w-4" />
                    </span>
                    <div className="text-sm font-semibold text-gray-900">Illustration</div>
                  </div>
                </div>

                <div className="absolute right-2 top-44">
                  <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <Palette className="h-4 w-4" />
                    </span>
                    <div className="text-sm font-semibold text-gray-900">Graphic Design</div>
                  </div>
                </div>

                <div className="absolute right-14 bottom-14">
                  <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div className="text-sm font-semibold text-gray-900">Creative Branding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
`,
}
