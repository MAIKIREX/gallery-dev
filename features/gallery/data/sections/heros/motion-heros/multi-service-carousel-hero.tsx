"use client"

import * as React from "react"
import type { Variant } from "../../../../types"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Code2,
  Factory,
  Printer,
  Radio,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Service = {
  id: string
  label: string
  title: string
  description: string
  cta: string
  image: string
  Icon: React.ComponentType<{ className?: string }>
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function getDirection(prev: number, next: number, len: number) {
  if (next === prev) return "forward"
  const isNextForward = next === (prev + 1) % len
  const isNextBackward = next === (prev - 1 + len) % len
  if (isNextForward) return "forward"
  if (isNextBackward) return "backward"
  return next > prev ? "forward" : "backward"
}

function MultiServiceHeroLeftRailWipeShadcnCarouselPreview() {
  const services = React.useMemo<Service[]>(
    () => [
      {
        id: "civil",
        label: "Construcción",
        title: "Construcción civil",
        description:
          "Planificación, instalaciones y ejecución de proyectos con enfoque en calidad, seguridad y tiempos.",
        cta: "Ver proyectos",
        image: "/construction-site-with-modern-building-and-workers.jpg",
        Icon: Building2,
      },
      {
        id: "telecom",
        label: "Electrónica & Telecom",
        title: "Electrónica y telecomunicaciones",
        description:
          "Redes, cableado estructurado, enlaces y soluciones electrónicas para entornos modernos.",
        cta: "Explorar soluciones",
        image: "/technology-warehouse-with-computers-and-electronic.jpg",
        Icon: Radio,
      },
      {
        id: "web",
        label: "Web Dev",
        title: "Programación web",
        description:
          "Aplicaciones modernas con Next.js, APIs robustas y diseño UI/UX profesional listo para producción.",
        cta: "Ver servicios web",
        image: "/software-developer-coding-on-multiple-monitors-wit.jpg",
        Icon: Code2,
      },
      {
        id: "print3d",
        label: "Impresión 3D",
        title: "Impresión 3D",
        description:
          "Prototipado rápido, piezas personalizadas y fabricación aditiva para proyectos técnicos y creativos.",
        cta: "Ver ejemplos",
        image: "/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
        Icon: Printer,
      },
      {
        id: "control",
        label: "Control industrial",
        title: "Sistemas de control industrial",
        description:
          "Automatización, instrumentación y control para procesos industriales con enfoque en confiabilidad.",
        cta: "Conocer más",
        image: "/electrical-panel-industrial-installation-with-cabl.jpg",
        Icon: Factory,
      },
    ],
    []
  )

  const INTERVAL_MS = 6000

  // Estado visual (para rail + wipe)
  const [active, setActive] = React.useState(0)
  const [baseIdx, setBaseIdx] = React.useState(0)
  const [dir, setDir] = React.useState<"forward" | "backward">("forward")

  // Embla API (shadcn Carousel)
  const [api, setApi] = React.useState<CarouselApi | null>(null)

  const activeRef = React.useRef(active)
  React.useEffect(() => {
    activeRef.current = active
  }, [active])

  const timerRef = React.useRef<number | null>(null)
  const skipNextSelectRef = React.useRef(false)

  // Progreso estable (sin remount)
  const progressControls = useAnimationControls()

  const restartProgress = React.useCallback(() => {
    progressControls.set({ scaleX: 0 })
    progressControls.start({
      scaleX: 1,
      transition: { duration: INTERVAL_MS / 1000, ease: "linear" },
    })
  }, [progressControls])

  const clearTimer = React.useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
  }, [])

  const scheduleNext = React.useCallback(() => {
    clearTimer()
    timerRef.current = window.setTimeout(() => {
      if (!api) return
      api.scrollNext()
      // el estado se actualiza en el handler "select"
    }, INTERVAL_MS)
  }, [api, clearTimer])

  const applyIndex = React.useCallback(
    (next: number) => {
      const len = services.length
      const safeNext = clamp(next, 0, len - 1)
      const prev = activeRef.current

      setDir(getDirection(prev, safeNext, len))
      setActive(safeNext)

      restartProgress()
      scheduleNext()
    },
    [restartProgress, scheduleNext, services.length]
  )

  // Sincroniza cuando Embla cambia de slide (swipe, autoplay, etc.)
  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const next = api.selectedScrollSnap()

      // Si fue un scroll programático desde el rail, ya aplicamos estado manualmente.
      if (skipNextSelectRef.current) {
        skipNextSelectRef.current = false
        return
      }

      applyIndex(next)
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    // init
    applyIndex(api.selectedScrollSnap())

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, applyIndex])

  React.useEffect(() => {
    // Limpieza timer al desmontar
    return () => clearTimer()
  }, [clearTimer])

  const goTo = (nextIdx: number) => {
    if (!api) return
    const next = clamp(nextIdx, 0, services.length - 1)

    // Marcamos para que el evento "select" no duplique el restartProgress/schedule
    skipNextSelectRef.current = true
    api.scrollTo(next)
    applyIndex(next)
  }

  const activeService = services[active]
  const baseService = services[baseIdx]

  const incomingInitialClip =
    dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="relative overflow-hidden rounded-[34px] border-white/10 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* Background wipe */}
          <div className="absolute inset-0">
            {/* Base estable */}
            <div className="absolute inset-0">
              <img
                src={baseService.image}
                alt={baseService.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Incoming overlay con wipe */}
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={activeService.id}
                className="absolute inset-0"
                style={{ willChange: "clip-path" }}
                initial={{ clipPath: incomingInitialClip }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() => {
                  setBaseIdx((currentBase) => {
                    if (activeRef.current === active) return active
                    return currentBase
                  })
                }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/70" />
            <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_25%_28%,rgba(255,255,255,0.11),transparent_60%)] opacity-70" />
          </div>

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[320px_1fr] md:px-10 md:py-16">
            {/* LEFT rail */}
            <div className="md:self-center">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-white/85">
                  Servicios
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/55">Auto</span>
                  <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                    <motion.div
                      className="h-full w-full origin-left bg-white/70"
                      initial={{ scaleX: 0 }}
                      animate={progressControls}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-2 md:overflow-visible md:pb-0">
                {services.map((s, idx) => {
                  const selected = idx === active

                  return (
                    <Button
                      key={s.id}
                      type="button"
                      variant="ghost"
                      onClick={() => goTo(idx)}
                      className={cn(
                        "group relative h-auto min-w-[240px] shrink-0 justify-start gap-3 px-3 py-3 text-left md:min-w-0",
                        "ring-1 ring-white/10",
                        "bg-white/0 hover:bg-white/10",
                        selected && "bg-white/14"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-0 h-full w-0.5 transition",
                          selected
                            ? "bg-white"
                            : "bg-white/0 group-hover:bg-white/40"
                        )}
                      />

                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-xl ring-1 transition",
                          selected
                            ? "bg-white text-neutral-950 ring-white/20"
                            : "bg-white/10 text-white ring-white/10 group-hover:bg-white/15"
                        )}
                      >
                        <s.Icon className="h-5 w-5" />
                      </span>

                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-semibold",
                            selected ? "text-white" : "text-white/85"
                          )}
                        >
                          {s.label}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 block text-xs",
                            selected ? "text-white/70" : "text-white/55"
                          )}
                        >
                          {s.title}
                        </span>
                      </span>

                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 transition",
                          selected
                            ? "opacity-80"
                            : "opacity-30 group-hover:opacity-60"
                        )}
                      />
                    </Button>
                  )
                })}
              </div>

              <div className="mt-3 text-xs text-white/50">
                Cambia cada{" "}
                <span className="font-semibold text-white/70">6s</span>. Click
                reinicia el tiempo.
              </div>
            </div>

            {/* RIGHT: shadcn Carousel */}
            <div className="md:self-center">
              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start" }}
                className="w-full"
              >
                <CarouselContent>
                  {services.map((s) => (
                    <CarouselItem key={s.id} className="basis-full">
                      <div className="max-w-2xl">
                        <Badge className="gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10">
                          <s.Icon className="h-4 w-4" />
                          Servicios integrales
                        </Badge>

                        <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
                          {s.title}
                        </h1>

                        <p className="mt-5 max-w-xl text-pretty text-sm text-white/70 md:text-base">
                          {s.description}
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Button
                            asChild
                            className="h-11 rounded-2xl bg-white px-5 text-neutral-900 hover:bg-white/95"
                          >
                            <a href="#">
                              {s.cta}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>

                          <Button
                            asChild
                            variant="secondary"
                            className={cn(
                              "h-11 rounded-2xl bg-white/10 px-5 text-white ring-1 ring-white/15 hover:bg-white/15"
                            )}
                          >
                            <a href="#">
                              Cotizar ahora
                              <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          <Separator className="pointer-events-none bg-white/10" />
        </Card>
      </div>
    </section>
  )
}

export const multiServiceHeroLeftRailWipe: Variant = {
  id: "multi-service-hero-left-rail-wipe",
  title: "Multi-Service Hero (Left Rail + Wipe + Progress) — shadcn Carousel",
  description:
    "Carrusel hecho con shadcn/ui Carousel (Embla) + wipe lateral con clipPath, rail izquierdo y progress estable.",
  tags: [
    "hero",
    "services",
    "wipe",
    "clipPath",
    "autoplay",
    "progress",
    "framer-motion",
    "tailwind",
    "lucide",
    "shadcn",
    "carousel",
    "embla",
    "responsive",
  ],
  preview: <MultiServiceHeroLeftRailWipeShadcnCarouselPreview />,
  code: `
"use client"

import * as React from "react"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Code2,
  Factory,
  Printer,
  Radio,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Service = {
  id: string
  label: string
  title: string
  description: string
  cta: string
  image: string
  Icon: React.ComponentType<{ className?: string }>
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function getDirection(prev: number, next: number, len: number) {
  if (next === prev) return "forward"
  const isNextForward = next === (prev + 1) % len
  const isNextBackward = next === (prev - 1 + len) % len
  if (isNextForward) return "forward"
  if (isNextBackward) return "backward"
  return next > prev ? "forward" : "backward"
}

export function MultiServiceCarouselHero() {
  const services = React.useMemo<Service[]>(
    () => [
      {
        id: "civil",
        label: "Construcción",
        title: "Construcción civil",
        description:
          "Planificación, instalaciones y ejecución de proyectos con enfoque en calidad, seguridad y tiempos.",
        cta: "Ver proyectos",
        image: "/construction-site-with-modern-building-and-workers.jpg",
        Icon: Building2,
      },
      {
        id: "telecom",
        label: "Electrónica & Telecom",
        title: "Electrónica y telecomunicaciones",
        description:
          "Redes, cableado estructurado, enlaces y soluciones electrónicas para entornos modernos.",
        cta: "Explorar soluciones",
        image: "/technology-warehouse-with-computers-and-electronic.jpg",
        Icon: Radio,
      },
      {
        id: "web",
        label: "Web Dev",
        title: "Programación web",
        description:
          "Aplicaciones modernas con Next.js, APIs robustas y diseño UI/UX profesional listo para producción.",
        cta: "Ver servicios web",
        image: "/software-developer-coding-on-multiple-monitors-wit.jpg",
        Icon: Code2,
      },
      {
        id: "print3d",
        label: "Impresión 3D",
        title: "Impresión 3D",
        description:
          "Prototipado rápido, piezas personalizadas y fabricación aditiva para proyectos técnicos y creativos.",
        cta: "Ver ejemplos",
        image: "/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
        Icon: Printer,
      },
      {
        id: "control",
        label: "Control industrial",
        title: "Sistemas de control industrial",
        description:
          "Automatización, instrumentación y control para procesos industriales con enfoque en confiabilidad.",
        cta: "Conocer más",
        image: "/electrical-panel-industrial-installation-with-cabl.jpg",
        Icon: Factory,
      },
    ],
    []
  )

  const INTERVAL_MS = 6000

  // Estado visual (para rail + wipe)
  const [active, setActive] = React.useState(0)
  const [baseIdx, setBaseIdx] = React.useState(0)
  const [dir, setDir] = React.useState<"forward" | "backward">("forward")

  // Embla API (shadcn Carousel)
  const [api, setApi] = React.useState<CarouselApi | null>(null)

  const activeRef = React.useRef(active)
  React.useEffect(() => {
    activeRef.current = active
  }, [active])

  const timerRef = React.useRef<number | null>(null)
  const skipNextSelectRef = React.useRef(false)

  // Progreso estable (sin remount)
  const progressControls = useAnimationControls()

  const restartProgress = React.useCallback(() => {
    progressControls.set({ scaleX: 0 })
    progressControls.start({
      scaleX: 1,
      transition: { duration: INTERVAL_MS / 1000, ease: "linear" },
    })
  }, [progressControls])

  const clearTimer = React.useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
  }, [])

  const scheduleNext = React.useCallback(() => {
    clearTimer()
    timerRef.current = window.setTimeout(() => {
      if (!api) return
      api.scrollNext()
      // el estado se actualiza en el handler "select"
    }, INTERVAL_MS)
  }, [api, clearTimer])

  const applyIndex = React.useCallback(
    (next: number) => {
      const len = services.length
      const safeNext = clamp(next, 0, len - 1)
      const prev = activeRef.current

      setDir(getDirection(prev, safeNext, len))
      setActive(safeNext)

      restartProgress()
      scheduleNext()
    },
    [restartProgress, scheduleNext, services.length]
  )

  // Sincroniza cuando Embla cambia de slide (swipe, autoplay, etc.)
  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const next = api.selectedScrollSnap()

      // Si fue un scroll programático desde el rail, ya aplicamos estado manualmente.
      if (skipNextSelectRef.current) {
        skipNextSelectRef.current = false
        return
      }

      applyIndex(next)
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    // init
    applyIndex(api.selectedScrollSnap())

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, applyIndex])

  React.useEffect(() => {
    // Limpieza timer al desmontar
    return () => clearTimer()
  }, [clearTimer])

  const goTo = (nextIdx: number) => {
    if (!api) return
    const next = clamp(nextIdx, 0, services.length - 1)

    // Marcamos para que el evento "select" no duplique el restartProgress/schedule
    skipNextSelectRef.current = true
    api.scrollTo(next)
    applyIndex(next)
  }

  const activeService = services[active]
  const baseService = services[baseIdx]

  const incomingInitialClip =
    dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="relative overflow-hidden rounded-[34px] border-white/10 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* Background wipe */}
          <div className="absolute inset-0">
            {/* Base estable */}
            <div className="absolute inset-0">
              <img
                src={baseService.image}
                alt={baseService.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Incoming overlay con wipe */}
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={activeService.id}
                className="absolute inset-0"
                style={{ willChange: "clip-path" }}
                initial={{ clipPath: incomingInitialClip }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() => {
                  setBaseIdx((currentBase) => {
                    if (activeRef.current === active) return active
                    return currentBase
                  })
                }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/70" />
            <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_25%_28%,rgba(255,255,255,0.11),transparent_60%)] opacity-70" />
          </div>

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[320px_1fr] md:px-10 md:py-16">
            {/* LEFT rail */}
            <div className="md:self-center">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-white/85">
                  Servicios
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/55">Auto</span>
                  <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                    <motion.div
                      className="h-full w-full origin-left bg-white/70"
                      initial={{ scaleX: 0 }}
                      animate={progressControls}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-2 md:overflow-visible md:pb-0">
                {services.map((s, idx) => {
                  const selected = idx === active

                  return (
                    <Button
                      key={s.id}
                      type="button"
                      variant="ghost"
                      onClick={() => goTo(idx)}
                      className={cn(
                        "group relative h-auto min-w-[240px] shrink-0 justify-start gap-3 px-3 py-3 text-left md:min-w-0",
                        "ring-1 ring-white/10",
                        "bg-white/0 hover:bg-white/10",
                        selected && "bg-white/14"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-0 h-full w-0.5 transition",
                          selected
                            ? "bg-white"
                            : "bg-white/0 group-hover:bg-white/40"
                        )}
                      />

                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-xl ring-1 transition",
                          selected
                            ? "bg-white text-neutral-950 ring-white/20"
                            : "bg-white/10 text-white ring-white/10 group-hover:bg-white/15"
                        )}
                      >
                        <s.Icon className="h-5 w-5" />
                      </span>

                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-semibold",
                            selected ? "text-white" : "text-white/85"
                          )}
                        >
                          {s.label}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 block text-xs",
                            selected ? "text-white/70" : "text-white/55"
                          )}
                        >
                          {s.title}
                        </span>
                      </span>

                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 transition",
                          selected
                            ? "opacity-80"
                            : "opacity-30 group-hover:opacity-60"
                        )}
                      />
                    </Button>
                  )
                })}
              </div>

              <div className="mt-3 text-xs text-white/50">
                Cambia cada{" "}
                <span className="font-semibold text-white/70">6s</span>. Click
                reinicia el tiempo.
              </div>
            </div>

            {/* RIGHT: shadcn Carousel */}
            <div className="md:self-center">
              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start" }}
                className="w-full"
              >
                <CarouselContent>
                  {services.map((s) => (
                    <CarouselItem key={s.id} className="basis-full">
                      <div className="max-w-2xl">
                        <Badge className="gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10">
                          <s.Icon className="h-4 w-4" />
                          Servicios integrales
                        </Badge>

                        <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
                          {s.title}
                        </h1>

                        <p className="mt-5 max-w-xl text-pretty text-sm text-white/70 md:text-base">
                          {s.description}
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Button
                            asChild
                            className="h-11 rounded-2xl bg-white px-5 text-neutral-900 hover:bg-white/95"
                          >
                            <a href="#">
                              {s.cta}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>

                          <Button
                            asChild
                            variant="secondary"
                            className={cn(
                              "h-11 rounded-2xl bg-white/10 px-5 text-white ring-1 ring-white/15 hover:bg-white/15"
                            )}
                          >
                            <a href="#">
                              Cotizar ahora
                              <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          <Separator className="pointer-events-none bg-white/10" />
        </Card>
      </div>
    </section>
  )
}
`,
}
