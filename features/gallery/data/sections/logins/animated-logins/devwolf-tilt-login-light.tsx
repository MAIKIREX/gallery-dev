"use client";

import type { Variant } from "../../../../types";
import type { MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";

const schema = z.object({
  email: z.string().email("Ingresa un correo válido."),
  password: z.string().min(6, "Mínimo 6 caracteres."),
  remember: z.boolean().optional(),
});

type Values = z.infer<typeof schema>;

function DevwolfTiltLoginPreview() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  // Enable tilt only on desktop + fine pointer
  const [tiltEnabled, setTiltEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () =>
      setTiltEnabled(mq.matches && window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    mq.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("resize", update);
      mq.removeEventListener?.("change", update);
    };
  }, []);

  const defaults = useMemo<Values>(
    () => ({ email: "", password: "", remember: true }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: "onTouched",
  });

  // Tilt motion values
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sX = useSpring(mvX, { stiffness: 220, damping: 26, mass: 0.7 });
  const sY = useSpring(mvY, { stiffness: 220, damping: 26, mass: 0.7 });

  const rotateX = useTransform(sY, [-1, 1], [10, -10]); // invert feels natural
  const rotateY = useTransform(sX, [-1, 1], [-10, 10]);

  const glareX = useTransform(sX, [-1, 1], ["20%", "80%"]);
  const glareY = useTransform(sY, [-1, 1], ["20%", "80%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mvX.set((px - 0.5) * 2); // -1..1
    mvY.set((py - 0.5) * 2);
  }

  function onLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  async function onSubmit(values: Values) {
    setBanner(null);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 900));

    // demo fail
    if (values.password.trim() === "123456") {
      setLoading(false);
      setBanner({
        type: "err",
        text: "Credenciales inválidas. Intenta nuevamente.",
      });
      return;
    }

    setLoading(false);
    setBanner({ type: "ok", text: `Bienvenido (demo): ${values.email}` });
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[#FFFEFA] shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
        {/* Light premium background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,64,91,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,86,23,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: brand panel */}
          <div className="relative flex min-h-[260px] flex-col justify-between p-8 sm:p-10 lg:min-h-[640px]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 ring-1 ring-black/5 backdrop-blur">
                <Image
                  src="/brand/devwolf-icon.png"
                  alt="Devwolf icon"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-[#18405B]/80">
                  Devwolf
                </div>
                <div className="text-sm text-neutral-500">
                  Ingeniería & Tecnología
                </div>
              </div>
            </div>

            <div className="mt-10 max-w-xl">
              <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Accede a tu galería premium
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Un login claro, elegante y con efecto 3D sutil. Perfecto para tu
                colección de UI.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
                <div className="rounded-2xl border border-neutral-200 bg-white/60 p-4">
                  <div className="text-xs font-semibold text-neutral-900">
                    Tilt Premium
                  </div>
                  <div className="mt-1 text-[11px] text-neutral-500">
                    Solo desktop
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white/60 p-4">
                  <div className="text-xs font-semibold text-neutral-900">
                    Validación
                  </div>
                  <div className="mt-1 text-[11px] text-neutral-500">
                    RHF + Zod
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 hidden items-center gap-2 text-xs text-neutral-400 lg:flex">
              <span className="h-1.5 w-10 rounded-full bg-neutral-900/80" />
              <span className="h-1.5 w-4 rounded-full bg-neutral-900/20" />
              <span className="h-1.5 w-4 rounded-full bg-neutral-900/20" />
            </div>
          </div>

          {/* RIGHT: 3D tilt form card */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <motion.div
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{
                rotateX: tiltEnabled ? rotateX : 0,
                rotateY: tiltEnabled ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-[28px] border border-neutral-200 bg-white/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8"
            >
              {/* moving glare */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[28px]"
                style={{
                  background:
                    "radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.65), transparent 55%)",
                  opacity: tiltEnabled ? 0.55 : 0.25,
                  filter: "blur(0px)",
                  // @ts-ignore
                  "--gx": glareX,
                  // @ts-ignore
                  "--gy": glareY,
                }}
              />

              {/* header */}
              <div
                className="relative"
                style={{ transform: "translateZ(24px)" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D75617]" />
                  Login · Devwolf
                </div>

                <h4 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
                  Bienvenido de vuelta
                </h4>
                <p className="mt-1 text-sm text-neutral-500">
                  Inicia sesión para continuar.
                </p>
              </div>

              <AnimatePresence>
                {banner && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={[
                      "relative mt-5 rounded-2xl border px-4 py-3 text-sm",
                      banner.type === "ok"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-rose-200 bg-rose-50 text-rose-900",
                    ].join(" ")}
                    style={{ transform: "translateZ(22px)" }}
                  >
                    {banner.text}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mt-6 space-y-4"
                style={{ transform: "translateZ(22px)" }}
              >
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-600">
                    Email
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 transition focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                    <Mail className="h-4 w-4 text-neutral-500" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register("email")}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email?.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="text-xs font-medium text-rose-600"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-600">
                    Contraseña
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 transition focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                    <Lock className="h-4 w-4 text-neutral-500" />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((v) => !v)}
                      className="grid h-9 w-9 place-items-center rounded-xl text-neutral-600 transition hover:bg-neutral-50"
                      aria-label={
                        showPass ? "Ocultar contraseña" : "Mostrar contraseña"
                      }
                    >
                      {showPass ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password?.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="text-xs font-medium text-rose-600"
                      >
                        {errors.password.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* remember + forgot */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      {...register("remember")}
                    />
                    Recordarme
                  </label>
                  <a
                    href="#"
                    className="text-xs text-neutral-500 hover:text-neutral-900"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                {/* button */}
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="group relative mt-1 w-full overflow-hidden rounded-2xl bg-[#18405B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 disabled:opacity-70"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.20),transparent_55%)]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Iniciando...
                      </>
                    ) : (
                      "Entrar"
                    )}
                  </span>
                </motion.button>

                <p className="pt-2 text-center text-xs text-neutral-500">
                  ¿No tienes cuenta?{" "}
                  <a
                    href="#"
                    className="font-semibold text-neutral-900 hover:underline"
                  >
                    Crear cuenta
                  </a>
                </p>
              </form>

              {/* tiny note */}
              <div className="relative mt-6 text-center text-[11px] text-neutral-400">
                Tip: en desktop mueve el mouse sobre la tarjeta ✨
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const devwolfTiltLoginLight: Variant = {
  id: "devwolf-tilt-login-light",
  title: "Devwolf Tilt Login Light",
  description: "Login claro con efecto tilt, validación y micro-interacciones.",
  tags: ["login", "tilt", "framer-motion", "light", "zod", "react-hook-form"],
  preview: <DevwolfTiltLoginPreview />,
  code: `
  const schema = z.object({
  email: z.string().email('Ingresa un correo válido.'),
  password: z.string().min(6, 'Mínimo 6 caracteres.'),
  remember: z.boolean().optional(),
  })

  type Values = z.infer<typeof schema>
  
  `,
};
