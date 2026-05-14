"use client"

import type { Variant } from "../../../../types"
import { useMemo, useState } from "react"
import { Footprints, Phone, Search, ShoppingCart, Menu, X } from "lucide-react"

function FootwearNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(0)
  const links = useMemo(() => ["Home", "About Us", "Product", "Contact Us"], [])

  return (
    <header className="w-full bg-white">
      <div className="border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <Footprints className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-700">Footwear</span>
          </a>
          <div className="relative hidden h-10 flex-1 md:block">
            <div className="absolute inset-y-0 left-10 right-10 -skew-x-12 rounded-sm bg-emerald-600" />
          </div>
          <a href="tel:+9808123456" className="flex items-center gap-3 rounded-full bg-white px-2 py-1.5 text-sm font-semibold text-gray-700" aria-label="Call phone">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
              <Phone className="h-5 w-5 text-emerald-600" />
            </span>
            <span className="hidden sm:inline">9808123456</span>
          </a>
        </div>
      </div>
      <div className="shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <button type="button" className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>
            <nav className="hidden items-center gap-2 md:flex">
              {links.map((label) => {
                const isActive = label === "Home"
                return (
                  <a key={label} href="#" className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-600 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="mx-auto w-full max-w-6xl px-4 py-3">
              <div className="grid gap-2">
                {links.map((label) => (
                  <a key={label} href="#" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export const footwearNavbar: Variant = {
  id: "footwear-navbar",
  title: "Footwear Navbar",
  description: "Navbar comercial con CTA telefónica, buscador y carrito.",
  tags: ["navbar", "ecommerce", "responsive", "light"],
  preview: <FootwearNavbarPreview />,
  code: ``,
}
