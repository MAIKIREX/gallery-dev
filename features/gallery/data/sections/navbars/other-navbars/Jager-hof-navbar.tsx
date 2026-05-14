import type { Variant } from "../../../../types"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

function MobileToggleButton({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid h-11 w-11 place-items-center rounded-2xl border border-[#224A3A]/20 bg-[#E9E1D6] text-[#224A3A]"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.span
            key="x"
            initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex"
          >
            {/* al presionar X, se cierra y verás la transición a Menu en el header */}
            <X className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: 90, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex"
          >
            <Menu className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

function JagerhofNavbarPreview() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const links = useMemo(
    () => [
      "Hotel",
      "Culinario",
      "Naturaleza",
      "Nosotros",
      "Preguntas frecuentes",
      "Contacto",
    ],
    []
  )

  const toggle = () => setOpen((v) => !v)
  const close = () => setOpen(false)

  return (
    <header className="w-full bg-[#E9E1D6] px-4 py-6">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="leading-tight text-[#224A3A]">
              <div className="text-2xl font-semibold tracking-wide">
                Jägerhof
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div
            className="hidden items-center gap-8 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((label) => {
              const dim = hovered && hovered !== label
              const active = hovered === label

              return (
                <a
                  key={label}
                  href="#"
                  className={[
                    "relative py-1 text-[15px] font-semibold tracking-wide",
                    "transition-colors duration-200",
                    dim ? "text-[#224A3A]/45" : "text-[#224A3A]",
                  ].join(" ")}
                  onMouseEnter={() => setHovered(label)}
                >
                  <span>{label}</span>

                  {/* underline animation: left -> right */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#224A3A]"
                    initial={false}
                    animate={{
                      scaleX: active ? 1 : 0,
                      opacity: active ? 1 : 0,
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              )
            })}
          </div>

          {/* Mobile toggle button (animates Menu <-> X) */}
          <div className="md:hidden">
            <MobileToggleButton open={open} onToggle={toggle} />
          </div>
        </nav>

        {/* Mobile overlay + panel */}
        <AnimatePresence>
          {open && (
            <>
              {/* overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px] md:hidden"
                onClick={close}
              />

              {/* panel */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-x-4 top-4 z-50 md:hidden"
                role="dialog"
                aria-modal="true"
              >
                <div className="rounded-3xl bg-[#E9E1D6] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
                  <div className="flex items-start justify-between gap-3">
                    <a href="#" className="text-[#224A3A]">
                      <div className="text-2xl font-semibold tracking-wide">
                        Jägerhof
                      </div>
                    </a>

                    {/* Close uses SAME animated toggle button (X -> Menu transition) */}
                    <MobileToggleButton open={open} onToggle={toggle} />
                  </div>

                  <div className="mt-6 grid gap-3">
                    {links.map((label, i) => (
                      <motion.a
                        key={label}
                        href="#"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.16, delay: i * 0.03 }}
                        className="text-[18px] font-semibold text-[#224A3A]"
                        onClick={close}
                      >
                        {label}
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#224A3A]"
                    >
                      EN <ChevronDown className="h-4 w-4 opacity-80" />
                    </button>
                  </div>

                  <div className="mt-8 space-y-2 text-[#224A3A]">
                    <div className="text-[18px] font-semibold">
                      +39 0473 65 62 50
                    </div>
                    <a
                      href="#"
                      className="text-[18px] font-semibold underline decoration-[#224A3A]/25 underline-offset-4"
                    >
                      info@jagerhof.net
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export const jagerhofNavbar: Variant = {
  id: "jagerhof-navbar",
  title: "Jägerhof Navbar (Underline Focus)",
  description:
    "Navbar claro tipo hotel con hover que enfoca opción, atenúa las demás y subrayado animado de izquierda a derecha. Menú móvil con toggle animado Menu ↔ X.",
  tags: ["navbar", "hotel", "framer-motion", "lucide", "responsive", "underline"],
  preview: <JagerhofNavbarPreview />,
  code: `
"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

function MobileToggleButton({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid h-11 w-11 place-items-center rounded-2xl border border-[#224A3A]/20 bg-[#E9E1D6] text-[#224A3A]"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.span
            key="x"
            initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex"
          >
            <X className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: 90, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex"
          >
            <Menu className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export function JagerhofNavbar() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const links = useMemo(
    () => [
      "Hotel",
      "Culinario",
      "Naturaleza",
      "Nosotros",
      "Preguntas frecuentes",
      "Contacto",
    ],
    []
  )

  const toggle = () => setOpen((v) => !v)
  const close = () => setOpen(false)

  return (
    <header className="w-full bg-[#E9E1D6] px-4 py-6">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="leading-tight text-[#224A3A]">
              <div className="text-2xl font-semibold tracking-wide">
                Jägerhof
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div
            className="hidden items-center gap-8 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((label) => {
              const dim = hovered && hovered !== label
              const active = hovered === label

              return (
                <a
                  key={label}
                  href="#"
                  className={[
                    "relative py-1 text-[15px] font-semibold tracking-wide",
                    "transition-colors duration-200",
                    dim ? "text-[#224A3A]/45" : "text-[#224A3A]",
                  ].join(" ")}
                  onMouseEnter={() => setHovered(label)}
                >
                  <span>{label}</span>

                  {/* underline animation: left -> right */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#224A3A]"
                    initial={false}
                    animate={{
                      scaleX: active ? 1 : 0,
                      opacity: active ? 1 : 0,
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              )
            })}
          </div>

          {/* Mobile toggle button (animates Menu <-> X) */}
          <div className="md:hidden">
            <MobileToggleButton open={open} onToggle={toggle} />
          </div>
        </nav>

        {/* Mobile overlay + panel */}
        <AnimatePresence>
          {open && (
            <>
              {/* overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px] md:hidden"
                onClick={close}
              />

              {/* panel */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-x-4 top-4 z-50 md:hidden"
                role="dialog"
                aria-modal="true"
              >
                <div className="rounded-3xl bg-[#E9E1D6] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
                  <div className="flex items-start justify-between gap-3">
                    <a href="#" className="text-[#224A3A]">
                      <div className="text-2xl font-semibold tracking-wide">
                        Jägerhof
                      </div>
                    </a>

                    {/* Close uses SAME animated toggle button */}
                    <MobileToggleButton open={open} onToggle={toggle} />
                  </div>

                  <div className="mt-6 grid gap-3">
                    {links.map((label, i) => (
                      <motion.a
                        key={label}
                        href="#"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.16, delay: i * 0.03 }}
                        className="text-[18px] font-semibold text-[#224A3A]"
                        onClick={close}
                      >
                        {label}
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#224A3A]"
                    >
                      EN <ChevronDown className="h-4 w-4 opacity-80" />
                    </button>
                  </div>

                  <div className="mt-8 space-y-2 text-[#224A3A]">
                    <div className="text-[18px] font-semibold">
                      +39 0473 65 62 50
                    </div>
                    <a
                      href="#"
                      className="text-[18px] font-semibold underline decoration-[#224A3A]/25 underline-offset-4"
                    >
                      info@jagerhof.net
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
`,
}
