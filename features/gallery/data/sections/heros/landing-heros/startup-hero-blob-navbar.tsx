
import type { Variant } from "../../../../types"
import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export const startupHeroBlobNavbar: Variant = {
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
}
