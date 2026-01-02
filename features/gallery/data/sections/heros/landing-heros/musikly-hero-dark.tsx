
import type { Variant } from "../../../../types"
import {
  Menu,
  Music2,
  Globe,
  Facebook,
  Chrome,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const musiklyHeroDark: Variant = {
  id: "musikly-hero-dark",
  title: "Musikly Dark Hero",
  description: "Hero tipo app musical con navbar, CTA, cards y foto grande (responsive)",
  tags: ["hero", "landing", "music", "dark", "gradient", "cards", "responsive"],
  preview: (
    <div className="w-full max-w-5xl">
      <div className="rounded-2xl bg-gradient-to-br from-cyan-400/70 via-sky-500/40 to-indigo-600/60 p-6 sm:p-8">
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10] text-white shadow-2xl">
          {/* glows */}
          <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />

          {/* pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:34px_34px]" />

          {/* arcos suaves */}
          <div className="pointer-events-none absolute -left-24 top-10 h-[520px] w-[520px] rounded-full border border-white/10 opacity-30" />
          <div className="pointer-events-none absolute -left-8 top-24 h-[520px] w-[520px] rounded-full border border-white/10 opacity-15" />

          <div className="relative px-6 py-6 md:px-10 md:py-8">
            {/* NAVBAR */}
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <Music2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-white/90">MUSIKLY</span>
              </div>

              <nav className="hidden items-center gap-10 text-xs text-white/70 md:flex">
                <a href="#" className="hover:text-white">Discover</a>
                <a href="#" className="hover:text-white">Download</a>
                <a href="#" className="hover:text-white">Premium</a>
              </nav>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-3 text-white/70 md:flex">
                  <Globe className="h-4 w-4 cursor-pointer hover:text-white" />
                  <Chrome className="h-4 w-4 cursor-pointer hover:text-white" />
                  <Facebook className="h-4 w-4 cursor-pointer hover:text-white" />
                </div>

                <details className="relative md:hidden">
                  <summary className="list-none cursor-pointer rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                    <Menu className="h-5 w-5" />
                  </summary>
                  <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0b0b10] shadow-2xl">
                    <nav className="flex flex-col p-2 text-sm text-white/80">
                      <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Discover</a>
                      <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Download</a>
                      <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Premium</a>
                      <div className="mt-1 flex gap-3 px-3 py-3 text-white/75">
                        <Globe className="h-4 w-4" />
                        <Chrome className="h-4 w-4" />
                        <Facebook className="h-4 w-4" />
                      </div>
                    </nav>
                  </div>
                </details>
              </div>
            </header>

            {/* BODY */}
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              {/* Left */}
              <div>
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                  LIVE YOUR DAY
                  <br />
                  WITH MUSIC
                </h1>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                  Make your day more lively with a variety of premium music that refresh your mind
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
                    TRY PREMIUM
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl border-white/20 bg-white/0 px-6 py-3 text-xs font-semibold tracking-wide text-white/90 hover:bg-white/10"
                  >
                    VIEW PLANS
                  </Button>
                </div>

                {/* Hit's music */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white/90">Hit’s Music</h3>
                    <div className="flex items-center gap-2 text-white/70">
                      <button className="rounded-full border border-white/15 bg-white/5 p-1.5 hover:bg-white/10">
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button className="rounded-full border border-white/15 bg-white/5 p-1.5 hover:bg-white/10">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 sm:max-w-sm">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                      <div
                        className="h-16 rounded-lg bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80)",
                        }}
                      />
                      <div className="mt-2 text-[10px] font-semibold text-white/85">Rap Hits</div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                      <div
                        className="h-16 rounded-lg bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1521337581100-8ca9a73a5b14?auto=format&fit=crop&w=300&q=80)",
                        }}
                      />
                      <div className="mt-2 text-[10px] font-semibold text-white/85">Pop Hits</div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/15 p-2 hover:bg-fuchsia-500/20">
                      <div
                        className="h-16 rounded-lg bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=300&q=80)",
                        }}
                      />
                      <div className="mt-2 text-[10px] font-semibold text-white/90">Concert Hits</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="relative mx-auto w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-60px_rgba(236,72,153,0.55)]">
                  <img
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                    alt="music hero"
                    src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&w=1400&q=80"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
  code: `import {
  Menu,
  Music2,
  Globe,
  Facebook,
  Chrome,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function MusiklyHeroDark() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-cyan-400/70 via-sky-500/40 to-indigo-600/60 p-6 sm:p-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10] text-white shadow-2xl">
        <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:34px_34px]" />
        <div className="pointer-events-none absolute -left-24 top-10 h-[520px] w-[520px] rounded-full border border-white/10 opacity-30" />
        <div className="pointer-events-none absolute -left-8 top-24 h-[520px] w-[520px] rounded-full border border-white/10 opacity-15" />

        <div className="relative px-6 py-6 md:px-10 md:py-8">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <Music2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">MUSIKLY</span>
            </div>

            <nav className="hidden items-center gap-10 text-xs text-white/70 md:flex">
              <a href="#" className="hover:text-white">Discover</a>
              <a href="#" className="hover:text-white">Download</a>
              <a href="#" className="hover:text-white">Premium</a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 text-white/70 md:flex">
                <Globe className="h-4 w-4 cursor-pointer hover:text-white" />
                <Chrome className="h-4 w-4 cursor-pointer hover:text-white" />
                <Facebook className="h-4 w-4 cursor-pointer hover:text-white" />
              </div>

              <details className="relative md:hidden">
                <summary className="list-none cursor-pointer rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </summary>
                <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0b0b10] shadow-2xl">
                  <nav className="flex flex-col p-2 text-sm text-white/80">
                    <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Discover</a>
                    <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Download</a>
                    <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Premium</a>
                    <div className="mt-1 flex gap-3 px-3 py-3 text-white/75">
                      <Globe className="h-4 w-4" />
                      <Chrome className="h-4 w-4" />
                      <Facebook className="h-4 w-4" />
                    </div>
                  </nav>
                </div>
              </details>
            </div>
          </header>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                LIVE YOUR DAY
                <br />
                WITH MUSIC
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                Make your day more lively with a variety of premium music that refresh your mind
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
                  TRY PREMIUM
                </Button>

                <Button
                  variant="outline"
                  className="rounded-xl border-white/20 bg-white/0 px-6 py-3 text-xs font-semibold tracking-wide text-white/90 hover:bg-white/10"
                >
                  VIEW PLANS
                </Button>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white/90">Hit’s Music</h3>
                  <div className="flex items-center gap-2 text-white/70">
                    <button className="rounded-full border border-white/15 bg-white/5 p-1.5 hover:bg-white/10">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="rounded-full border border-white/15 bg-white/5 p-1.5 hover:bg-white/10">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 sm:max-w-sm">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                    <div className="h-16 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80)" }}
                    />
                    <div className="mt-2 text-[10px] font-semibold text-white/85">Rap Hits</div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                    <div className="h-16 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521337581100-8ca9a73a5b14?auto=format&fit=crop&w=300&q=80)" }}
                    />
                    <div className="mt-2 text-[10px] font-semibold text-white/85">Pop Hits</div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/15 p-2 hover:bg-fuchsia-500/20">
                    <div className="h-16 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=300&q=80)" }}
                    />
                    <div className="mt-2 text-[10px] font-semibold text-white/90">Concert Hits</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-60px_rgba(236,72,153,0.55)]">
                <img
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                  alt="music hero"
                  src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&w=1400&q=80"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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
