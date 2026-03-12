
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  ArrowRight,
  Sparkle,
  Search,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

function SpotlightNavbarPreview() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = useMemo(
    () => ["Work", "Services", "Cases", "Blog", "Contact"],
    []
  );

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[28px]
            bg-neutral-950 text-white
            ring-1 ring-white/10
            shadow-[0_28px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* spotlight / animated glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            animate={{ x: ["-50%", "-42%", "-50%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.65), rgba(59,130,246,0.45), rgba(16,185,129,0.35))",
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Sparkle className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">
                  Devwolf
                </div>
                <div className="text-xs text-white/60">Spotlight nav</div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="
                    group relative rounded-2xl px-4 py-2 text-sm font-medium text-white/80
                    hover:text-white
                  "
                >
                  <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/10" />
                  <span className="relative">{label}</span>
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Search (desktop) */}
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="
                  hidden md:grid h-11 w-11 place-items-center
                  rounded-2xl bg-white/10 ring-1 ring-white/10
                  hover:bg-white/15
                "
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* CTA (desktop) */}
              <a
                href="#"
                className="
                  hidden md:inline-flex items-center gap-2
                  rounded-2xl bg-white px-4 py-2
                  text-sm font-semibold text-neutral-900
                  hover:bg-white/95
                "
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="
                  md:hidden grid h-11 w-11 place-items-center
                  rounded-2xl bg-white/10 ring-1 ring-white/10
                  hover:bg-white/15
                "
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Search bar (desktop) */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative hidden border-t border-white/10 md:block"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                      placeholder="Search…"
                    />
                    <span className="rounded-xl bg-white/10 px-2 py-1 text-xs text-white/60 ring-1 ring-white/10">
                      ⏎
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative border-t border-white/10 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {/* Search */}
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                      placeholder="Search…"
                    />
                  </div>

                  {/* Links */}
                  {links.map((label, i) => (
                    <motion.a
                      key={label}
                      href="#"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.03 }}
                      className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </motion.a>
                  ))}

                  {/* CTA */}
                  <a
                    href="#"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                    onClick={() => setOpen(false)}
                  >
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {/* Tiny trust row */}
                  <div className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <span className="text-xs text-white/70">
                      Trusted by teams
                    </span>
                    <div className="flex items-center gap-1 text-white/80">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current opacity-40" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom subtle border */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </motion.nav>
      </div>
    </header>
  );
}

export const spotlightNavbar: Variant = {
  id: "spotlight-navbar",
  title: "Spotlight Navbar (Dark)",
  description: "Navbar oscuro con efecto de luz animado y barra de búsqueda",
  tags: ["navbar", "dark", "spotlight", "framer-motion", "lucide"],
  preview: <SpotlightNavbarPreview />,
  code: `
"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowRight, Sparkle, Search, Star } from "lucide-react"

export function SpotlightNavbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const links = useMemo(() => ["Work", "Services", "Cases", "Blog", "Contact"], [])

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[28px]
            bg-neutral-950 text-white
            ring-1 ring-white/10
            shadow-[0_28px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* spotlight / animated glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            animate={{ x: ["-50%", "-42%", "-50%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.65), rgba(59,130,246,0.45), rgba(16,185,129,0.35))",
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Sparkle className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Devwolf</div>
                <div className="text-xs text-white/60">Spotlight nav</div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="
                    group relative rounded-2xl px-4 py-2 text-sm font-medium text-white/80
                    hover:text-white
                  "
                >
                  <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/10" />
                  <span className="relative">{label}</span>
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Search (desktop) */}
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="
                  hidden md:grid h-11 w-11 place-items-center
                  rounded-2xl bg-white/10 ring-1 ring-white/10
                  hover:bg-white/15
                "
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* CTA (desktop) */}
              <a
                href="#"
                className="
                  hidden md:inline-flex items-center gap-2
                  rounded-2xl bg-white px-4 py-2
                  text-sm font-semibold text-neutral-900
                  hover:bg-white/95
                "
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="
                  md:hidden grid h-11 w-11 place-items-center
                  rounded-2xl bg-white/10 ring-1 ring-white/10
                  hover:bg-white/15
                "
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Search bar (desktop) */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative hidden border-t border-white/10 md:block"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                      placeholder="Search…"
                    />
                    <span className="rounded-xl bg-white/10 px-2 py-1 text-xs text-white/60 ring-1 ring-white/10">
                      ⏎
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative border-t border-white/10 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {/* Search */}
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                      placeholder="Search…"
                    />
                  </div>

                  {/* Links */}
                  {links.map((label, i) => (
                    <motion.a
                      key={label}
                      href="#"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.03 }}
                      className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </motion.a>
                  ))}

                  {/* CTA */}
                  <a
                    href="#"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                    onClick={() => setOpen(false)}
                  >
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {/* Tiny trust row */}
                  <div className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <span className="text-xs text-white/70">Trusted by teams</span>
                    <div className="flex items-center gap-1 text-white/80">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current opacity-40" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom subtle border */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </motion.nav>
      </div>
    </header>
  )
}
`,
}
