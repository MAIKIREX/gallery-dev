
import type { Variant } from "../../../../types"
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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

export const devwolfCarouselStepLogin: Variant = {
  id: "devwolf-carousel-step-login",
  title: "Devwolf Carousel Step Login",
  description: "Login por pasos con carrusel de imágenes, validación y motion",
  tags: [
    "login",
    "auth",
    "carousel",
    "steps",
    "premium",
    "light",
    "react-hook-form",
    "zod",
    "framer-motion",
  ],
  preview: <DevwolfCarouselStepLoginPreview />,
  code: `// Full code for DevwolfCarouselStepLogin
// ... (includes client component logic, state, form handling, etc.)
`,
}
