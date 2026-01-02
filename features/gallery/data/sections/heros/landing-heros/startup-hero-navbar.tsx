
import type { Variant } from "../../../../types"
import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export const startupHeroNavbar: Variant = {
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
}
