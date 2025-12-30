import {
  Dribbble,
  Instagram,
  Menu,
  Twitter,
  Music2,
  Globe,
  Facebook,
  Chrome,
  ChevronLeft,
  ChevronRight,
  Palette,
  Sparkles,
  PenTool,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Section } from "../../types"

export const herosSection: Section = {
  id: "heros",
  name: "Heros",
  collections: [
    {
      id: "landing-heros",
      title: "Landing Heros",
      description: "Hero sections para páginas de inicio y landing pages",
      variants: [
        {
          id: "synqri-dark-hero",
          title: "Synqri Dark Hero",
          description: "Hero dark con navbar, CTA y esfera/loop decorativo (responsive)",
          tags: ["hero", "landing", "dark", "responsive", "navbar"],
          preview: (
            <div className="w-full max-w-5xl">
              <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#070614] via-[#0b0620] to-[#140a2e] text-white">
                {/* stars pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />

                {/* arc line */}
                <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full border border-white/10 rotate-12" />

                {/* glow */}
                <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />

                <div className="relative px-6 py-6 md:px-10 md:py-8">
                  {/* Navbar */}
                  <header className="flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-tight">syngri</div>

                    {/* desktop links */}
                    <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
                      <a className="hover:text-white" href="#">
                        About Us
                      </a>
                      <a className="hover:text-white" href="#">
                        Services
                      </a>
                      <a className="hover:text-white" href="#">
                        Projects
                      </a>
                      <a className="hover:text-white" href="#">
                        Contact
                      </a>
                    </nav>

                    <div className="flex items-center gap-3">
                      <Button
                        className="hidden bg-white text-black hover:bg-white/90 md:inline-flex"
                        size="sm"
                      >
                        Contact us
                      </Button>

                      {/* mobile menu (sin JS) */}
                      <details className="group relative md:hidden">
                        <summary className="list-none rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                          <Menu className="h-5 w-5" />
                        </summary>
                        <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0b0620] shadow-2xl">
                          <div className="flex flex-col p-2 text-sm text-white/85">
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              About Us
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Services
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Projects
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Contact
                            </a>
                            <div className="p-2">
                              <Button className="w-full bg-white text-black hover:bg-white/90" size="sm">
                                Contact us
                              </Button>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </header>

                  {/* Hero */}
                  <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2">
                    {/* Left */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for Work
                      </div>

                      <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Transform your ideas
                        <br />
                        into digital success
                        <br />
                        with us!
                      </h1>

                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                        We're your partner in product design, website creation, and branding for every stage of your business.
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Button className="bg-white text-black hover:bg-white/90">Services</Button>
                        <Button variant="outline" className="border-white/20 bg-white/0 text-white hover:bg-white/10">
                          Our work
                        </Button>
                      </div>
                    </div>

                    {/* Right - “loop” decorativo responsive */}
                    <div className="relative mx-auto w-full max-w-md">
                      <div className="relative mx-auto aspect-square w-[260px] sm:w-[340px] md:w-[420px]">
                        {/* glow base */}
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.55),transparent_55%)] blur-2xl opacity-90" />

                        {/* glass core */}
                        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_70px_-25px_rgba(168,85,247,0.85)]" />

                        {/* ring 1 */}
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-200/25 shadow-[0_0_40px_-18px_rgba(236,72,153,0.8)]" />

                        {/* ring 2 (cruzado) */}
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full border-2 border-purple-200/20 shadow-[0_0_40px_-18px_rgba(168,85,247,0.8)]" />

                        {/* highlight */}
                        <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-white/10 blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ),
          code: `import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SynqriHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#070614] via-[#0b0620] to-[#140a2e] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full border border-white/10 rotate-12" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />

      <div className="relative px-6 py-6 md:px-10 md:py-8">
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">syngri</div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#">About Us</a>
            <a className="hover:text-white" href="#">Services</a>
            <a className="hover:text-white" href="#">Projects</a>
            <a className="hover:text-white" href="#">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden bg-white text-black hover:bg-white/90 md:inline-flex" size="sm">
              Contact us
            </Button>

            <details className="group relative md:hidden">
              <summary className="list-none rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </summary>

              <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0b0620] shadow-2xl">
                <div className="flex flex-col p-2 text-sm text-white/85">
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">About Us</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Services</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Projects</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Contact</a>
                  <div className="p-2">
                    <Button className="w-full bg-white text-black hover:bg-white/90" size="sm">Contact us</Button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </header>

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for Work
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Transform your ideas<br />into digital success<br />with us!
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              We're your partner in product design, website creation, and branding for every stage of your business.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="bg-white text-black hover:bg-white/90">Services</Button>
              <Button variant="outline" className="border-white/20 bg-white/0 text-white hover:bg-white/10">
                Our work
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative mx-auto aspect-square w-[260px] sm:w-[340px] md:w-[420px]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.55),transparent_55%)] blur-2xl opacity-90" />
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_70px_-25px_rgba(168,85,247,0.85)]" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-200/25 shadow-[0_0_40px_-18px_rgba(236,72,153,0.8)]" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full border-2 border-purple-200/20 shadow-[0_0_40px_-18px_rgba(168,85,247,0.8)]" />
              <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
        },
        {
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

        },
        {
  id: "startup-hero-navbar",
  title: "Startup Hero with Navbar",
  description: "Hero para startups con navbar limpio, corte diagonal y CTA (Lucide + responsive)",
  tags: ["hero", "navbar", "startup", "lucide", "responsive", "light"],
  preview: (
    <div className="w-full max-w-6xl rounded-2xl border bg-white overflow-hidden">
      <section className="relative">
        {/* NAVBAR */}
        <header className="relative z-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                D
              </div>
            </div>

            {/* Links desktop */}
            <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
              <a className="hover:text-black" href="#">HOME</a>
              <a className="hover:text-black" href="#">ABOUT</a>
              <a className="hover:text-black" href="#">PROJECTS</a>
              <a className="hover:text-black" href="#">EXPERTISE</a>
              <a className="hover:text-black" href="#">CONSULTATION</a>
              <a className="hover:text-black" href="#">CONTACT</a>
            </nav>

            {/* Icons desktop */}
            <div className="hidden items-center gap-4 text-gray-500 md:flex">
              <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
              <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
              <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
            </div>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer text-gray-700">
                <Menu className="h-6 w-6" />
              </summary>

              <div className="absolute right-0 mt-3 w-52 rounded-xl border bg-white shadow-lg">
                <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">PROJECTS</a>
                  <a href="#">EXPERTISE</a>
                  <a href="#">CONSULTATION</a>
                  <a href="#">CONTACT</a>

                  <div className="mt-3 flex gap-4 text-gray-500">
                    <Twitter className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                    <Dribbble className="h-4 w-4" />
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </header>

        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div
            className="
              relative z-10 bg-white px-6 py-16 sm:px-10 md:px-12
              md:-mr-24 md:pr-32
              md:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]
            "
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Turn your ideas
              <br />
              into a{" "}
              <span className="text-blue-500">Startup</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">
                WORK WITH US
              </button>

              <a
                href="#"
                className="text-sm font-semibold text-blue-500 hover:text-blue-600"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[280px] sm:min-h-[380px] md:min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  ),
  code: `import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export function StartupHeroNavbar() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* NAVBAR */}
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            D
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">EXPERTISE</a>
            <a href="#">CONSULTATION</a>
            <a href="#">CONTACT</a>
          </nav>

          <div className="hidden items-center gap-4 text-gray-500 md:flex">
            <Twitter className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Dribbble className="h-4 w-4" />
          </div>

          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </header>

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="
            bg-white px-6 py-16 sm:px-10 md:px-12
            md:-mr-24 md:pr-32
            md:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]
          "
        >
          <h1 className="text-4xl font-bold sm:text-6xl">
            Turn your ideas<br />
            into a <span className="text-blue-500">Startup</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="rounded-lg bg-blue-500 px-6 py-3 text-white">
              WORK WITH US
            </button>
            <a className="text-blue-500">LEARN MORE</a>
          </div>
        </div>

        <div className="relative min-h-[520px] bg-cover bg-center" />
      </div>
    </section>
  );
}`,
},
{
  id: "startup-hero-blob-navbar",
  title: "Startup Blob Hero + Navbar",
  description: "Hero tipo 'Turn your ideas into a Startup' con imagen circular recortada (Lucide + responsive)",
  tags: ["hero", "navbar", "startup", "blob", "clip-path", "lucide", "responsive", "light"],
  preview: (
    <div className="w-full max-w-6xl overflow-hidden rounded-2xl border bg-white">
      <section className="bg-white">
        {/* NAVBAR */}
        <header className="px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Left: logo + links */}
            <div className="flex items-center gap-10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                D
              </div>

              <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.22em] text-gray-600 md:flex">
                <a href="#" className="hover:text-black">HOME</a>
                <a href="#" className="hover:text-black">ABOUT</a>
                <a href="#" className="hover:text-black">PROJECTS</a>
                <a href="#" className="hover:text-black">EXPERTISE</a>
                <a href="#" className="hover:text-black">CONSULTATION</a>
                <a href="#" className="hover:text-black">CONTACT</a>
              </nav>
            </div>

            {/* Right: icons */}
            <div className="hidden items-center gap-5 text-gray-700 md:flex">
              <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
              <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
              <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
              <div className="h-1 w-1 rounded-full bg-gray-400" />
            </div>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer text-gray-700">
                <Menu className="h-6 w-6" />
              </summary>
              <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg">
                <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">PROJECTS</a>
                  <a href="#">EXPERTISE</a>
                  <a href="#">CONSULTATION</a>
                  <a href="#">CONTACT</a>
                  <div className="mt-3 flex gap-4 text-gray-500">
                    <Twitter className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                    <Dribbble className="h-4 w-4" />
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </header>

        {/* HERO */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-14 pt-8 md:grid-cols-2 md:pb-20 md:pt-14">
          {/* Left text */}
          <div className="max-w-xl">
            <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[56px] lg:text-[64px]">
              Turn your ideas
              <br />
              into a{" "}
              <span className="text-blue-500">Startup</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="rounded-xl bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                WORK WITH US
              </button>

              <a href="#" className="text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-600">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right image blob */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative mx-auto aspect-square w-[320px] sm:w-[400px] lg:w-[460px]">
              {/* Blob */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {/* “corte” diagonal arriba-derecha */}
                <div className="absolute inset-0 bg-white md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
                {/* Imagen */}
                <div
                  className="absolute inset-0 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80)",
                  }}
                />
                {/* Recorte final (aplica el “bite” a la imagen también) */}
                <div className="absolute inset-0 bg-transparent md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
              </div>

              {/* Borde suave como el diseño */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  code: `import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export function StartupBlobHeroNavbar() {
  return (
    <section className="bg-white">
      {/* NAVBAR */}
      <header className="px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
              D
            </div>

            <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.22em] text-gray-600 md:flex">
              <a href="#" className="hover:text-black">HOME</a>
              <a href="#" className="hover:text-black">ABOUT</a>
              <a href="#" className="hover:text-black">PROJECTS</a>
              <a href="#" className="hover:text-black">EXPERTISE</a>
              <a href="#" className="hover:text-black">CONSULTATION</a>
              <a href="#" className="hover:text-black">CONTACT</a>
            </nav>
          </div>

          <div className="hidden items-center gap-5 text-gray-700 md:flex">
            <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
            <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
            <div className="h-1 w-1 rounded-full bg-gray-400" />
          </div>

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer text-gray-700">
              <Menu className="h-6 w-6" />
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg">
              <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">PROJECTS</a>
                <a href="#">EXPERTISE</a>
                <a href="#">CONSULTATION</a>
                <a href="#">CONTACT</a>
                <div className="mt-3 flex gap-4 text-gray-500">
                  <Twitter className="h-4 w-4" />
                  <Instagram className="h-4 w-4" />
                  <Dribbble className="h-4 w-4" />
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-14 pt-8 md:grid-cols-2 md:pb-20 md:pt-14">
        <div className="max-w-xl">
          <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[56px] lg:text-[64px]">
            Turn your ideas<br />
            into a <span className="text-blue-500">Startup</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button className="rounded-xl bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
              WORK WITH US
            </button>
            <a href="#" className="text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-600">
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative mx-auto aspect-square w-[320px] sm:w-[400px] lg:w-[460px]">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-white md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
              <div
                className="absolute inset-0 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-transparent md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}`,
},
{
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
},
{
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
},
{
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
},
{
  id: "solt-uiux-brand-hero",
  title: "UI/UX & Brand Designer Hero (Fixed + Code)",
  description:
    "Hero editorial con foto oval centrada, métricas a la derecha y servicios abajo (sin corte del texto).",
  tags: ["hero", "portfolio", "minimal", "editorial", "typography", "responsive"],

  preview: (
    <div className="w-full max-w-6xl">
      <section className="relative overflow-hidden rounded-2xl border bg-[#d9d7cf] text-neutral-900 shadow-2xl">
        {/* TOP */}
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)]">
            {/* LEFT */}
            <div className="min-w-0 max-w-xl lg:pr-6">
              <p className="font-serif text-2xl text-neutral-800 sm:text-3xl">
                Hey. I'm Solt,
              </p>

              <div className="mt-3 leading-[0.92] tracking-tight">
                <div className="text-5xl font-black uppercase sm:text-6xl">
                  A UI/UX
                </div>

                <div className="mt-2 flex items-end gap-3">
                  <div className="font-serif text-5xl italic sm:text-6xl">
                    &amp; Brand
                  </div>
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

            {/* CENTER */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[380px] -translate-x-1/2 rounded-[999px] bg-white/40" />

                <div className="relative mx-auto w-[340px] overflow-hidden rounded-[999px] bg-neutral-200 shadow-lg">
                  <img
                    alt="portrait"
                    className="h-[560px] w-full object-cover object-center"
                    // ✅ recomendado: crea public/heros/solt.jpg
                    src="/heros/solt.jpg"
                  />
                </div>

                <div className="pointer-events-none absolute -bottom-5 left-1/2 h-12 w-[70%] -translate-x-1/2 rounded-full bg-neutral-900/12 blur-xl" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="min-w-0 flex justify-start lg:justify-end">
              <div className="w-full max-w-xs space-y-10 text-right">
                <div>
                  <div className="text-3xl font-extrabold">15+</div>
                  <div className="mt-1 font-serif text-sm text-neutral-700">
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-extrabold">280+</div>
                  <div className="mt-1 font-serif text-sm text-neutral-700">
                    Projects Delivered
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-extrabold">*99%</div>
                  <div className="mt-1 font-serif text-sm text-neutral-700">
                    Client Satisfaction
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-extrabold">50</div>
                  <div className="mt-1 font-serif text-sm text-neutral-700">
                    Clients worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SERVICES */}
        <div className="border-t border-neutral-900/15 px-6 py-6 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {[
              {
                title: "USER-CENTERED DESIGN",
                desc: "Intuitive and engaging experiences tailored for your audience.",
              },
              {
                title: "BRAND IDENTITY & STRATEGY",
                desc: "Strong visual storytelling that makes your brand unforgettable.",
              },
              {
                title: "RESPONSIVE & MODERN UI",
                desc: "Pixel-perfect designs optimized for all devices.",
              },
              {
                title: "SEAMLESS PROTOTYPING",
                desc: "Interactive mockups to bring ideas to life before development.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={[
                  "px-0 lg:px-6",
                  idx !== 0 ? "lg:border-l lg:border-neutral-900/15" : "",
                ].join(" ")}
              >
                <div className="text-xs font-extrabold tracking-wide text-neutral-900">
                  {item.title}
                </div>
                <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-neutral-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  ),

  // ✅ ESTE es el "code" que tu galería necesita (string)
  code: `import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SoltDesignerHero() {
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
                  src="/heros/solt.jpg"
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
          {[
            { title: "USER-CENTERED DESIGN", desc: "Intuitive and engaging experiences tailored for your audience." },
            { title: "BRAND IDENTITY & STRATEGY", desc: "Strong visual storytelling that makes your brand unforgettable." },
            { title: "RESPONSIVE & MODERN UI", desc: "Pixel-perfect designs optimized for all devices." },
            { title: "SEAMLESS PROTOTYPING", desc: "Interactive mockups to bring ideas to life before development." },
          ].map((item, idx) => (
            <div key={item.title} className={\`px-0 lg:px-6 \${idx !== 0 ? "lg:border-l lg:border-neutral-900/15" : ""}\`}>
              <div className="text-xs font-extrabold tracking-wide text-neutral-900">{item.title}</div>
              <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
}



      ],
    },
  ],
}
