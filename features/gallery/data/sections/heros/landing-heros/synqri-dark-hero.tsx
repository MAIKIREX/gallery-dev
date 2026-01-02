
import type { Variant } from "../../../../types"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const synqriDarkHero: Variant = {
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
}