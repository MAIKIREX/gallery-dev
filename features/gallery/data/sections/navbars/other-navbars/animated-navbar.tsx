
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

function AnimatedNavbarPreview() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = useMemo(
    () => ["Home", "Features", "Pricing", "Docs", "Contact"],
    []
  );

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-3xl
            bg-white/70 backdrop-blur
            ring-1 ring-black/5
            shadow-[0_20px_60px_rgba(0,0,0,0.10)]
          "
        >
          {/* Animated subtle gradient glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(16,185,129,0.14), rgba(59,130,246,0.14), rgba(244,63,94,0.12))",
              backgroundSize: "200% 100%",
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">
                  Devwolf UI
                </div>
                <div className="text-xs text-neutral-500">
                  Animated navbar demo
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((label) => {
                const isActive = active === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    className="relative rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                  >
                    {/* Hover background (Tailwind only) */}
                    <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 hover:opacity-100 bg-neutral-900/5" />

                    {/* Active animated pill (Framer Motion) */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-2xl bg-neutral-900 text-white"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* CTA (desktop) */}
              <a
                href="#"
                className="
                  hidden md:inline-flex items-center gap-2
                  rounded-2xl bg-neutral-900 px-4 py-2
                  text-sm font-semibold text-white
                  hover:bg-neutral-800
                "
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="
                  md:hidden grid h-11 w-11 place-items-center
                  rounded-2xl bg-neutral-900 text-white
                  hover:bg-neutral-800
                "
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0, scale: 0.9 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.18 }}
                      className="grid place-items-center"
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.9 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.18 }}
                      className="grid place-items-center"
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile dropdown (AnimatePresence) */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative border-t border-black/5 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {links.map((label, i) => (
                    <motion.button
                      key={label}
                      type="button"
                      onClick={() => {
                        setActive(label);
                        setOpen(false);
                      }}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.03 }}
                      className="rounded-2xl bg-white px-4 py-3 text-left text-sm font-semibold text-neutral-900 ring-1 ring-black/5 hover:bg-neutral-50"
                    >
                      {label}
                    </motion.button>
                  ))}

                  <a
                    href="#"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}

export const animatedNavbar: Variant = {
  id: "animated-navbar",
  title: "Animated Pill Navbar",
  description: "Navbar con píldora animada para el item activo (Framer Motion)",
  tags: ["navbar", "animated", "light", "framer-motion", "lucide"],
  preview: <AnimatedNavbarPreview />,
  code: `
"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"

export function AnimatedNavbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")
  const links = useMemo(() => ["Home", "Features", "Pricing", "Docs", "Contact"], [])

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
        >
          {/* ... Navbar content ... */}
        </motion.nav>
      </div>
    </header>
  )
}
`,
}
