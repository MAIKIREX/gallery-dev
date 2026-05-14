"use client"

import type { Variant } from "../../../../types"
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
    setBanner({ type: "ok", text: `Welcome back (demo): ${values.email}` })
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

export const realnestSplitLogin: Variant = {
  id: "realnest-split-login",
  title: "Realnest Split Login",
  description: "Login split con hero inmobiliario, validación y micro-interacciones.",
  tags: ["login", "split", "real-estate", "framer-motion", "zod", "react-hook-form"],
  preview: <RealnestSplitLogin />,
  code: ``,
}
