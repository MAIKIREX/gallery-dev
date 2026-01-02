"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Variant } from "../../../../types";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import {
  Building2,
  Radio,
  Code2,
  Printer,
  Factory,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

type Service = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  image: string; // local path (ya guardado en tu proyecto)
  Icon: React.ComponentType<{ className?: string }>;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Calcula dirección del wipe:
 * - "forward": avanza (wipe de izquierda a derecha)
 * - "backward": retrocede (wipe de derecha a izquierda)
 *
 * Maneja el caso circular 0<->last en autoplay.
 */
function getDirection(prev: number, next: number, len: number) {
  if (next === prev) return "forward";

  const isNextForward = next === (prev + 1) % len;
  const isNextBackward = next === (prev - 1 + len) % len;

  if (isNextForward) return "forward";
  if (isNextBackward) return "backward";

  // salto directo (click a cualquiera): elige según índice
  return next > prev ? "forward" : "backward";
}

function MultiServiceHeroLeftRailWipePreview() {
  const services = useMemo<Service[]>(
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
  );

  const INTERVAL_MS = 6000;

  // active: el servicio actual
  const [active, setActive] = useState(0);

  // baseIdx: fondo “estable” (cuando termina el wipe, baseIdx = active)
  const [baseIdx, setBaseIdx] = useState(0);

  // dir: dirección del wipe
  const [dir, setDir] = useState<"forward" | "backward">("forward");

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Timer reprogramable (evita rebotes)
  const timerRef = useRef<number | null>(null);

  // Barra de progreso (sin remount)
  const progressControls = useAnimationControls();

  const restartProgress = () => {
    progressControls.set({ scaleX: 0 });
    progressControls.start({
      scaleX: 1,
      transition: { duration: INTERVAL_MS / 1000, ease: "linear" },
    });
  };

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const scheduleNext = () => {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      const next = (activeRef.current + 1) % services.length;
      goTo(next, "auto");
    }, INTERVAL_MS);
  };

  const goTo = (nextIdx: number, reason: "auto" | "manual") => {
    const len = services.length;
    const next = clamp(nextIdx, 0, len - 1);

    const prev = activeRef.current;
    const direction = getDirection(prev, next, len);

    // 1) fijamos dirección y setActive
    setDir(direction);
    setActive(next);

    // 2) reiniciamos barra + reprogramamos autoplay
    restartProgress();
    scheduleNext();
  };

  // init autoplay
  useEffect(() => {
    restartProgress();
    scheduleNext();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeService = services[active];
  const baseService = services[baseIdx];

  // clipPath inicial según dirección
  const incomingInitialClip =
    dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[34px] bg-neutral-950 ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* Background (wipe lateral) */}
          <div className="absolute inset-0">
            {/* Base (estable) */}
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
                exit={{ opacity: 1 }} // base queda debajo, no hace falta animar exit
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() => {
                  // Cuando termina el wipe, fijamos baseIdx = active
                  // (solo si no cambió nuevamente durante la animación)
                  setBaseIdx((currentBase) => {
                    if (activeRef.current === active) return active;
                    return currentBase;
                  });
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

            {/* Overlay (igual que antes) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/70" />
            <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_25%_28%,rgba(255,255,255,0.11),transparent_60%)] opacity-70" />
          </div>

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[320px_1fr] md:px-10 md:py-16">
            {/* LEFT: selector (sin contenedor redondeado envolvente) */}
            <div className="md:self-center">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-white/85">
                  Servicios
                </div>

                {/* Progress (6s) */}
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

              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 md:grid md:gap-2 md:overflow-visible md:pb-0">
                {services.map((s, idx) => {
                  const selected = idx === active;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goTo(idx, "manual")}
                      className={[
                        "group relative min-w-[240px] shrink-0 px-3 py-3 text-left transition md:min-w-0",
                        "ring-1 ring-white/10",
                        "bg-white/0 hover:bg-white/10",
                        selected ? "bg-white/14" : "",
                      ].join(" ")}
                    >
                      {/* indicador lateral */}
                      <span
                        className={[
                          "absolute left-0 top-0 h-full w-0.5 transition",
                          selected
                            ? "bg-white"
                            : "bg-white/0 group-hover:bg-white/40",
                        ].join(" ")}
                      />

                      <div className="flex items-center gap-3">
                        <span
                          className={[
                            "grid h-10 w-10 place-items-center ring-1 transition",
                            selected
                              ? "bg-white text-neutral-950 ring-white/20"
                              : "bg-white/10 text-white ring-white/10 group-hover:bg-white/15",
                          ].join(" ")}
                        >
                          <s.Icon className="h-5 w-5" />
                        </span>

                        <div className="min-w-0">
                          <div
                            className={[
                              "text-sm font-semibold",
                              selected ? "text-white" : "text-white/85",
                            ].join(" ")}
                          >
                            {s.label}
                          </div>
                          <div
                            className={[
                              "mt-0.5 text-xs",
                              selected ? "text-white/70" : "text-white/55",
                            ].join(" ")}
                          >
                            {s.title}
                          </div>
                        </div>

                        <ChevronRight
                          className={[
                            "ml-auto h-4 w-4 transition",
                            selected
                              ? "opacity-80"
                              : "opacity-30 group-hover:opacity-60",
                          ].join(" ")}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 text-xs text-white/50">
                Cambia cada{" "}
                <span className="font-semibold text-white/70">6s</span>. Click
                reinicia el tiempo.
              </div>
            </div>

            {/* RIGHT: content */}
            <div className="max-w-2xl md:self-center">
              <motion.div
                key={`${activeService.id}-badge`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10"
              >
                <activeService.Icon className="h-4 w-4" />
                Servicios integrales
              </motion.div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={`${activeService.id}-title`}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
                >
                  {activeService.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`${activeService.id}-desc`}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-5 max-w-xl text-pretty text-sm text-white/70 md:text-base"
                >
                  {activeService.description}
                </motion.p>
              </AnimatePresence>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/95"
                >
                  {activeService.cta}
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  Cotizar ahora
                  <ArrowRight className="h-4 w-4 opacity-80" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export const multiServiceHeroLeftRailWipe: Variant = {
  id: "multi-service-hero-left-rail-wipe",
  title: "Multi-Service Hero (Left Rail + Wipe + Progress)",
  description:
    "Hero tipo carrusel con wipe lateral (clipPath), selector a la izquierda sin tarjeta envolvente y barra de progreso (6s) estable sin parpadeos.",
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
    "responsive",
  ],
  preview: <MultiServiceHeroLeftRailWipePreview />,
  code: `'use client'

/**
 * Opción wipe lateral:
 * - Transición: clipPath (wipe) en vez de crossfade
 * - Autoplay: 6s con setTimeout reprogramable (evita rebotes)
 * - Progreso: animation controls (sin remount, evita parpadeos)
 */`,
};
