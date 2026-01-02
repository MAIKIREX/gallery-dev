
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  Orbit,
} from "lucide-react";
import { useState } from "react";

function PillNavbarPreview() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-4xl">
        <nav
          className="
            relative flex items-center justify-between
            rounded-full bg-neutral-900/95
            px-3 py-3
            shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            ring-1 ring-white/10
            backdrop-blur
          "
        >
          {/* Left icon */}
          <div
            className="
              grid h-11 w-11 place-items-center
              rounded-full bg-white
              text-neutral-900
              shadow-sm ring-1 ring-black/5
            "
            aria-label="Home"
          >
            <Orbit className="h-5 w-5" />
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-white/85 hover:text-white"
            >
              Work
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/85 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/85 hover:text-white"
            >
              Playground
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white/85 hover:text-white"
            >
              Resource
            </a>
          </div>

          {/* Right email pill (desktop) */}
          <a
            href="mailto:ihyaet@gmail.com"
            className="
              hidden md:inline-flex items-center justify-center
              rounded-full bg-white
              px-5 py-2.5
              text-sm font-medium text-neutral-900
              shadow-sm ring-1 ring-black/5
              hover:bg-white/95
            "
          >
            ihyaet@gmail.com
          </a>

          {/* Mobile menu button (NOW FUNCTIONAL) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="
              md:hidden
              grid h-11 w-11 place-items-center
              rounded-full bg-white/10
              text-white
              ring-1 ring-white/10
              hover:bg-white/15
            "
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Mobile dropdown menu */}
          {open && (
            <div
              className="
                absolute left-0 top-full z-50 mt-3 w-full
                rounded-3xl bg-neutral-950/95
                p-4
                shadow-[0_22px_60px_rgba(0,0,0,0.45)]
                ring-1 ring-white/10
                backdrop-blur
                md:hidden
              "
            >
              <div className="grid gap-2">
                {["Work", "About", "Playground", "Resource"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-3">
                <a
                  href="mailto:ihyaet@gmail.com"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center
                    rounded-2xl bg-white
                    px-4 py-3
                    text-sm font-medium text-neutral-900
                    ring-1 ring-black/5
                    hover:bg-white/95
                  "
                >
                  ihyaet@gmail.com
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export const pillNavbar: Variant = {
  id: "pill-navbar",
  title: "Pill Navbar (Dark)",
  description: "Navbar oscuro tipo cápsula con menú móvil funcional",
  tags: ["navbar", "dark", "pill", "responsive", "lucide"],
  preview: <PillNavbarPreview />,
  code: `
"use client"

import { useState } from "react"
import { Orbit, Menu, X } from "lucide-react"

export function PillNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-4xl">
        <nav className="relative flex items-center justify-between rounded-full bg-neutral-900/95 px-3 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-900 shadow-sm ring-1 ring-black/5" aria-label="Home">
            <Orbit className="h-5 w-5" />
          </div>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Work</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">About</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Playground</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Resource</a>
          </div>

          <a href="mailto:ihyaet@gmail.com" className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-black/5 hover:bg-white/95">
            ihyaet@gmail.com
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {open && (
            <div className="absolute left-0 top-full z-50 mt-3 w-full rounded-3xl bg-neutral-950/95 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur md:hidden">
              <div className="grid gap-2">
                {["Work", "About", "Playground", "Resource"].map((item) => (
                  <a key={item} href="#" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-3">
                <a href="mailto:ihyaet@gmail.com" onClick={() => setOpen(false)} className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 ring-1 ring-black/5 hover:bg-white/95">
                  ihyaet@gmail.com
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
`,
}
