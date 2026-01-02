'use client'

import type { Variant } from '../../../../types'
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

function AuroraLogin() {
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
    setBanner({ type: 'ok', text: `Sesión iniciada (demo) para: ${values.email}` })
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
              {[ { title: 'Validación con Zod' }, { title: 'Animaciones con Framer' }, { title: 'UI lista para responsive' }, ].map((b) => (
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

export const auroraLoginZodMotion: Variant = {
  id: 'aurora-login-zod-motion',
  title: 'Aurora Login with Zod',
  description: 'Login form with Zod validation and Framer Motion animations.',
  tags: ['login', 'zod', 'framer-motion', 'aurora', 'light'],
  preview: <AuroraLogin />,
  code: ``,
}
