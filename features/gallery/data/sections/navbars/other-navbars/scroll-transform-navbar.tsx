
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function ScrollTransformNavbarPreview() {
  const links = useMemo(
    () => ["Home", "Work", "Services", "Pricing", "Docs"],
    []
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // scroll state (works in Next.js client)
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Update state based on scroll position (more stable than raw window listener)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  // ensure closed on desktop resize (optional safety)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="w-full">
      {/* Make the preview scrollable so you can see the transform in your gallery */}
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div className="relative h-[460px] overflow-hidden rounded-[28px] bg-gradient-to-b from-neutral-50 to-neutral-100 ring-1 ring-black/5">
          {/* Fake page content */}
          <div className="absolute inset-0 overflow-auto">
            {/* Sticky navbar */}
            <div className="sticky top-0 z-40 px-3 pt-3">
              <motion.nav
                initial={false}
                animate={{
                  borderRadius: scrolled ? 22 : 28,
                  paddingTop: scrolled ? 10 : 14,
                  paddingBottom: scrolled ? 10 : 14,
                  backgroundColor: scrolled
                    ? "rgba(255,255,255,0.86)"
                    : "rgba(255,255,255,0.58)",
                  boxShadow: scrolled
                    ? "0 18px 60px rgba(0,0,0,0.14)"
                    : "0 10px 36px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 38 }}
                className="relative mx-auto max-w-5xl overflow-hidden ring-1 ring-black/5 backdrop-blur"
              >
                {/* subtle gradient bar */}
                <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_240px_at_20%_-40%,rgba(59,130,246,0.16),transparent_70%),radial-gradient(700px_220px_at_80%_0%,rgba(16,185,129,0.14),transparent_68%)]" />

                <div className="relative flex items-center justify-between gap-3 px-4 md:px-6">
                  {/* Brand */}
                  <a href="#" className="flex items-center gap-2">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-neutral-900">
                        Devwolf
                      </div>
                      <div className="text-xs text-neutral-500">
                        Glass transform
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
                          className={[
                            "rounded-2xl px-4 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-neutral-900 text-white"
                              : "text-neutral-700 hover:bg-neutral-900/5 hover:text-neutral-900",
                          ].join(" ")}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                    >
                      Get started
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setOpen((v) => !v)}
                      className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800"
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

                {/* Mobile dropdown */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative border-t border-black/5 md:hidden"
                    >
                      <div className="grid gap-2 px-4 pb-4 pt-3">
                        {links.map((label, i) => (
                          <motion.button
                            key={label}
                            type="button"
                            onClick={() => {
                              setActive(label);
                              setOpen(false);
                            }}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
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

            {/* Body content to scroll */}
            <div className="mx-auto max-w-5xl px-6 pb-10 pt-6">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-neutral-900">
                    Scroll demo
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    Scroll inside this preview container to see the navbar
                    compact, increase blur, and gain shadow like a premium
                    sticky header.
                  </div>
                </div>

                {Array.from({ length: 10 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white p-6 ring-1 ring-black/5"
                  >
                    <div className="text-sm font-semibold text-neutral-900">
                      Section {idx + 1}
                    </div>
                    <div className="mt-2 text-sm text-neutral-600">
                      Placeholder content for scroll. Your real site would have
                      sections, cards, or content blocks here.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft corner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
        </div>
      </div>
    </div>
  );
}

export const scrollTransformNavbar: Variant = {
  id: "scroll-transform-navbar",
  title: "Glassmorphism on Scroll",
  description: "Navbar que se transforma con el scroll (Framer Motion)",
  tags: ["navbar", "glassmorphism", "scroll", "framer-motion", "lucide"],
  preview: <ScrollTransformNavbarPreview />,
  code: `
"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"

export function ScrollTransformNavbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16)
  })

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div className="relative h-[460px] overflow-hidden rounded-[28px] bg-gradient-to-b from-neutral-50 to-neutral-100 ring-1 ring-black/5">
          <div className="absolute inset-0 overflow-auto">
            <div className="sticky top-0 z-40 px-3 pt-3">
              <motion.nav
                initial={false}
                animate={{
                  borderRadius: scrolled ? 22 : 28,
                  paddingTop: scrolled ? 10 : 14,
                  paddingBottom: scrolled ? 10 : 14,
                  backgroundColor: scrolled ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0.58)",
                  boxShadow: scrolled ? "0 18px 60px rgba(0,0,0,0.14)" : "0 10px 36px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 38 }}
                className="relative mx-auto max-w-5xl overflow-hidden ring-1 ring-black/5 backdrop-blur"
              >
                {/* ... Navbar content ... */}
              </motion.nav>
            </div>
            <div className="mx-auto max-w-5xl px-6 pb-10 pt-6">
              {/* ... Page content ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
}
