
import type { Variant } from "../../../../types"
import {
  FileText,
  Home,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

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

export const l2ToitureNavbar: Variant = {
  id: "l2-toiture-navbar",
  title: "Mega Menu (L2 Toiture)",
  description: "Navbar con mega menús en desktop y overlay con acordeón en móvil",
  tags: ["navbar", "mega-menu", "light", "responsive", "lucide"],
  preview: <L2ToitureNavbarPreview />,
  code: `
"use client"

import { useState } from "react"
import { Home, ChevronDown, ChevronRight, ChevronUp, FileText, Menu, X } from "lucide-react"

export function L2ToitureNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const groups = [
    { id: "services", label: "Services", items: ["Réparation toiture", "Toiture commerciale", "Toiture résidentielle", "Inspection", "Urgence toiture", "Soumission toiture"] },
    { id: "zones", label: "Zones résidentielles", items: ["Toiture Charlesbourg", "Toiture Beauport", "Toiture Lévis", "Toiture Lac-Beauport", "Toiture Cap-Rouge", "Toiture Lac-Saint-Joseph", "Toiture Saint-Nicolas", "Toiture Sillery", "Toutes les zones desservies"] },
    { id: "types", label: "Types de toit", items: ["Plat", "Blanc", "Bardeaux d’asphalte", "Membrane élastomère", "Toit en pente", "Tous les types de toit"] },
    { id: "apropos", label: "À propos", items: ["Notre entreprise", "Nos clients", "Nos produits", "Notre équipe"] },
  ]

  const simpleLinks = [
    { label: "Réalisations", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Nous joindre", href: "#" },
  ]

  function toggleGroup(id: string) {
    setOpenGroup((curr) => (curr === id ? null : id))
  }

  return (
    <header className="w-full">
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white"><Home className="h-5 w-5" /></div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">L2 Toitures</div>
              <div className="text-xs text-neutral-500">Experts en toiture</div>
            </div>
          </a>
          <nav className="hidden items-center gap-2 lg:flex">
            {/* ... Desktop nav items ... */}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
              <FileText className="h-4 w-4" /> Ma soumission
            </a>
            <button type="button" onClick={() => setMobileOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5 text-neutral-800" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button className="absolute inset-0 bg-black/40" aria-label="Close menu overlay" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            {/* ... Mobile menu content ... */}
          </div>
        </div>
      )}
    </header>
  )
}
`,
}
