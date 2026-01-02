
import type { Variant } from "../../../../types"
import {
  ShoppingCart,
  Menu,
  X,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { useState } from "react";

function HepVintageNavbarPreview() {
  const [open, setOpen] = useState(false);

  const leftLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Shop", href: "#" },
  ];

  const rightLinks = [
    { label: "Events", href: "#", icon: CalendarDays },
    { label: "Find Us", href: "#", icon: MapPin },
  ];

  return (
    <header className="w-full bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          {/* Left links (desktop) */}
          <nav className="hidden items-center gap-6 md:flex">
            {leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-neutral-800 hover:text-neutral-950"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Left: hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-neutral-900" />
          </button>

          {/* Center logo */}
          <a
            href="#"
            className="select-none text-center text-lg font-black tracking-[0.35em] text-neutral-900 md:text-xl"
            aria-label="HEP"
          >
            HEP
          </a>

          {/* Right links (desktop) */}
          <div className="hidden items-center gap-6 md:flex">
            {rightLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950"
              >
                <l.icon className="h-4 w-4 text-neutral-600" />
                {l.label}
              </a>
            ))}

            {/* Cart */}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-neutral-900" />
            </button>
          </div>

          {/* Right icons (mobile): cart */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 text-neutral-900" />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute left-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="text-sm font-semibold tracking-[0.25em] text-neutral-900">
                HEP MENU
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {leftLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {rightLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    <l.icon className="h-4 w-4 text-neutral-600" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export const hepVintageNavbar: Variant = {
  id: "hep-vintage-navbar",
  title: "Centered Logo Navbar (Hep)",
  description: "Navbar con logo centrado, links a los lados y overlay móvil",
  tags: ["navbar", "centered", "light", "responsive", "lucide"],
  preview: <HepVintageNavbarPreview />,
  code: `
"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X, CalendarDays, MapPin } from "lucide-react"

export function HepVintageNavbar() {
  const [open, setOpen] = useState(false)

  const leftLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Shop", href: "#" },
  ]

  const rightLinks = [
    { label: "Events", href: "#", icon: CalendarDays },
    { label: "Find Us", href: "#", icon: MapPin },
  ]

  return (
    <header className="w-full bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <nav className="hidden items-center gap-6 md:flex">
            {leftLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-neutral-800 hover:text-neutral-950">
                {l.label}
              </a>
            ))}
          </nav>

          <button type="button" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5 text-neutral-900" />
          </button>

          <a href="#" className="select-none text-center text-lg font-black tracking-[0.35em] text-neutral-900 md:text-xl" aria-label="HEP">
            HEP
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {rightLinks.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950">
                <l.icon className="h-4 w-4 text-neutral-600" />
                {l.label}
              </a>
            ))}
            <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50" aria-label="Cart">
              <ShoppingCart className="h-5 w-5 text-neutral-900" />
            </button>
          </div>

          <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-neutral-900" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <button className="absolute inset-0 bg-black/40" aria-label="Close overlay" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            {/* ... mobile menu content ... */}
          </div>
        </div>
      )}
    </header>
  )
}
`,
}
