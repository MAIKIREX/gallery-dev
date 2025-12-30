"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Footprints,
  Phone,
  Search,
  ShoppingCart,
  Menu,
  X,
  Orbit,
  FileText,
  Home,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CalendarDays,
  MapPin,
  List,
  Map,
  ArrowRight,
  Sparkles,
  Star,
  Sparkle,
  Briefcase,
  Code2,
  Wrench,
  Shield,
  ArrowUpRight,
  Instagram,
  Github,
  Mail,
} from "lucide-react";
import type { Section } from "../../types";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

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

function FootwearNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  const links = useMemo(
    () => ["Home", "About Us", "Product", "Contact Us"],
    []
  );

  return (
    <header className="w-full bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Footprints className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-700">
              Footwear
            </span>
          </a>

          {/* Diagonal green shape (desktop) */}
          <div className="relative hidden h-10 flex-1 md:block">
            <div className="absolute inset-y-0 left-10 right-10 -skew-x-12 rounded-sm bg-emerald-600" />
          </div>

          {/* Phone */}
          <a
            href="tel:+9808123456"
            className="flex items-center gap-3 rounded-full bg-white px-2 py-1.5 text-sm font-semibold text-gray-700"
            aria-label="Call phone"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
              <Phone className="h-5 w-5 text-emerald-600" />
            </span>
            <span className="hidden sm:inline">9808123456</span>
          </a>
        </div>
      </div>

      {/* Menu bar */}
      <div className="shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Left: hamburger (mobile) + links (desktop) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((label) => {
                const isActive = label === "Home";
                return (
                  <a
                    key={label}
                    href="#"
                    className={[
                      "rounded-md px-5 py-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-600 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="mx-auto w-full max-w-6xl px-4 py-3">
              <div className="grid gap-2">
                {links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function L2ToitureNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const groups = [
    {
      id: "services",
      label: "Services",
      items: [
        "Réparation toiture",
        "Toiture commerciale",
        "Toiture résidentielle",
        "Inspection",
        "Urgence toiture",
        "Soumission toiture",
      ],
    },
    {
      id: "zones",
      label: "Zones résidentielles",
      items: [
        "Toiture Charlesbourg",
        "Toiture Beauport",
        "Toiture Lévis",
        "Toiture Lac-Beauport",
        "Toiture Cap-Rouge",
        "Toiture Lac-Saint-Joseph",
        "Toiture Saint-Nicolas",
        "Toiture Sillery",
        "Toutes les zones desservies",
      ],
    },
    {
      id: "types",
      label: "Types de toit",
      items: [
        "Plat",
        "Blanc",
        "Bardeaux d’asphalte",
        "Membrane élastomère",
        "Toit en pente",
        "Tous les types de toit",
      ],
    },
    {
      id: "apropos",
      label: "À propos",
      items: [
        "Notre entreprise",
        "Nos clients",
        "Nos produits",
        "Notre équipe",
      ],
    },
  ];

  const simpleLinks = [
    { label: "Réalisations", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Nous joindre", href: "#" },
  ];

  function toggleGroup(id: string) {
    setOpenGroup((curr) => (curr === id ? null : id));
  }

  return (
    <header className="w-full">
      {/* Bar sticky */}
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white">
              <Home className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">
                L2 Toitures
              </div>
              <div className="text-xs text-neutral-500">Experts en toiture</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {/* Group dropdowns (hover) */}
            {groups.slice(0, 3).map((g) => (
              <div key={g.id} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
                >
                  {g.label}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>

                {/* Mega dropdown */}
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[360px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="text-xs font-semibold text-neutral-500">
                    {g.label}
                  </div>
                  <div className="mt-2 grid gap-1">
                    {g.items.map((it) => (
                      <a
                        key={it}
                        href="#"
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                      >
                        <span>{it}</span>
                        <ChevronRight className="h-4 w-4 text-neutral-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Simple */}
            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Réalisations
            </a>

            {/* À propos dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                À propos
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                {groups
                  .find((x) => x.id === "apropos")!
                  .items.map((it) => (
                    <a
                      key={it}
                      href="#"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                    >
                      <span>{it}</span>
                      <ChevronRight className="h-4 w-4 text-neutral-400" />
                    </a>
                  ))}
              </div>
            </div>

            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Carrières
            </a>
            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Nous joindre
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* CTA desktop */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              <FileText className="h-4 w-4" />
              Ma soumission
            </a>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-neutral-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    L2 Toitures
                  </div>
                  <div className="text-xs text-neutral-500">Menu</div>
                </div>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-auto px-4 py-4">
              {/* Accordion groups */}
              <div className="grid gap-2">
                {groups.map((g) => {
                  const isOpen = openGroup === g.id;
                  return (
                    <div
                      key={g.id}
                      className="rounded-2xl border border-neutral-200"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-neutral-900"
                        onClick={() => toggleGroup(g.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{g.label}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-neutral-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-neutral-500" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="border-t border-neutral-200 p-2">
                          {g.items.map((it) => (
                            <a
                              key={it}
                              href="#"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                            >
                              <span>{it}</span>
                              <ChevronRight className="h-4 w-4 text-neutral-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Simple links */}
              <div className="mt-4 grid gap-2">
                {simpleLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <FileText className="h-4 w-4" />
                Ma soumission
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to show it nicely inside your preview area */}
      <div className="h-4 bg-white" />
    </header>
  );
}

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

type MegaGroupId = "services" | "solutions" | "resources";

const megaData: Record<
  MegaGroupId,
  {
    title: string;
    subtitle: string;
    categories: { id: string; label: string; icon: any; desc: string }[];
    itemsByCategory: Record<string, { label: string; hint: string }[]>;
    cta: { label: string; hint: string };
  }
> = {
  services: {
    title: "Services",
    subtitle: "Everything to build & scale your product",
    categories: [
      {
        id: "design",
        label: "Product Design",
        icon: Briefcase,
        desc: "UX, UI and systems",
      },
      {
        id: "dev",
        label: "Development",
        icon: Code2,
        desc: "Web & mobile engineering",
      },
      {
        id: "ops",
        label: "Operations",
        icon: Wrench,
        desc: "DevOps and automation",
      },
    ],
    itemsByCategory: {
      design: [
        { label: "Design Systems", hint: "Components & tokens" },
        { label: "Landing Pages", hint: "Marketing + conversion" },
        { label: "Prototyping", hint: "Fast iteration" },
      ],
      dev: [
        { label: "Next.js Apps", hint: "App Router + SSR" },
        { label: "API Integrations", hint: "Auth, payments, maps" },
        { label: "Performance", hint: "Core Web Vitals" },
      ],
      ops: [
        { label: "CI/CD", hint: "Pipelines + releases" },
        { label: "Kubernetes", hint: "Deploy & scale" },
        { label: "Observability", hint: "Metrics & alerts" },
      ],
    },
    cta: { label: "Book a call", hint: "Let’s plan your roadmap" },
  },
  solutions: {
    title: "Solutions",
    subtitle: "Secure, reliable and modern setups",
    categories: [
      {
        id: "security",
        label: "Security",
        icon: Shield,
        desc: "Policies & hardening",
      },
      {
        id: "platform",
        label: "Platform",
        icon: Wrench,
        desc: "Cloud & infrastructure",
      },
      {
        id: "delivery",
        label: "Delivery",
        icon: Code2,
        desc: "CI/CD + GitOps",
      },
    ],
    itemsByCategory: {
      security: [
        { label: "Zero Trust", hint: "mTLS + intentions" },
        { label: "Secrets", hint: "Vault injection" },
        { label: "IAM", hint: "Keycloak & SSO" },
      ],
      platform: [
        { label: "Rancher", hint: "Fleet + clusters" },
        { label: "Proxmox", hint: "VMs + HA" },
        { label: "Storage", hint: "S3 + backup" },
      ],
      delivery: [
        { label: "Tekton", hint: "Pipelines + triggers" },
        { label: "GitOps", hint: "Repo-based deploys" },
        { label: "Canary", hint: "Safer releases" },
      ],
    },
    cta: { label: "See playbooks", hint: "Ready-to-use patterns" },
  },
  resources: {
    title: "Resources",
    subtitle: "Learn and ship faster",
    categories: [
      {
        id: "guides",
        label: "Guides",
        icon: Briefcase,
        desc: "Step-by-step docs",
      },
      {
        id: "templates",
        label: "Templates",
        icon: Code2,
        desc: "Starter kits",
      },
      {
        id: "community",
        label: "Community",
        icon: Shield,
        desc: "Events & support",
      },
    ],
    itemsByCategory: {
      guides: [
        { label: "UI Patterns", hint: "Navbars & cards" },
        { label: "DevOps", hint: "CI/CD & K8s" },
        { label: "Security", hint: "Auth & secrets" },
      ],
      templates: [
        { label: "Next.js Layouts", hint: "App Router-ready" },
        { label: "Dashboards", hint: "shadcn friendly" },
        { label: "Landing Kits", hint: "Hero + CTA" },
      ],
      community: [
        { label: "Discord", hint: "Ask + share" },
        { label: "Workshops", hint: "Hands-on labs" },
        { label: "Newsletter", hint: "Weekly tips" },
      ],
    },
    cta: { label: "Join the community", hint: "Get updates" },
  },
};

function MegaMenuNavbarPreview() {
  const topLinks = useMemo(() => ["Pricing", "Docs"], []);
  const groups = useMemo(
    () => ["services", "solutions", "resources"] as MegaGroupId[],
    []
  );
  const [openGroup, setOpenGroup] = useState<MegaGroupId | null>(null);
  const [category, setCategory] = useState("design");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isOpen = (id: MegaGroupId) => openGroup === id;

  const closeAll = () => {
    setOpenGroup(null);
    setMobileOpen(false);
  };

  const current = openGroup ? megaData[openGroup] : null;
  const items = current ? current.itemsByCategory[category] ?? [] : [];

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative rounded-[28px] bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
          <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white">
                <Code2 className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">
                  Devwolf UI
                </div>
                <div className="text-xs text-neutral-500">Mega menu</div>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {groups.map((g) => {
                const active = isOpen(g);
                const label = megaData[g].title;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      setOpenGroup((curr) => (curr === g ? null : g));
                      // set a sensible default category per group
                      const firstCat = megaData[g].categories[0]?.id;
                      if (firstCat) setCategory(firstCat);
                    }}
                    className={[
                      "relative inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium",
                      active
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-neutral-900/5 hover:text-neutral-900",
                    ].join(" ")}
                    aria-expanded={active}
                    aria-label={`${label} menu`}
                  >
                    {label}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                );
              })}

              {topLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-900/5 hover:text-neutral-900"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Right */}
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
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop mega panel */}
          <AnimatePresence>
            {openGroup && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative hidden border-t border-black/5 md:block"
              >
                <div className="grid gap-4 p-4 md:grid-cols-[280px_1fr_260px] md:p-6">
                  {/* Left categories */}
                  <div className="rounded-3xl bg-white ring-1 ring-black/5">
                    <div className="px-4 pb-2 pt-4">
                      <div className="text-sm font-semibold text-neutral-900">
                        {current?.title}
                      </div>
                      <div className="mt-1 text-xs text-neutral-500">
                        {current?.subtitle}
                      </div>
                    </div>

                    <div className="grid gap-1 p-2">
                      {current?.categories.map((c) => {
                        const Icon = c.icon;
                        const selected = category === c.id;
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setCategory(c.id)}
                            className={[
                              "flex items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors",
                              selected
                                ? "bg-neutral-900 text-white"
                                : "hover:bg-neutral-50",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "grid h-10 w-10 place-items-center rounded-2xl ring-1",
                                selected
                                  ? "bg-white/10 ring-white/15"
                                  : "bg-neutral-100 ring-black/5",
                              ].join(" ")}
                            >
                              <Icon
                                className={
                                  selected
                                    ? "h-5 w-5 text-white"
                                    : "h-5 w-5 text-neutral-900"
                                }
                              />
                            </span>

                            <span className="min-w-0">
                              <span
                                className={
                                  selected
                                    ? "block text-sm font-semibold"
                                    : "block text-sm font-semibold text-neutral-900"
                                }
                              >
                                {c.label}
                              </span>
                              <span
                                className={
                                  selected
                                    ? "mt-0.5 block text-xs text-white/70"
                                    : "mt-0.5 block text-xs text-neutral-500"
                                }
                              >
                                {c.desc}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Middle items */}
                  <div className="rounded-3xl bg-white ring-1 ring-black/5">
                    <div className="flex items-center justify-between px-5 pt-5">
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          Explore
                        </div>
                        <div className="mt-1 text-xs text-neutral-500">
                          Pick a category to update this list
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenGroup(null)}
                        className="rounded-2xl px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                      >
                        Close
                      </button>
                    </div>

                    <div className="mt-3 grid gap-2 p-3 md:grid-cols-2 md:p-5">
                      {items.map((it) => (
                        <a
                          key={it.label}
                          href="#"
                          className="group flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-4 ring-1 ring-black/5 hover:bg-neutral-100"
                        >
                          <div>
                            <div className="text-sm font-semibold text-neutral-900">
                              {it.label}
                            </div>
                            <div className="mt-1 text-xs text-neutral-500">
                              {it.hint}
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA card */}
                  <div className="rounded-3xl bg-neutral-900 text-white ring-1 ring-black/10">
                    <div className="p-5">
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10">
                        <Shield className="h-4 w-4" />
                        Recommended
                      </div>

                      <div className="mt-4 text-lg font-semibold leading-tight">
                        {current?.cta.label}
                      </div>
                      <div className="mt-2 text-sm text-white/70">
                        {current?.cta.hint}
                      </div>

                      <a
                        href="#"
                        onClick={() => setOpenGroup(null)}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </a>

                      <div className="mt-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                        <div className="text-xs font-semibold text-white/90">
                          Tip
                        </div>
                        <div className="mt-1 text-xs text-white/70">
                          This mega menu updates the right content when you
                          switch categories.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile menu (accordion style mega) */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="border-t border-black/5 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {(groups as MegaGroupId[]).map((g) => {
                    const label = megaData[g].title;
                    const active = isOpen(g);

                    return (
                      <div
                        key={g}
                        className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setOpenGroup((curr) => (curr === g ? null : g));
                            const firstCat = megaData[g].categories[0]?.id;
                            if (firstCat) setCategory(firstCat);
                          }}
                          className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-neutral-900"
                          aria-expanded={active}
                        >
                          <span>{label}</span>
                          <ChevronDown
                            className={
                              active
                                ? "h-4 w-4 rotate-180 transition-transform"
                                : "h-4 w-4 transition-transform"
                            }
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {active && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="border-t border-black/5"
                            >
                              <div className="p-3">
                                <div className="grid gap-2">
                                  {megaData[g].categories.map((c) => {
                                    const Icon = c.icon;
                                    const selected = category === c.id;
                                    return (
                                      <button
                                        key={c.id}
                                        type="button"
                                        onClick={() => setCategory(c.id)}
                                        className={[
                                          "flex items-center gap-3 rounded-2xl px-3 py-3 text-left ring-1 ring-black/5",
                                          selected
                                            ? "bg-neutral-900 text-white"
                                            : "bg-neutral-50 hover:bg-neutral-100",
                                        ].join(" ")}
                                      >
                                        <span
                                          className={
                                            selected
                                              ? "grid h-9 w-9 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10"
                                              : "grid h-9 w-9 place-items-center rounded-2xl bg-white ring-1 ring-black/5"
                                          }
                                        >
                                          <Icon
                                            className={
                                              selected
                                                ? "h-5 w-5 text-white"
                                                : "h-5 w-5 text-neutral-900"
                                            }
                                          />
                                        </span>
                                        <span className="min-w-0">
                                          <span className="block text-sm font-semibold">
                                            {c.label}
                                          </span>
                                          <span
                                            className={
                                              selected
                                                ? "mt-0.5 block text-xs text-white/70"
                                                : "mt-0.5 block text-xs text-neutral-500"
                                            }
                                          >
                                            {c.desc}
                                          </span>
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>

                                <div className="mt-3 rounded-2xl bg-neutral-900 p-3 text-white ring-1 ring-black/10">
                                  <div className="text-xs font-semibold text-white/90">
                                    {megaData[g].cta.label}
                                  </div>
                                  <div className="mt-1 text-xs text-white/70">
                                    {megaData[g].cta.hint}
                                  </div>
                                  <a
                                    href="#"
                                    onClick={closeAll}
                                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                                  >
                                    Continue
                                    <ArrowRight className="h-4 w-4" />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {topLinks.map((l) => (
                    <a
                      key={l}
                      href="#"
                      onClick={closeAll}
                      className="rounded-3xl bg-white px-4 py-4 text-sm font-semibold text-neutral-900 ring-1 ring-black/5 hover:bg-neutral-50"
                    >
                      {l}
                    </a>
                  ))}

                  <a
                    href="#"
                    onClick={closeAll}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-neutral-900 px-4 py-4 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

function CinematicOverlayNavbarPreview() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => ["Home", "Work", "Studio", "Services", "Gallery", "Contact"],
    []
  );

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative overflow-hidden rounded-[28px] bg-neutral-950 text-white ring-1 ring-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.50)]">
          {/* top bar */}
          <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">
                  Devwolf
                </div>
                <div className="text-xs text-white/60">Cinematic overlay</div>
              </div>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              <span className="text-xs text-white/60">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/15"
                aria-label="Open overlay menu"
              >
                Open
                <span className="grid h-9 w-11 place-items-center rounded-2xl bg-white/10">
                  <Menu className="h-5 w-5" />
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[90] px-4 py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* backdrop */}
                <motion.button
                  aria-label="Close overlay"
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* panel */}
                <motion.div
                  className="relative mx-auto h-full w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#142055] shadow-2xl ring-1 ring-white/10"
                  initial={{ y: 18, scale: 0.98, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 16, scale: 0.98, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                >
                  {/* animated gradient / spotlight */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-70"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage:
                        "radial-gradient(600px 400px at 10% 10%, rgba(59,130,246,0.55), transparent 70%), radial-gradient(700px 450px at 90% 20%, rgba(236,72,153,0.45), transparent 70%), radial-gradient(700px 500px at 50% 90%, rgba(16,185,129,0.40), transparent 70%)",
                      backgroundSize: "140% 140%",
                    }}
                  />

                  {/* top row */}
                  <div className="relative flex items-start justify-between gap-3 px-6 py-6">
                    <div className="leading-tight text-white">
                      <div className="text-lg font-black tracking-wide">
                        DEVWOLF
                      </div>
                      <div className="text-sm font-medium opacity-85">MENU</div>
                    </div>

                    <button
                      onClick={() => setOpen(false)}
                      className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* content */}
                  <div className="relative grid h-[calc(100%-88px)] grid-cols-1 gap-6 px-6 pb-6 md:grid-cols-[1fr_420px]">
                    {/* big links */}
                    <div className="flex flex-col">
                      <div className="space-y-5 md:space-y-6">
                        {links.map((label, i) => (
                          <motion.a
                            key={label}
                            href="#"
                            onClick={() => setOpen(false)}
                            className="group flex items-center gap-4 text-[44px] font-light leading-none text-white md:text-[58px]"
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 12, opacity: 0 }}
                            transition={{ duration: 0.22, delay: i * 0.035 }}
                          >
                            <span className="text-[#F2C46D] opacity-0 transition-opacity group-hover:opacity-100">
                              •
                            </span>
                            <span className="transition-opacity group-hover:opacity-95">
                              {label}
                            </span>
                            <span className="ml-auto hidden md:inline-flex items-center gap-1 text-sm text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                              Explore <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </motion.a>
                        ))}
                      </div>

                      {/* socials */}
                      <div className="mt-auto pt-6">
                        <div className="flex items-center gap-2">
                          <button
                            className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
                            aria-label="Instagram"
                          >
                            <Instagram className="h-5 w-5" />
                          </button>
                          <button
                            className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </button>
                          <button
                            className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
                            aria-label="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-4 text-xs text-white/70">
                          Terms • Privacy • © 2025
                        </div>
                      </div>
                    </div>

                    {/* right panel (desktop) */}
                    <div className="hidden md:flex md:flex-col md:justify-end">
                      <div className="rounded-[24px] bg-white/10 p-4 ring-1 ring-white/10">
                        <div className="text-sm font-semibold text-white">
                          Featured
                        </div>
                        <div className="mt-2 text-sm text-white/70">
                          Add a card, image, or quick actions to make the
                          overlay feel like a real “menu page”.
                        </div>

                        <div className="mt-4 overflow-hidden rounded-[20px] bg-white/10 ring-1 ring-white/10">
                          <div className="aspect-[16/10] w-full bg-gradient-to-br from-white/20 to-white/5" />
                          <div className="px-4 py-3 text-white">
                            <div className="text-lg font-light">
                              Cinematic overlay
                            </div>
                            <div className="mt-1 text-xs text-white/70">
                              Stagger links + animated spotlight background
                            </div>
                          </div>
                        </div>

                        <a
                          href="#"
                          onClick={() => setOpen(false)}
                          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                        >
                          Quick action
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    {/* mobile feature card */}
                    <div className="md:hidden">
                      <div className="rounded-[20px] bg-white/10 p-4 ring-1 ring-white/10">
                        <div className="text-sm font-semibold text-white">
                          Featured
                        </div>
                        <div className="mt-2 text-xs text-white/70">
                          On mobile this section appears below the links.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

function MorphingSearchNavbarPreview() {
  const links = useMemo(
    () => ["Home", "Work", "Services", "Pricing", "Docs"],
    []
  );
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">
                  Devwolf UI
                </div>
                <div className="text-xs text-neutral-500">Morphing search</div>
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

            {/* Right area: morphing search + CTA */}
            <div className="flex items-center gap-2">
              {/* Morphing search (desktop) */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  {/* Collapsed button */}
                  <AnimatePresence initial={false} mode="wait">
                    {!searchOpen ? (
                      <motion.button
                        key="search-btn"
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800"
                        aria-label="Open search"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.16 }}
                      >
                        <Search className="h-5 w-5" />
                      </motion.button>
                    ) : (
                      <motion.div
                        key="search-input"
                        layout
                        className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm"
                        initial={{ width: 44, opacity: 0 }}
                        animate={{ width: 360, opacity: 1 }}
                        exit={{ width: 44, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 36,
                        }}
                      >
                        <div className="grid h-11 w-11 place-items-center text-neutral-600">
                          <Search className="h-5 w-5" />
                        </div>

                        <input
                          autoFocus
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search docs, articles, services..."
                          className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            setQuery("");
                            setSearchOpen(false);
                          }}
                          className="mr-2 grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
                          aria-label="Close search"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA (desktop) */}
              <a
                href="#"
                className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile buttons */}
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-white text-neutral-900 ring-1 ring-black/10 hover:bg-neutral-50"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search sheet */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative border-t border-black/5 md:hidden"
              >
                <div className="px-4 py-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/10 shadow-sm">
                    <Search className="h-4 w-4 text-neutral-600" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setSearchOpen(false);
                      }}
                      className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
                      aria-label="Close search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* simple suggestions */}
                  <div className="mt-3 grid gap-2">
                    {[
                      "Navbar patterns",
                      "Framer Motion",
                      "Pricing",
                      "Docs",
                    ].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="rounded-2xl bg-neutral-50 px-4 py-3 text-left text-sm font-semibold text-neutral-900 ring-1 ring-black/5 hover:bg-neutral-100"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {mobileOpen && (
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
                        setMobileOpen(false);
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
                    onClick={() => setMobileOpen(false)}
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

function CollapseOnScrollNavbarPreview() {
  const links = useMemo(
    () => ["Home", "Work", "Services", "Pricing", "Docs", "Contact"],
    []
  );

  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  // Detect scroll direction
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const atTop = y <= 8;

      if (atTop) {
        setCollapsed(false);
      } else if (goingDown) {
        setCollapsed(true);
      } else {
        // scrolling up but not at top -> keep compact (nice UX), you can choose to expand if you want
        // If you want expand when scrolling up (even if not at top), uncomment next line:
        // setCollapsed(false)
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Note: in a real page this should be sticky top-0; in gallery preview we keep it static */}
        <motion.nav
          initial={false}
          animate={{
            paddingTop: collapsed ? 10 : 16,
            paddingBottom: collapsed ? 10 : 16,
            borderRadius: collapsed ? 22 : 28,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 38 }}
          className="
            relative overflow-hidden
            bg-white/70 backdrop-blur
            ring-1 ring-black/5
            shadow-[0_22px_70px_rgba(0,0,0,0.10)]
          "
        >
          {/* soft background */}
          <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_260px_at_20%_-20%,rgba(59,130,246,0.14),transparent_70%),radial-gradient(850px_240px_at_80%_0%,rgba(16,185,129,0.12),transparent_68%)]" />

          {/* Content row */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 md:px-6">
            {/* Left brand (small) */}
            <a href="#" className="flex items-center gap-2 py-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">
                  Devwolf UI
                </div>
                <div className="text-xs text-neutral-500">
                  Collapse on scroll
                </div>
              </div>
            </a>

            {/* Center logo (hides when collapsed) */}
            <div className="flex justify-center">
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.div
                    key="center-logo"
                    initial={{ y: -12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="select-none"
                    aria-label="Center logo"
                  >
                    <div className="text-center leading-none">
                      <div className="text-base font-black tracking-wide text-neutral-900 md:text-lg">
                        DEVWOLF
                      </div>
                      <div className="text-xs font-semibold tracking-wide text-neutral-500">
                        NAVBAR
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right side: links */}
            <div className="flex justify-end">
              <div className="hidden items-center gap-2 md:flex">
                {links.map((label) => {
                  const isActive = active === label;
                  const isHover = hovered === label;

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setActive(label)}
                      onMouseEnter={() => setHovered(label)}
                      onMouseLeave={() => setHovered(null)}
                      className={[
                        "relative rounded-2xl px-4 py-2 text-sm font-medium",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-700 hover:text-neutral-900",
                      ].join(" ")}
                    >
                      {/* subtle hover bg */}
                      <span className="absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-200 hover:bg-neutral-900/5" />

                      <span className="relative z-10">{label}</span>

                      {/* Active underline stays */}
                      {isActive && (
                        <motion.span
                          layoutId="active-underline"
                          className="absolute left-4 right-4 -bottom-1 h-[3px] rounded-full bg-neutral-900"
                          transition={{
                            type: "spring",
                            stiffness: 520,
                            damping: 40,
                          }}
                        />
                      )}

                      {/* Hover underline draws L->R (only if not active) */}
                      {!isActive && isHover && (
                        <motion.span
                          key={`${label}-hover`}
                          className="absolute left-4 right-4 -bottom-1 h-[3px] origin-left rounded-full bg-neutral-900"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: simple row of links (scroll behavior still works for center logo) */}
          <div className="relative border-t border-black/5 md:hidden">
            <div className="flex flex-wrap items-center justify-center gap-2 px-3 py-3">
              {links.map((label) => {
                const isActive = active === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    className={[
                      "relative rounded-2xl px-3 py-2 text-sm font-semibold",
                      isActive ? "text-neutral-900" : "text-neutral-700",
                    ].join(" ")}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-1 h-[3px] rounded-full bg-neutral-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.nav>

        {/* helper copy for preview */}
        <div className="mt-6 rounded-3xl bg-neutral-50 p-5 ring-1 ring-black/5">
          <div className="text-sm font-semibold text-neutral-900">
            How to test in preview
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            In your real page, make this navbar{" "}
            <span className="font-mono">sticky top-0</span>. Scroll down → it
            collapses and hides the center logo. Scroll back to the very top →
            it expands again.
          </div>
        </div>
      </div>
    </header>
  );
}

export const navbarsSection: Section = {
  id: "navbars",
  name: "Navbars",
  collections: [
    {
      id: "pill-navbars",
      title: "Pill / Floating Navbars",
      description: "Rounded pill-style navigation bars for modern portfolios",
      variants: [
        {
          id: "pill-navbar-responsive",
          title: "Pill Navbar (Responsive)",
          description:
            "Pill navbar with centered links and email pill, with mobile dropdown menu",
          tags: ["navbar", "pill", "modern", "responsive", "lucide"],
          preview: <PillNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Orbit, Menu, X } from 'lucide-react'

export default function PillNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-4xl">
        <nav className="relative flex items-center justify-between rounded-full bg-neutral-900/95 px-3 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur">
          <a
            href="#"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-900 shadow-sm ring-1 ring-black/5"
            aria-label="Home"
          >
            <Orbit className="h-5 w-5" />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Work</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">About</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Playground</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Resource</a>
          </div>

          <a
            href="mailto:ihyaet@gmail.com"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-black/5 hover:bg-white/95"
          >
            ihyaet@gmail.com
          </a>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {open && (
            <div className="absolute left-0 top-full z-50 mt-3 w-full rounded-3xl bg-neutral-950/95 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur md:hidden">
              <div className="grid gap-2">
                {['Work', 'About', 'Playground', 'Resource'].map((item) => (
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
                  className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 ring-1 ring-black/5 hover:bg-white/95"
                >
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
        },
      ],
    },
    {
      id: "ecommerce-navbars",
      title: "E-commerce / Store Navbars",
      description: "Store navbars with topbar + phone + search + cart badge",
      variants: [
        {
          id: "footwear-navbar-responsive",
          title: "Footwear Navbar (Responsive)",
          description:
            "Two-row store navbar with diagonal topbar and mobile hamburger menu",
          tags: ["navbar", "ecommerce", "store", "topbar", "responsive"],
          preview: <FootwearNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { Footprints, Phone, Search, ShoppingCart, Menu, X } from 'lucide-react'

export default function FootwearNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const links = useMemo(() => ['Home', 'About Us', 'Product', 'Contact Us'], [])

  // (opcional) demo: sumar carrito
  // const addToCart = () => setCartCount(c => c + 1)

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

          <a href="tel:+9808123456" className="flex items-center gap-3 rounded-full bg-white px-2 py-1.5 text-sm font-semibold text-gray-700">
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
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 md:hidden"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map(label => {
                const isActive = label === 'Home'
                return (
                  <a
                    key={label}
                    href="#"
                    className={[
                      'rounded-md px-5 py-2 text-sm font-semibold transition-colors',
                      isActive ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>

            <button className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Cart">
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
                {links.map(label => (
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
`,
        },
        {
          id: "hep-vintage-split-navbar",
          title: "HEP Vintage Style (Responsive)",
          description:
            "Split links on desktop + centered logo + mobile overlay hamburger menu",
          tags: [
            "navbar",
            "minimal",
            "center-logo",
            "overlay",
            "responsive",
            "lucide",
          ],
          preview: <HepVintageNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart, CalendarDays, MapPin } from 'lucide-react'

export default function HepVintageNavbar() {
  const [open, setOpen] = useState(false)

  const leftLinks = [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Shop', href: '#' },
  ]

  const rightLinks = [
    { label: 'Events', href: '#', icon: CalendarDays },
    { label: 'Find Us', href: '#', icon: MapPin },
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

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-neutral-900" />
          </button>

          <a href="#" className="select-none text-center text-lg font-black tracking-[0.35em] text-neutral-900 md:text-xl">
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
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="text-sm font-semibold tracking-[0.25em] text-neutral-900">HEP MENU</div>
              <button className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {leftLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {rightLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
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
  )
}
`,
        },
        {
          id: "belle-oaks-overlay-navbar",
          title: "Belle Oaks Style (Responsive)",
          description:
            "Apartments dropdown + fullscreen menu overlay (responsive)",
          tags: ["navbar", "overlay", "dropdown", "responsive", "lucide"],
          preview: <BelleOaksNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Map, List } from 'lucide-react'

export default function BelleOaksNavbar() {
  const [apartmentsOpen, setApartmentsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // ... (pega aquí el mismo JSX del preview para que el code muestre todo el proceso completo)
  return <div />
}
`,
        },
      ],
    },
    {
      id: "business-navbars",
      title: "Business / Mega Menu Navbars",
      description:
        "Navbars for services companies with grouped mega-menus and a CTA",
      variants: [
        {
          id: "l2toiture-megamenu-responsive",
          title: "L2 Toiture Style (Responsive)",
          description:
            "Mega-menu categories + CTA, with mobile accordion hamburger menu",
          tags: [
            "navbar",
            "megamenu",
            "services",
            "cta",
            "responsive",
            "lucide",
          ],
          preview: <L2ToitureNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Menu, X, Home, FileText, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'

export default function L2ToitureNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const groups = [
    { id: 'services', label: 'Services', items: ['Réparation toiture','Toiture commerciale','Toiture résidentielle','Inspection','Urgence toiture','Soumission toiture'] },
    { id: 'zones', label: 'Zones résidentielles', items: ['Toiture Charlesbourg','Toiture Beauport','Toiture Lévis','Toiture Lac-Beauport','Toiture Cap-Rouge','Toiture Lac-Saint-Joseph','Toiture Saint-Nicolas','Toiture Sillery','Toutes les zones desservies'] },
    { id: 'types', label: 'Types de toit', items: ['Plat','Blanc',"Bardeaux d’asphalte",'Membrane élastomère','Toit en pente','Tous les types de toit'] },
    { id: 'apropos', label: 'À propos', items: ['Notre entreprise','Nos clients','Nos produits','Notre équipe'] },
  ]

  const simpleLinks = [
    { label: 'Réalisations', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Nous joindre', href: '#' },
  ]

  const toggleGroup = (id: string) => setOpenGroup(curr => (curr === id ? null : id))

  return (
    // Pega aquí el mismo JSX del preview (idéntico)
    // (por espacio, en tu galería queda completo en el archivo real)
    <div />
  )
}
`,
        },
      ],
    },
    {
      id: "animated-navbars",
      title: "Animated Navbars",
      description: "Navbars with motion + smooth interactions",
      variants: [
        {
          id: "collapse-logo-on-scroll",
          title: "Collapse on Scroll (Hide Center Logo)",
          description:
            "Scroll down collapses navbar + hides center logo (top→down). Hover underline draws L→R; active underline stays.",
          tags: [
            "navbar",
            "scroll",
            "collapse",
            "underline",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <CollapseOnScrollNavbarPreview />,
          code: `'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function CollapseOnScrollNavbar() {
  const links = useMemo(() => ['Home', 'Work', 'Services', 'Pricing', 'Docs', 'Contact'], [])
  const [active, setActive] = useState('Home')
  const [hovered, setHovered] = useState<string | null>(null)
  const [collapsed, setCollapsed] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      const atTop = y <= 8

      if (atTop) setCollapsed(false)
      else if (goingDown) setCollapsed(true)

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-3 z-50 px-4">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: collapsed ? 10 : 16,
          paddingBottom: collapsed ? 10 : 16,
          borderRadius: collapsed ? 22 : 28,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 38 }}
        className="relative mx-auto max-w-6xl overflow-hidden bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_22px_70px_rgba(0,0,0,0.10)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_260px_at_20%_-20%,rgba(59,130,246,0.14),transparent_70%),radial-gradient(850px_240px_at_80%_0%,rgba(16,185,129,0.12),transparent_68%)]" />

        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2 py-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">Devwolf UI</div>
              <div className="text-xs text-neutral-500">Collapse on scroll</div>
            </div>
          </a>

          <div className="flex justify-center">
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.div
                  key="center-logo"
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="select-none"
                >
                  <div className="text-center leading-none">
                    <div className="text-base font-black tracking-wide text-neutral-900 md:text-lg">DEVWOLF</div>
                    <div className="text-xs font-semibold tracking-wide text-neutral-500">NAVBAR</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-end">
            <div className="hidden items-center gap-2 md:flex">
              {links.map((label) => {
                const isActive = active === label
                const isHover = hovered === label

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    onMouseEnter={() => setHovered(label)}
                    onMouseLeave={() => setHovered(null)}
                    className={'relative rounded-2xl px-4 py-2 text-sm font-medium ' + (isActive ? 'text-neutral-900' : 'text-neutral-700 hover:text-neutral-900')}
                  >
                    <span className="absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-200 hover:bg-neutral-900/5" />
                    <span className="relative z-10">{label}</span>

                    {isActive && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute left-4 right-4 -bottom-1 h-[3px] rounded-full bg-neutral-900"
                        transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                      />
                    )}

                    {!isActive && isHover && (
                      <motion.span
                        key={label + '-hover'}
                        className="absolute left-4 right-4 -bottom-1 h-[3px] origin-left rounded-full bg-neutral-900"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative border-t border-black/5 md:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2 px-3 py-3">
            {links.map((label) => {
              const isActive = active === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className={'relative rounded-2xl px-3 py-2 text-sm font-semibold ' + (isActive ? 'text-neutral-900' : 'text-neutral-700')}
                >
                  <span>{label}</span>
                  {isActive && <span className="absolute left-3 right-3 -bottom-1 h-[3px] rounded-full bg-neutral-900" />}
                </button>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
`,
        },
        {
          id: "animated-navbar-spring",
          title: "Animated Navbar (Spring Active Tab)",
          description:
            "Animated active pill (layoutId), mobile dropdown with height animation and icon morph",
          tags: [
            "navbar",
            "animated",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <AnimatedNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'

export default function AnimatedNavbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const links = useMemo(() => ['Home', 'Features', 'Pricing', 'Docs', 'Contact'], [])

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
        >
          {/* animated subtle glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            animate={{ backgroundPositionX: ['0%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(16,185,129,0.14), rgba(59,130,246,0.14), rgba(244,63,94,0.12))',
              backgroundSize: '200% 100%',
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">Devwolf UI</div>
                <div className="text-xs text-neutral-500">Animated navbar demo</div>
              </div>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((label) => {
                const isActive = active === label
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    className="relative rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                  >
                    <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 hover:opacity-100 bg-neutral-900/5" />
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-2xl bg-neutral-900"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className={'relative z-10 ' + (isActive ? 'text-white' : '')}>
                      {label}
                    </span>
                  </button>
                )
              })}
            </div>

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

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative border-t border-black/5 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  {links.map((label, i) => (
                    <motion.button
                      key={label}
                      type="button"
                      onClick={() => {
                        setActive(label)
                        setOpen(false)
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
  )
}
`,
        },
        {
          id: "spotlight-navbar-search",
          title: "Spotlight Navbar (Search + Glow)",
          description:
            "Dark navbar with animated spotlight glow, optional search bar, and animated mobile dropdown",
          tags: [
            "navbar",
            "animated",
            "spotlight",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <SpotlightNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Search, ArrowRight, Sparkle, Star } from 'lucide-react'

export default function SpotlightNavbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const links = useMemo(() => ['Work', 'Services', 'Cases', 'Blog', 'Contact'], [])

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] bg-neutral-950 text-white ring-1 ring-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            animate={{ x: ['-50%', '-42%', '-50%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(236,72,153,0.65), rgba(59,130,246,0.45), rgba(16,185,129,0.35))',
            }}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-4 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Sparkle className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Devwolf</div>
                <div className="text-xs text-white/60">Spotlight nav</div>
              </div>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((label) => (
                <a key={label} href="#" className="group relative rounded-2xl px-4 py-2 text-sm font-medium text-white/80 hover:text-white">
                  <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/10" />
                  <span className="relative">{label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(v => !v)}
                className="hidden md:grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <Search className="h-5 w-5" />
              </button>

              <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/95">
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="relative hidden border-t border-white/10 md:block"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none" placeholder="Search…" />
                    <span className="rounded-xl bg-white/10 px-2 py-1 text-xs text-white/60 ring-1 ring-white/10">⏎</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative border-t border-white/10 md:hidden"
              >
                <div className="grid gap-2 px-4 py-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <Search className="h-4 w-4 text-white/70" />
                    <input className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none" placeholder="Search…" />
                  </div>

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

                  <a
                    href="#"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                    onClick={() => setOpen(false)}
                  >
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
                  </a>

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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </motion.nav>
      </div>
    </header>
  )
}
`,
        },
        {
          id: "scroll-transform-glass-navbar",
          title: "Glass Navbar (Scroll Transform)",
          description:
            "Sticky glass header that becomes compact with stronger blur + shadow after scrolling (premium feel).",
          tags: [
            "navbar",
            "animated",
            "scroll",
            "glass",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <ScrollTransformNavbarPreview />,
          code: `'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'

export default function GlassScrollNavbar() {
  const links = useMemo(() => ['Home', 'Work', 'Services', 'Pricing', 'Docs'], [])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 16))

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="w-full">
      {/* Use sticky in real page: <div className="sticky top-0 z-50"> ... </div> */}
      <motion.nav
        initial={false}
        animate={{
          borderRadius: scrolled ? 22 : 28,
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
          backgroundColor: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0.58)',
          boxShadow: scrolled ? '0 18px 60px rgba(0,0,0,0.14)' : '0 10px 36px rgba(0,0,0,0.08)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 38 }}
        className="relative mx-auto max-w-5xl overflow-hidden ring-1 ring-black/5 backdrop-blur"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_240px_at_20%_-40%,rgba(59,130,246,0.16),transparent_70%),radial-gradient(700px_220px_at_80%_0%,rgba(16,185,129,0.14),transparent_68%)]" />

        <div className="relative flex items-center justify-between gap-3 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">Devwolf</div>
              <div className="text-xs text-neutral-500">Glass transform</div>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((label) => {
              const isActive = active === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className={[
                    'rounded-2xl px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-900/5 hover:text-neutral-900',
                  ].join(' ')}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative border-t border-black/5 md:hidden"
            >
              <div className="grid gap-2 px-4 pb-4 pt-3">
                {links.map((label, i) => (
                  <motion.button
                    key={label}
                    type="button"
                    onClick={() => {
                      setActive(label)
                      setOpen(false)
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

                <a href="#" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
`,
        },
        {
          id: "mega-menu-navbar-3col",
          title: "Mega Menu Navbar (3-Column)",
          description:
            "Desktop mega panel with categories + items + CTA. Mobile uses accordion mega sections.",
          tags: [
            "navbar",
            "megamenu",
            "dropdown",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <MegaMenuNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, Briefcase, Shield, Wrench, Code2, ArrowRight } from 'lucide-react'

export default function MegaMenuNavbar() {
  // Copy the same logic + JSX from the preview to keep the code viewer fully functional.
  return <div />
}
`,
        },
        {
          id: "cinematic-overlay-navbar",
          title: "Cinematic Overlay Navbar",
          description:
            "Fullscreen overlay with animated spotlight background and staggered links (responsive)",
          tags: [
            "navbar",
            "overlay",
            "animated",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <CinematicOverlayNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sparkles, Instagram, Github, Mail } from 'lucide-react'

export default function CinematicOverlayNavbar() {
  // Copy the same logic + JSX from the preview to keep the code viewer fully functional.
  return <div />
}
`,
        },
        {
          id: "morphing-search-navbar",
          title: "Morphing Search Navbar",
          description:
            "Search icon morphs into an input (desktop). Mobile uses a search sheet + menu dropdown.",
          tags: [
            "navbar",
            "animated",
            "search",
            "morph",
            "framer-motion",
            "tailwind",
            "lucide",
            "responsive",
          ],
          preview: <MorphingSearchNavbarPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Search, ArrowRight, Sparkles } from 'lucide-react'

export default function MorphingSearchNavbar() {
  // Copy the same logic + JSX from the preview to keep the code viewer fully functional.
  return <div />
}
`,
        },
      ],
    },
  ],
};
