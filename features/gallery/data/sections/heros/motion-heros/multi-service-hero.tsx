"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Variant } from "../../../../types";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Radio,
  Code2,
  Printer,
  Factory,
  ArrowRight,
} from "lucide-react";

type Service = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function MultiServiceHeroPreview() {
  const services = useMemo<Service[]>(
    () => [
      {
        id: "civil",
        label: "Construcción",
        title: "Construcción civil",
        description:
          "Planificación, instalaciones y ejecución de proyectos con enfoque en calidad, seguridad y tiempos.",
        cta: "Ver proyectos",
        image:
          "/construction-site-with-modern-building-and-workers.jpg",
        Icon: Building2,
      },
      {
        id: "telecom",
        label: "Electrónica & Telecom",
        title: "Electrónica y telecomunicaciones",
        description:
          "Redes, cableado estructurado, enlaces y soluciones electrónicas para entornos modernos.",
        cta: "Explorar soluciones",
        image:
          "/technology-warehouse-with-computers-and-electronic.jpg",
        Icon: Radio,
      },
      {
        id: "web",
        label: "Web Dev",
        title: "Programación web",
        description:
          "Aplicaciones modernas con Next.js, APIs robustas y diseño UI/UX profesional listo para producción.",
        cta: "Ver servicios web",
        image:
          "/software-developer-coding-on-multiple-monitors-wit.jpg",
        Icon: Code2,
      },
      {
        id: "print3d",
        label: "Impresión 3D",
        title: "Impresión 3D",
        description:
          "Prototipado rápido, piezas personalizadas y fabricación aditiva para proyectos técnicos y creativos.",
        cta: "Ver ejemplos",
        image:
          "/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
        Icon: Printer,
      },
      {
        id: "control",
        label: "Control industrial",
        title: "Sistemas de control industrial",
        description:
          "Automatización, instrumentación y control para procesos industriales con enfoque en confiabilidad.",
        cta: "Conocer más",
        image:
          "/electrical-panel-industrial-installation-with-cabl.jpg",
        Icon: Factory,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const activeService = services[active];

  // Autoplay every 4s, but only advances when user hasn't interacted recently
  const lastClickAt = useRef<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      const now = Date.now();
      // If user clicked within last 2.5s, don't auto-advance yet (feels nicer)
      if (now - lastClickAt.current < 2500) return;
      setActive((v) => (v + 1) % services.length);
    }, 4000);

    return () => clearInterval(t);
  }, [services.length]);

  const onSelect = (idx: number) => {
    lastClickAt.current = Date.now();
    setActive(clamp(idx, 0, services.length - 1));
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[34px] bg-neutral-950 ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* Background crossfade */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeService.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1.06, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75" />
            <div className="absolute inset-0 [background:radial-gradient(800px_420px_at_20%_30%,rgba(255,255,255,0.10),transparent_60%)] opacity-60" />
          </div>

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-16">
            {/* LEFT: content */}
            <div className="max-w-2xl">
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

            {/* RIGHT: selector */}
            <div className="self-center">
              <div className="rounded-[28px] bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="mb-3 text-sm font-semibold text-white/85">
                  Selecciona un servicio
                </div>

                <div className="grid gap-2">
                  {services.map((s, idx) => {
                    const selected = idx === active;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelect(idx)}
                        className={[
                          "group relative flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition",
                          selected
                            ? "bg-white text-neutral-900"
                            : "bg-white/0 text-white/80 hover:bg-white/10 hover:text-white",
                          "ring-1",
                          selected ? "ring-white/10" : "ring-white/10",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-10 w-10 place-items-center rounded-2xl ring-1 transition",
                            selected
                              ? "bg-neutral-900 text-white ring-black/10"
                              : "bg-white/10 text-white ring-white/10 group-hover:bg-white/15",
                          ].join(" ")}
                        >
                          <s.Icon className="h-5 w-5" />
                        </span>

                        <div className="min-w-0">
                          <div
                            className={[
                              "text-sm font-semibold",
                              selected ? "text-neutral-900" : "text-white",
                            ].join(" ")}
                          >
                            {s.label}
                          </div>
                          <div
                            className={[
                              "mt-0.5 text-xs",
                              selected ? "text-neutral-600" : "text-white/55",
                            ].join(" ")}
                          >
                            {s.title}
                          </div>
                        </div>

                        {/* active indicator */}
                        {selected && (
                          <motion.span
                            layoutId="service-indicator"
                            className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-900"
                            transition={{
                              type: "spring",
                              stiffness: 520,
                              damping: 40,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 text-xs text-white/50">
                  Auto-cambia cada{" "}
                  <span className="font-semibold text-white/70">4s</span>. Click
                  fija la selección.
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export const multiServiceHero: Variant = {
  id: "multi-service-hero",
  title: "Multi-Service Hero (Autoplay + Click)",
  description:
    "Hero con múltiples servicios: fondo por servicio + contenido animado. Autoplay cada 4s y selector por click.",
  tags: [
    "hero",
    "services",
    "slideshow",
    "autoplay",
    "click",
    "framer-motion",
    "tailwind",
    "lucide",
    "responsive",
  ],
  preview: <MultiServiceHeroPreview />,
  code: `'use client'

/**
 * Copia el componente completo desde el archivo del preview.
 * Usa <img> para evitar configurar next/image con dominios externos.
 * Autoplay: 4s (setInterval) + click para seleccionar servicio.
 */
`,
};
