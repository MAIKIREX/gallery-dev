"use client";

import { useEffect, useMemo, useState } from "react";
import type { Section } from "../../types";
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
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Chrome,
  Eye,
  EyeOff,
  Facebook,
  Github,
  Home,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Ingresa un correo válido."),
  password: z.string().min(6, "Mínimo 6 caracteres."),
  remember: z.boolean().optional(),
});

type LoginValues = z.infer<typeof loginSchema>;

function AuroraLoginPreview() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  const defaultValues = useMemo<LoginValues>(
    () => ({ email: "", password: "", remember: true }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onTouched",
  });

  async function onSubmit(values: LoginValues) {
    setBanner(null);
    setLoading(true);

    // Simulación (tu auth real iría aquí)
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setBanner({
      type: "ok",
      text: `Sesión iniciada (demo) para: ${values.email}`,
    });
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.10)]"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/40 via-violet-400/35 to-fuchsia-400/35 blur-2xl"
            animate={{ x: [0, 25, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/25 via-sky-300/25 to-indigo-300/25 blur-2xl"
            animate={{ x: [0, -18, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
        </div>

        <div className="relative grid md:grid-cols-[1.15fr_0.85fr]">
          {/* Left / Branding */}
          <div className="hidden md:flex md:flex-col md:justify-between p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Dev Gallery · Auth UI
              </div>

              <h3 className="text-3xl font-semibold leading-tight text-neutral-900">
                Login moderno con validación y motion
              </h3>
              <p className="text-sm text-neutral-600">
                Un layout limpio para tu galería, con micro-interacciones
                (errors animados, loading, toggle de contraseña) y panel de
                marca.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {[
                { title: "Validación con Zod", icon: ShieldCheck },
                { title: "Animaciones con Framer", icon: Sparkles },
                { title: "UI lista para responsive", icon: ArrowRight },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/60 px-4 py-3 backdrop-blur"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 text-white">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-neutral-900">
                    {b.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Form */}
          <div className="p-7 sm:p-9 md:p-10">
            <div className="mx-auto w-full max-w-md">
              {/* Mobile mini header */}
              <div className="mb-6 md:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-800">
                  <Sparkles className="h-4 w-4" />
                  Dev Gallery · Login
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Acceso
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-neutral-900">
                    Inicia sesión
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Usa tus credenciales para continuar.
                  </div>
                </div>

                <span className="hidden sm:grid h-12 w-12 place-items-center rounded-2xl bg-neutral-900 text-white ring-1 ring-black/5">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>

              <AnimatePresence>
                {banner && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                      banner.type === "ok"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-rose-200 bg-rose-50 text-rose-900"
                    }`}
                  >
                    {banner.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-4"
              >
                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-neutral-800">
                    Correo
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
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
                        className="mt-2 text-xs font-medium text-rose-600"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-medium text-neutral-800">
                    Contraseña
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
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
                      className="grid h-9 w-9 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50"
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
                        className="mt-2 text-xs font-medium text-rose-600"
                      >
                        {errors.password.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between gap-3 text-sm">
                  <label className="inline-flex items-center gap-2 text-neutral-700">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      {...register("remember")}
                    />
                    Recuérdame
                  </label>

                  <a
                    href="#"
                    className="font-semibold text-neutral-900 hover:underline"
                  >
                    Olvidé mi contraseña
                  </a>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 disabled:opacity-70"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Entrando...
                      </>
                    ) : (
                      <>
                        Iniciar sesión
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Social */}
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  <Github className="h-4 w-4" />
                  Continuar con GitHub
                </motion.button>

                <div className="pt-2 text-center text-sm text-neutral-500">
                  ¿Aún no tienes cuenta?{" "}
                  <a
                    href="#"
                    className="font-semibold text-neutral-900 hover:underline"
                  >
                    Regístrate
                  </a>
                </div>

                {/* Tiny footer */}
                <div className="pt-2 text-center text-xs text-neutral-400">
                  Demo UI · Sin autenticación real.
                </div>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="h-4 w-4" />
                <span>Validación segura con Zod</span>
                <span className="opacity-40">•</span>
                <span>RHF</span>
                <span className="opacity-40">•</span>
                <span>Motion</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </div>
  );
}

type RealnestValues = z.infer<typeof loginSchema>;

function RealnestSplitLoginPreview() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  const defaults = useMemo<RealnestValues>(
    () => ({
      email: "info.madhu786@gmail.com",
      password: "password",
      remember: true,
    }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RealnestValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaults,
    mode: "onTouched",
  });

  async function onSubmit(values: RealnestValues) {
    setBanner(null);
    setLoading(true);

    // demo: simula login
    await new Promise((r) => setTimeout(r, 900));

    // demo: falla si password = 123456
    if (values.password.trim() === "123456") {
      setLoading(false);
      setBanner({
        type: "err",
        text: "Credenciales inválidas. Intenta nuevamente.",
      });
      return;
    }

    setLoading(false);
    setBanner({ type: "ok", text: `Welcome back (demo): ${values.email}` });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Image hero */}
        <div className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80"
            alt="Home hero"
            fill
            className="object-cover"
            priority
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

          {/* top-left brand */}
          <div className="absolute left-6 top-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-neutral-900 ring-1 ring-white/30 backdrop-blur">
              <Home className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-white">Realnest</div>
          </div>

          {/* bottom text */}
          <div className="absolute bottom-7 left-7 right-7 max-w-xl">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Find Your Sweet Home
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/80">
              Visiting your dream property is now just a few clicks away — fast,
              easy, reliable.
            </p>

            {/* dots / slider indicator */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-10 rounded-full bg-white/90" />
              <span className="h-1.5 w-4 rounded-full bg-white/40" />
              <span className="h-1.5 w-4 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="relative flex min-h-[520px] flex-col bg-white p-7 sm:p-10 lg:min-h-[640px]">
          {/* top-right pill */}
          <div className="absolute right-6 top-6">
            <button
              type="button"
              className="rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-neutral-800"
            >
              Sign in
            </button>
          </div>

          <div className="mt-16 w-full max-w-md">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Welcome Back to Realnest!
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Sign in your account
            </p>

            <AnimatePresence>
              {banner && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className={[
                    "mt-5 rounded-2xl border px-4 py-3 text-sm",
                    banner.type === "ok"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-rose-200 bg-rose-50 text-rose-900",
                  ].join(" ")}
                >
                  {banner.text}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-600">
                  Your Email
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  <input
                    type="email"
                    className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                    placeholder="name@email.com"
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
                  Password
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                  <Lock className="h-4 w-4 text-neutral-500" />
                  <input
                    type={showPass ? "text" : "password"}
                    className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                    placeholder="••••••••"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="grid h-9 w-9 place-items-center rounded-lg text-neutral-600 hover:bg-neutral-50"
                    aria-label={showPass ? "Hide password" : "Show password"}
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

              {/* Remember + forgot */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    {...register("remember")}
                  />
                  Remember Me
                </label>
                <a
                  href="#"
                  className="text-xs text-neutral-500 hover:text-neutral-900"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Primary button */}
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="mt-1 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </motion.button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="h-px w-full bg-neutral-200" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] text-neutral-400">
                  Instant Login
                </div>
              </div>

              {/* Social */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  <Chrome className="h-4 w-4" />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  <Facebook className="h-4 w-4" />
                  Continue with Facebook
                </button>
              </div>

              <p className="pt-2 text-center text-xs text-neutral-500">
                Don&apos;t have any account?{" "}
                <a
                  href="#"
                  className="font-semibold text-neutral-900 hover:underline"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type DevwolfValues = z.infer<typeof loginSchema>;

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

  const defaults = useMemo<DevwolfValues>(
    () => ({ email: "", password: "", remember: true }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DevwolfValues>({
    resolver: zodResolver(loginSchema),
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

  async function onSubmit(values: DevwolfValues) {
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

const schema = z.object({
  email: z.string().email('Ingresa un correo válido.'),
  username: z.string().min(3, 'Mínimo 3 caracteres.'),
  password: z.string().min(6, 'Mínimo 6 caracteres.'),
  remember: z.boolean().optional(),
})
type Values = z.infer<typeof schema>

function DevwolfCarouselStepLoginPreview() {
  // Carousel
  const slides = useMemo(
    () => [
      {
        title: 'Diseño premium, limpio y rápido',
        desc: 'Carrusel con narrativa visual + login por pasos para UX moderna.',
        img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
      },
      {
        title: 'Tu marca, tu identidad',
        desc: 'Acentos Devwolf (azul + naranja) con un look claro y profesional.',
        img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80',
      },
      {
        title: 'Animaciones con propósito',
        desc: 'Transiciones suaves entre steps y slides: elegante, no invasivo.',
        img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80',
      },
    ],
    []
  )
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((s) => (s + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [slides.length])

  // Steps (Email -> Username -> Password)
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const defaults = useMemo<Values>(
    () => ({ email: '', username: '', password: '', remember: true }),
    []
  )

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: 'onTouched',
  })

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100

  async function nextStep() {
    setBanner(null)

    const ok =
      step === 1
        ? await trigger(['email'])
        : step === 2
        ? await trigger(['username'])
        : await trigger(['password'])

    if (!ok) return
    if (step < 3) setStep((step + 1) as 1 | 2 | 3)
  }

  function prevStep() {
    setBanner(null)
    if (step > 1) setStep((step - 1) as 1 | 2 | 3)
  }

  async function onSubmit(values: Values) {
    setBanner(null)
    setLoading(true)

    await new Promise((r) => setTimeout(r, 900))

    // demo fail
    if (values.password.trim() === '123456') {
      setLoading(false)
      setBanner({ type: 'err', text: 'Credenciales inválidas. Intenta nuevamente.' })
      return
    }

    setLoading(false)
    setBanner({ type: 'ok', text: `Bienvenido (demo): ${values.username}` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[#FFFEFA] shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
      >
        {/* Soft premium background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,64,91,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,86,23,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.28)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: Carousel */}
          <div className="relative min-h-[300px] lg:min-h-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[activeSlide].img}
                  alt={slides[activeSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/22 to-black/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
              </motion.div>
            </AnimatePresence>

            {/* Logo (icon only) */}
            <div className="absolute left-6 top-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 ring-1 ring-white/25 backdrop-blur">
                <Image
                  src="/brand/devwolf-icon.png"
                  alt="Devwolf icon"
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="absolute bottom-7 left-7 right-7 max-w-xl">
              <motion.h3
                key={`t-${activeSlide}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                {slides[activeSlide].title}
              </motion.h3>

              <motion.p
                key={`d-${activeSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                className="mt-2 max-w-md text-sm text-white/80"
              >
                {slides[activeSlide].desc}
              </motion.p>

              {/* Indicators */}
              <div className="mt-5 flex items-center gap-2">
                {slides.map((_, i) => {
                  const active = i === activeSlide
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveSlide(i)}
                      className={[
                        'h-1.5 rounded-full transition',
                        active ? 'w-10 bg-white/90' : 'w-4 bg-white/40 hover:bg-white/55',
                      ].join(' ')}
                      aria-label={`Slide ${i + 1}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Step Form */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="rounded-[28px] border border-neutral-200 bg-white/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.20em] text-[#18405B]/80">
                      Devwolf Login
                    </div>
                    <h4 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                      Iniciar sesión
                    </h4>
                    <p className="mt-1 text-sm text-neutral-500">
                      Paso {step} de 3
                    </p>
                  </div>

                  <span className="rounded-full bg-neutral-900 px-4 py-2 text-[11px] font-semibold text-white">
                    Sign in
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-5">
                  <div className="h-2 w-full rounded-full bg-neutral-200">
                    <motion.div
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="h-2 rounded-full bg-[#18405B]"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {banner && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className={[
                        'mt-5 rounded-2xl border px-4 py-3 text-sm',
                        banner.type === 'ok'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                          : 'border-rose-200 bg-rose-50 text-rose-900',
                      ].join(' ')}
                    >
                      {banner.text}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-4"
                >
                  {/* Steps content */}
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step-email"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-neutral-600">Email</label>
                          <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 transition focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                            <Mail className="h-4 w-4 text-neutral-500" />
                            <input
                              type="email"
                              placeholder="tu@email.com"
                              className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                              {...register('email')}
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

                        <motion.button
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.99 }}
                          type="button"
                          onClick={nextStep}
                          className="group relative w-full overflow-hidden rounded-2xl bg-[#18405B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                        >
                          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.20),transparent_55%)]" />
                          <span className="relative inline-flex items-center justify-center gap-2">
                            Continuar <ArrowRight className="h-4 w-4" />
                          </span>
                        </motion.button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step-username"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-neutral-600">Username</label>
                          <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 transition focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                            <User className="h-4 w-4 text-neutral-500" />
                            <input
                              type="text"
                              placeholder="tu_usuario"
                              className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                              {...register('username')}
                            />
                          </div>
                          <AnimatePresence>
                            {errors.username?.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="text-xs font-medium text-rose-600"
                              >
                                {errors.username.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Atrás
                          </button>

                          <motion.button
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            type="button"
                            onClick={nextStep}
                            className="rounded-2xl bg-[#18405B] px-4 py-3 text-sm font-semibold text-white hover:brightness-110"
                          >
                            Continuar
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step-password"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-neutral-600">Password</label>
                          <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 transition focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                            <Lock className="h-4 w-4 text-neutral-500" />
                            <input
                              type={showPass ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                              {...register('password')}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPass((v) => !v)}
                              className="grid h-9 w-9 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50"
                              aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            >
                              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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

                        <div className="flex items-center justify-between gap-3 pt-1">
                          <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                              {...register('remember')}
                            />
                            Recordarme
                          </label>
                          <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900">
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Atrás
                          </button>

                          <motion.button
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            onClick={async () => {
                              // ensure step 3 is valid before submit
                              const ok = await trigger(['password'])
                              if (!ok) return
                            }}
                            disabled={loading}
                            className="group relative overflow-hidden rounded-2xl bg-[#18405B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 disabled:opacity-70"
                          >
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.20),transparent_55%)]" />
                            <span className="relative inline-flex items-center justify-center gap-2">
                              {loading ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Entrando...
                                </>
                              ) : (
                                'Login'
                              )}
                            </span>
                          </motion.button>
                        </div>

                        <p className="pt-2 text-center text-xs text-neutral-500">
                          Sin social login · UX por pasos ✨
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}



export const loginsSection: Section = {
  id: "logins",
  name: "Login",
  collections: [
    {
      id: "animated-logins",
      title: "Logins Animados",
      description: "Layouts responsive con validación y micro-interacciones",
      variants: [
        {
          id: "aurora-login-zod-motion",
          title: "Aurora Login (Zod + Motion)",
          description:
            "Login split responsive con fondos animados, validación con Zod y estados (loading / errores) animados",
          tags: [
            "login",
            "auth",
            "responsive",
            "framer-motion",
            "react-hook-form",
            "zod",
            "lucide",
          ],
          preview: <AuroraLoginPreview />,
          code: `'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Ingresa un correo válido.'),
  password: z.string().min(6, 'Mínimo 6 caracteres.'),
  remember: z.boolean().optional(),
})

type LoginValues = z.infer<typeof loginSchema>

export default function AuroraLogin() {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const defaultValues = useMemo<LoginValues>(
    () => ({ email: '', password: '', remember: true }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: 'onTouched',
  })

  async function onSubmit(values: LoginValues) {
    setBanner(null)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setBanner({ type: 'ok', text: \`Sesión iniciada (demo) para: \${values.email}\` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.10)]"
      >
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/40 via-violet-400/35 to-fuchsia-400/35 blur-2xl"
            animate={{ x: [0, 25, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/25 via-sky-300/25 to-indigo-300/25 blur-2xl"
            animate={{ x: [0, -18, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
        </div>

        <div className="relative grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="hidden md:flex md:flex-col md:justify-between p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-800 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Dev Gallery · Auth UI
              </div>
              <h3 className="text-3xl font-semibold leading-tight text-neutral-900">
                Login moderno con validación y motion
              </h3>
              <p className="text-sm text-neutral-600">
                Micro-interacciones: errors animados, loading, toggle de contraseña.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {[
                { title: 'Validación con Zod' },
                { title: 'Animaciones con Framer' },
                { title: 'UI lista para responsive' },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/60 px-4 py-3 backdrop-blur"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-neutral-900">{b.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 sm:p-9 md:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-6 md:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-800">
                  <Sparkles className="h-4 w-4" />
                  Dev Gallery · Login
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Acceso
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-neutral-900">Inicia sesión</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Usa tus credenciales para continuar.
                  </div>
                </div>

                <span className="hidden sm:grid h-12 w-12 place-items-center rounded-2xl bg-neutral-900 text-white ring-1 ring-black/5">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>

              <AnimatePresence>
                {banner && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
                  >
                    {banner.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-neutral-800">Correo</label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                    <Mail className="h-4 w-4 text-neutral-500" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register('email')}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email?.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="mt-2 text-xs font-medium text-rose-600"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-800">Contraseña</label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 ring-offset-2 focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10">
                    <Lock className="h-4 w-4 text-neutral-500" />
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register('password')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((v) => !v)}
                      className="grid h-9 w-9 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50"
                      aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password?.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="mt-2 text-xs font-medium text-rose-600"
                      >
                        {errors.password.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <label className="inline-flex items-center gap-2 text-neutral-700">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      {...register('remember')}
                    />
                    Recuérdame
                  </label>
                  <a href="#" className="font-semibold text-neutral-900 hover:underline">
                    Olvidé mi contraseña
                  </a>
                </div>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 disabled:opacity-70"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Entrando...
                      </>
                    ) : (
                      <>
                        Iniciar sesión
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  <Github className="h-4 w-4" />
                  Continuar con GitHub
                </motion.button>

                <div className="pt-2 text-center text-sm text-neutral-500">
                  ¿Aún no tienes cuenta?{' '}
                  <a href="#" className="font-semibold text-neutral-900 hover:underline">
                    Regístrate
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </div>
  )
}
`,
        },
        {
          id: "realnest-split-login",
          title: "Split login (Realnest)",
          description:
            "Layout dividido con imagen hero + formulario limpio (RHF + Zod + Motion)",
          tags: [
            "login",
            "auth",
            "split",
            "realnest",
            "responsive",
            "react-hook-form",
            "zod",
            "framer-motion",
          ],
          preview: <RealnestSplitLoginPreview />,
          code: `/* Código completo: RealnestSplitLogin (Next.js + RHF + Zod + Motion) */

"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Chrome, Eye, EyeOff, Facebook, Home, Loader2, Lock, Mail } from "lucide-react"

const schema = z.object({
  email: z.string().email("Ingresa un correo válido."),
  password: z.string().min(6, "Mínimo 6 caracteres."),
  remember: z.boolean().optional(),
})

type Values = z.infer<typeof schema>

export function RealnestSplitLogin() {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState<{ type: "ok" | "err"; text: string } | null>(null)

  const defaults = useMemo<Values>(
    () => ({ email: "", password: "", remember: true }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: "onTouched",
  })

  async function onSubmit(values: Values) {
    setBanner(null)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setBanner({ type: "ok", text: \`Welcome back (demo): \${values.email}\` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80"
            alt="Home hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
          <div className="absolute left-6 top-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-neutral-900">
              <Home className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-white">Realnest</div>
          </div>
          <div className="absolute bottom-7 left-7 right-7">
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">Find Your Sweet Home</h3>
            <p className="mt-2 max-w-md text-sm text-white/80">
              Visiting your dream property is now just a few clicks away — fast, easy, reliable.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-10 rounded-full bg-white/90" />
              <span className="h-1.5 w-4 rounded-full bg-white/40" />
              <span className="h-1.5 w-4 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[520px] flex-col bg-white p-7 sm:p-10 lg:min-h-[640px]">
          <div className="absolute right-6 top-6">
            <button type="button" className="rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold text-white">
              Sign in
            </button>
          </div>

          <div className="mt-16 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">Welcome Back to Realnest!</h2>
            <p className="mt-2 text-sm text-neutral-500">Sign in your account</p>

            <AnimatePresence>
              {banner && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
                >
                  {banner.text}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-600">Your Email</label>
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2.5 focus-within:border-neutral-900">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  <input className="w-full bg-transparent text-sm focus:outline-none" {...register("email")} />
                </div>
                {errors.email?.message && <p className="text-xs font-medium text-rose-600">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-600">Password</label>
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2.5 focus-within:border-neutral-900">
                  <Lock className="h-4 w-4 text-neutral-500" />
                  <input
                    type={showPass ? "text" : "password"}
                    className="w-full bg-transparent text-sm focus:outline-none"
                    {...register("password")}
                  />
                  <button type="button" onClick={() => setShowPass((v) => !v)} className="grid h-9 w-9 place-items-center rounded-lg">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password?.message && <p className="text-xs font-medium text-rose-600">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" {...register("remember")} />
                  Remember Me
                </label>
                <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900">Forgot Password?</a>
              </div>

              <button disabled={loading} className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-70">
                {loading ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </button>

              <div className="relative py-2">
                <div className="h-px w-full bg-neutral-200" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] text-neutral-400">
                  Instant Login
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs font-semibold text-neutral-700">
                  <Chrome className="h-4 w-4" />
                  Continue with Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs font-semibold text-neutral-700">
                  <Facebook className="h-4 w-4" />
                  Continue with Facebook
                </button>
              </div>

              <p className="pt-2 text-center text-xs text-neutral-500">
                Don't have any account? <a href="#" className="font-semibold text-neutral-900 hover:underline">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
        },
        {
          id: "devwolf-tilt-login-light",
          title: "Devwolf Tilt Login (Light)",
          description: "Login claro premium con efecto 3D tilt sutil + RHF/Zod",
          tags: [
            "login",
            "auth",
            "tilt",
            "premium",
            "light",
            "react-hook-form",
            "zod",
            "framer-motion",
          ],
          preview: <DevwolfTiltLoginPreview />,
          code: `'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react'

const schema = z.object({
  email: z.string().email('Ingresa un correo válido.'),
  password: z.string().min(6, 'Mínimo 6 caracteres.'),
  remember: z.boolean().optional(),
})

type Values = z.infer<typeof schema>

export default function DevwolfTiltLogin() {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const [tiltEnabled, setTiltEnabled] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setTiltEnabled(mq.matches && window.innerWidth >= 1024)
    update()
    window.addEventListener('resize', update)
    mq.addEventListener?.('change', update)
    return () => {
      window.removeEventListener('resize', update)
      mq.removeEventListener?.('change', update)
    }
  }, [])

  const defaults = useMemo<Values>(() => ({ email: '', password: '', remember: true }), [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: 'onTouched',
  })

  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const sX = useSpring(mvX, { stiffness: 220, damping: 26, mass: 0.7 })
  const sY = useSpring(mvY, { stiffness: 220, damping: 26, mass: 0.7 })
  const rotateX = useTransform(sY, [-1, 1], [10, -10])
  const rotateY = useTransform(sX, [-1, 1], [-10, 10])
  const glareX = useTransform(sX, [-1, 1], ['20%', '80%'])
  const glareY = useTransform(sY, [-1, 1], ['20%', '80%'])

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    mvX.set((px - 0.5) * 2)
    mvY.set((py - 0.5) * 2)
  }

  function onLeave() {
    mvX.set(0)
    mvY.set(0)
  }

  async function onSubmit(values: Values) {
    setBanner(null)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setBanner({ type: 'ok', text: \`Bienvenido (demo): \${values.email}\` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[#FFFEFA] shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,64,91,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,86,23,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
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
                <div className="text-sm text-neutral-500">Ingeniería & Tecnología</div>
              </div>
            </div>

            <div className="mt-10 max-w-xl">
              <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Accede a tu galería premium
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Login claro, elegante y con efecto 3D sutil.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <motion.div
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{
                rotateX: tiltEnabled ? rotateX : 0,
                rotateY: tiltEnabled ? rotateY : 0,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md rounded-[28px] border border-neutral-200 bg-white/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[28px]"
                style={{
                  background:
                    'radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.65), transparent 55%)',
                  opacity: tiltEnabled ? 0.55 : 0.25,
                  // @ts-ignore
                  '--gx': glareX,
                  // @ts-ignore
                  '--gy': glareY,
                }}
              />

              <h4 className="relative text-2xl font-semibold tracking-tight text-neutral-900" style={{ transform: 'translateZ(24px)' }}>
                Bienvenido de vuelta
              </h4>
              <p className="relative mt-1 text-sm text-neutral-500" style={{ transform: 'translateZ(22px)' }}>
                Inicia sesión para continuar.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="relative mt-6 space-y-4" style={{ transform: 'translateZ(22px)' }}>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-600">Email</label>
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-neutral-900">
                    <Mail className="h-4 w-4 text-neutral-500" />
                    <input
                      type="email"
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register('email')}
                    />
                  </div>
                  {errors.email?.message && <p className="text-xs font-medium text-rose-600">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-600">Contraseña</label>
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-neutral-900">
                    <Lock className="h-4 w-4 text-neutral-500" />
                    <input
                      type={showPass ? 'text' : 'password'}
                      className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                      {...register('password')}
                    />
                    <button type="button" onClick={() => setShowPass((v) => !v)} className="grid h-9 w-9 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50">
                      {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password?.message && <p className="text-xs font-medium text-rose-600">{errors.password.message}</p>}
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                    <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" {...register('remember')} />
                    Recordarme
                  </label>
                  <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900">¿Olvidaste tu contraseña?</a>
                </div>

                <button disabled={loading} className="mt-1 w-full rounded-2xl bg-[#18405B] px-4 py-3 text-sm font-semibold text-white disabled:opacity-70">
                  {loading ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Iniciando...
                    </span>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
        },
        {
          id: 'devwolf-carousel-step-login',
          title: 'Devwolf Carousel + Step Login',
          description: 'Carrusel (3 slides) + login por pasos (Email → Username → Password)',
          tags: ['login', 'carousel', 'step', 'light', 'react-hook-form', 'zod', 'framer-motion', 'lucide'],
          preview: <DevwolfCarouselStepLoginPreview />,
          code: `// Usa el preview del archivo como referencia (este variant está pensado para tu galería).`,
        },
      ],
    },
  ],
};
