
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  List,
  Map,
} from "lucide-react";
import { useState } from "react";

function BelleOaksNavbarPreview() {
  const [apartmentsOpen, setApartmentsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Amenities",
    "About us",
    "Gallery",
    "Lifestyle",
    "Units",
    "Contact",
  ];

  return (
    <div className="w-full">
      {/* Top bar floating */}
      <div className="relative mx-auto mt-4 w-[min(1200px,96%)] rounded-[26px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          {/* Left: dotted + OFF */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-neutral-400">······</span>
            <span className="text-sm font-semibold tracking-wide text-neutral-400">
              OFF
            </span>
          </div>

          {/* Center logo */}
          <div className="flex flex-1 items-center justify-start md:justify-center">
            <div className="text-center leading-none">
              <div className="text-lg font-black tracking-wide text-[#111C3B] md:text-xl">
                BELLE OAKS
              </div>
              <div className="text-sm font-medium tracking-wide text-[#111C3B]/80 md:text-base">
                MARKETPLACE
              </div>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Apartments dropdown */}
            <button
              type="button"
              onClick={() => setApartmentsOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-[#F2B24A] bg-white px-4 py-2 text-sm font-semibold text-[#111C3B] hover:bg-[#FFF7EA] md:px-6"
              aria-expanded={apartmentsOpen}
              aria-label="Apartments dropdown"
            >
              Apartments
              {apartmentsOpen ? (
                <ChevronUp className="h-4 w-4 opacity-70" />
              ) : (
                <ChevronDown className="h-4 w-4 opacity-70" />
              )}
            </button>

            {/* Menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-[#F2C46D] px-4 py-2 text-sm font-semibold text-[#111C3B] hover:brightness-95 md:px-6"
              aria-label="Open menu"
            >
              Menu
              <span className="grid h-8 w-10 place-items-center rounded-full bg-white/35">
                <Menu className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Apartments options row */}
      {apartmentsOpen && (
        <div className="mx-auto mt-3 w-[min(1200px,96%)]">
          <div className="flex flex-col gap-3 md:flex-row md:justify-end">
            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111C3B] shadow-[0_12px_35px_rgba(0,0,0,0.14)] ring-1 ring-black/5 hover:bg-neutral-50 md:w-[320px]"
            >
              <span>
                Visual{" "}
                <span className="font-serif italic font-medium">Selection</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF3DD]">
                <Map className="h-5 w-5 text-[#111C3B]" />
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111C3B] shadow-[0_12px_35px_rgba(0,0,0,0.14)] ring-1 ring-black/5 hover:bg-neutral-50 md:w-[320px]"
            >
              <span>
                List{" "}
                <span className="font-serif italic font-medium">Selection</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF3DD]">
                <List className="h-5 w-5 text-[#111C3B]" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90]">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/35"
            aria-label="Close backdrop"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-0 m-4 rounded-[28px] bg-[#182554] shadow-2xl md:m-6">
            {/* Top bar inside overlay */}
            <div className="flex items-start justify-between px-6 py-6">
              <div className="leading-tight text-white">
                <div className="text-lg font-black tracking-wide">
                  BELLE OAKS
                </div>
                <div className="text-sm font-medium opacity-90">
                  MARKETPLACE
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-[#F2C46D] text-[#111C3B] hover:brightness-95"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="grid h-[calc(100%-92px)] grid-cols-1 gap-6 px-6 pb-6 md:grid-cols-[1fr_420px]">
              {/* Left big links */}
              <div className="flex flex-col justify-start">
                <div className="space-y-6 md:space-y-7">
                  {navLinks.map((label, idx) => (
                    <a
                      key={label}
                      href="#"
                      className="group flex items-center gap-4 text-[44px] font-light leading-none text-white hover:opacity-95 md:text-[56px]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* bullet only for active (Home like screenshot) */}
                      <span
                        className={[
                          "text-[#F2C46D] transition-opacity",
                          idx === 0
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-60",
                        ].join(" ")}
                      >
                        •
                      </span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>

                {/* small circle social */}
                <div className="mt-auto pt-6">
                  <button
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
                    aria-label="Social"
                  >
                    f
                  </button>
                </div>
              </div>

              {/* Right visual block (desktop look) */}
              <div className="hidden md:flex md:flex-col md:justify-end">
                <div className="rounded-[22px] bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-end gap-6 text-xs text-white/80">
                    <a className="underline underline-offset-4" href="#">
                      Terms of Use ↗
                    </a>
                    <a className="underline underline-offset-4" href="#">
                      Privacy Policy ↗
                    </a>
                    <span className="opacity-70">Copyright © 2025</span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[18px] bg-white/10 ring-1 ring-white/10">
                    <div className="aspect-[16/10] w-full bg-gradient-to-br from-white/20 to-white/5" />
                    <div className="px-4 py-3 text-white">
                      <div className="text-2xl font-light">
                        3D Map <span className="opacity-60">•</span> 3D Map
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right visual block (mobile) */}
              <div className="md:hidden">
                <div className="rounded-[18px] bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">Extras</div>
                  <div className="mt-2 text-xs text-white/80">
                    Terms of Use • Privacy Policy • © 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Small spacer for gallery preview */}
      <div className="h-6" />
    </div>
  );
}

export const belleOaksNavbar: Variant = {
  id: "belle-oaks-navbar",
  title: "Fullscreen Menu (Belle Oaks)",
  description: "Navbar flotante con menú fullscreen y dropdown secundario",
  tags: ["navbar", "fullscreen", "light", "responsive", "lucide"],
  preview: <BelleOaksNavbarPreview />,
  code: `
"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp, List, Map } from "lucide-react"

export function BelleOaksNavbar() {
  const [apartmentsOpen, setApartmentsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = ["Home", "Amenities", "About us", "Gallery", "Lifestyle", "Units", "Contact"]

  return (
    <div className="w-full">
      <div className="relative mx-auto mt-4 w-[min(1200px,96%)] rounded-[26px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-neutral-400">······</span>
            <span className="text-sm font-semibold tracking-wide text-neutral-400">OFF</span>
          </div>
          <div className="flex flex-1 items-center justify-start md:justify-center">
            <div className="text-center leading-none">
              <div className="text-lg font-black tracking-wide text-[#111C3B] md:text-xl">BELLE OAKS</div>
              <div className="text-sm font-medium tracking-wide text-[#111C3B]/80 md:text-base">MARKETPLACE</div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button type="button" onClick={() => setApartmentsOpen((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-[#F2B24A] bg-white px-4 py-2 text-sm font-semibold text-[#111C3B] hover:bg-[#FFF7EA] md:px-6" aria-expanded={apartmentsOpen}>
              Apartments
              {apartmentsOpen ? <ChevronUp className="h-4 w-4 opacity-70" /> : <ChevronDown className="h-4 w-4 opacity-70" />}
            </button>
            <button type="button" onClick={() => setMenuOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-[#F2C46D] px-4 py-2 text-sm font-semibold text-[#111C3B] hover:brightness-95 md:px-6">
              Menu
              <span className="grid h-8 w-10 place-items-center rounded-full bg-white/35"><Menu className="h-5 w-5" /></span>
            </button>
          </div>
        </div>
      </div>

      {apartmentsOpen && (
        <div className="mx-auto mt-3 w-[min(1200px,96%)]">
          <div className="flex flex-col gap-3 md:flex-row md:justify-end">
            {/* ... dropdown content ... */}
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-[90]">
          <button className="absolute inset-0 bg-black/35" aria-label="Close backdrop" onClick={() => setMenuOpen(false)} />
          <div className="absolute inset-0 m-4 rounded-[28px] bg-[#182554] shadow-2xl md:m-6">
            {/* ... fullscreen menu content ... */}
          </div>
        </div>
      )}
    </div>
  )
}
`,
}
