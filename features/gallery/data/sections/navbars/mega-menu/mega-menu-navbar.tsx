
import type { Variant } from "../../../../types"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Code2,
  Briefcase,
  Wrench,
  Shield,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

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
                <div className="grid gap-2 p-4">
                  {groups.map((g) => {
                    const active = openGroup === g;
                    return (
                      <div
                        key={g}
                        className="rounded-2xl bg-white ring-1 ring-black/5"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenGroup((curr) => (curr === g ? null : g))}
                          className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-neutral-900"
                        >
                          {megaData[g].title}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              active ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {active && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden border-t border-black/5"
                            >
                              <div className="grid gap-1 p-2">
                                {megaData[g].itemsByCategory[
                                  megaData[g].categories[0].id
                                ].map((it) => (
                                  <a
                                    key={it.label}
                                    href="#"
                                    onClick={closeAll}
                                    className="rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                                  >
                                    {it.label}
                                  </a>
                                ))}
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
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-black/5 hover:bg-neutral-50"
                    >
                      {l}
                    </a>
                  ))}

                  <a
                    href="#"
                    onClick={closeAll}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
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

export const megaMenuNavbar: Variant = {
  id: "mega-menu-navbar",
  title: "Mega Menu Navbar",
  description: "Navbar con panel de mega menú dinámico y responsive",
  tags: ["navbar", "mega-menu", "dark", "responsive", "framer-motion"],
  preview: <MegaMenuNavbarPreview />,
  code: `
"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Code2, Briefcase, Wrench, Shield } from "lucide-react"

// ... (MegaData definition)

export function MegaMenuNavbar() {
  const [openGroup, setOpenGroup] = useState<MegaGroupId | null>(null)
  const [category, setCategory] = useState("design")
  const [mobileOpen, setMobileOpen] = useState(false)

  // ... (component logic)

  return (
    <header className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative rounded-[28px] bg-white/70 backdrop-blur ring-1 ring-black/5 shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
          {/* ... Navbar content ... */}
          
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
                {/* ... Mega panel content ... */}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="border-t border-black/5 md:hidden"
              >
                {/* ... Mobile menu content ... */}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
`,
}
