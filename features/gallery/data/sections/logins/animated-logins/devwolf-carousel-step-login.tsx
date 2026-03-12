"use client"

import type { Variant } from "../../../../types"
import { AnimatePresence, motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  email: z.string().email("Ingresa un correo válido."),
  username: z.string().min(3, "Mínimo 3 caracteres."),
  password: z.string().min(6, "Mínimo 6 caracteres."),
  remember: z.boolean().optional(),
})

type Values = z.infer<typeof schema>

function DevwolfCarouselStepLoginPreview() {
  // Slides
  const slides = React.useMemo(
    () => [
      {
        title: "Diseño premium, limpio y rápido",
        desc: "Carrusel con narrativa visual + login por pasos para UX moderna.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Tu marca, tu identidad",
        desc: "Acentos Devwolf (azul + naranja) con un look claro y profesional.",
        img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Animaciones con propósito",
        desc: "Transiciones suaves entre steps y slides: elegante, no invasivo.",
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  )

  // Carousel API (shadcn/embla)
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [activeSlide, setActiveSlide] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setActiveSlide(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    onSelect()

    const id = window.setInterval(() => api.scrollNext(), 6500)
    return () => {
      window.clearInterval(id)
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  // Steps
  const [step, setStep] = React.useState<1 | 2 | 3>(1)
  const [showPass, setShowPass] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [banner, setBanner] = React.useState<{
    type: "ok" | "err"
    text: string
  } | null>(null)

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", username: "", password: "", remember: true },
    mode: "onTouched",
  })

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100

  async function nextStep() {
    setBanner(null)

    const ok =
      step === 1
        ? await form.trigger(["email"])
        : step === 2
        ? await form.trigger(["username"])
        : await form.trigger(["password"])

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

    if (values.password.trim() === "123456") {
      setLoading(false)
      setBanner({ type: "err", text: "Credenciales inválidas. Intenta nuevamente." })
      return
    }

    setLoading(false)
    setBanner({ type: "ok", text: `Bienvenido (demo): ${values.username}` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[#FFFEFA] shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
      >
        {/* Fondo premium */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,64,91,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,86,23,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.28)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: shadcn Carousel */}
          <div className="relative min-h-[300px] lg:min-h-[640px]">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="absolute inset-0"
            >
              <CarouselContent className="h-full">
                {slides.map((s, idx) => (
                  <CarouselItem key={idx} className="relative h-[300px] lg:h-[640px]">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/22 to-black/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Logo */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
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
            <div className="absolute bottom-7 left-7 right-7 z-10 max-w-xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={`t-${activeSlide}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  {slides[activeSlide].title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`d-${activeSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                  className="mt-2 max-w-md text-sm text-white/80"
                >
                  {slides[activeSlide].desc}
                </motion.p>
              </AnimatePresence>

              {/* Dots */}
              <div className="mt-5 flex items-center gap-2">
                {slides.map((_, i) => {
                  const isActive = i === activeSlide
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => api?.scrollTo(i)}
                      className={cn(
                        "h-1.5 rounded-full transition",
                        isActive
                          ? "w-10 bg-white/90"
                          : "w-4 bg-white/40 hover:bg-white/55"
                      )}
                      aria-label={`Slide ${i + 1}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Form shadcn */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <Card className="rounded-[28px] border-neutral-200 bg-white/75 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.20em] text-[#18405B]/80">
                        Devwolf Login
                      </div>
                      <CardTitle className="mt-2 text-2xl font-semibold tracking-tight">
                        Iniciar sesión
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Paso {step} de 3
                      </CardDescription>
                    </div>

                    <Badge className="rounded-full bg-neutral-900 px-4 py-2 text-[11px] font-semibold text-white hover:bg-neutral-900">
                      Sign in
                    </Badge>
                  </div>

                  <div className="pt-1">
                    <Progress value={progress} className="h-2" />
                  </div>

                  <AnimatePresence>
                    {banner && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                      >
                        <Alert
                          className={cn(
                            "mt-2 rounded-2xl",
                            banner.type === "err"
                              ? "border-rose-200 bg-rose-50 text-rose-900"
                              : "border-emerald-200 bg-emerald-50 text-emerald-900"
                          )}
                        >
                          <AlertDescription className="text-sm">
                            {banner.text}
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <AnimatePresence mode="wait" initial={false}>
                        {/* STEP 1: Email */}
                        {step === 1 && (
                          <motion.div
                            key="step-email"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="pl-9"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button
                              type="button"
                              onClick={nextStep}
                              className="w-full rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                            >
                              Continuar <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        )}

                        {/* STEP 2: Username */}
                        {step === 2 && (
                          <motion.div
                            key="step-username"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type="text"
                                        placeholder="tu_usuario"
                                        className="pl-9"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-2 gap-3">
                              <Button type="button" variant="outline" onClick={prevStep} className="rounded-2xl">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Atrás
                              </Button>

                              <Button
                                type="button"
                                onClick={nextStep}
                                className="rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                              >
                                Continuar
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 3: Password */}
                        {step === 3 && (
                          <motion.div
                            key="step-password"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type={showPass ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-9 pr-11"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => setShowPass((v) => !v)}
                                        className="absolute right-1 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50"
                                        aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                                      >
                                        {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                      </button>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex items-center justify-between gap-3 pt-1">
                              <div className="flex items-center gap-2">
                                <FormField
                                  control={form.control}
                                  name="remember"
                                  render={({ field }) => (
                                    <>
                                      <Checkbox
                                        checked={!!field.value}
                                        onCheckedChange={(v) => field.onChange(!!v)}
                                        id="remember"
                                      />
                                      <Label htmlFor="remember" className="text-xs text-neutral-700">
                                        Recordarme
                                      </Label>
                                    </>
                                  )}
                                />
                              </div>

                              <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900">
                                ¿Olvidaste tu contraseña?
                              </a>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <Button type="button" variant="outline" onClick={prevStep} className="rounded-2xl">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Atrás
                              </Button>

                              <Button
                                type="submit"
                                disabled={loading}
                                className="rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                                onClick={async () => {
                                  const ok = await form.trigger(["password"])
                                  if (!ok) return
                                }}
                              >
                                {loading ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Entrando...
                                  </>
                                ) : (
                                  "Login"
                                )}
                              </Button>
                            </div>

                            <p className="pt-2 text-center text-xs text-neutral-500">
                              Sin social login · UX por pasos ✨
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </Form>
                </CardContent>

                <CardFooter className="pt-0" />
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const devwolfCarouselStepLogin: Variant = {
  id: "devwolf-carousel-step-login",
  title: "Devwolf Carousel Step Login (shadcn enhanced)",
  description: "Login por pasos con shadcn/ui (Form, Input, Progress, Alert) + Carousel shadcn y motion",
  tags: ["login", "auth", "carousel", "steps", "shadcn", "react-hook-form", "zod", "framer-motion"],
  preview: <DevwolfCarouselStepLoginPreview />,
  code: `
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  email: z.string().email("Ingresa un correo válido."),
  username: z.string().min(3, "Mínimo 3 caracteres."),
  password: z.string().min(6, "Mínimo 6 caracteres."),
  remember: z.boolean().optional(),
})

type Values = z.infer<typeof schema>

export function DevwolfCarouselStepLogin() {
  // Slides
  const slides = React.useMemo(
    () => [
      {
        title: "Diseño premium, limpio y rápido",
        desc: "Carrusel con narrativa visual + login por pasos para UX moderna.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Tu marca, tu identidad",
        desc: "Acentos Devwolf (azul + naranja) con un look claro y profesional.",
        img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Animaciones con propósito",
        desc: "Transiciones suaves entre steps y slides: elegante, no invasivo.",
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  )

  // Carousel API (shadcn/embla)
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [activeSlide, setActiveSlide] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setActiveSlide(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    onSelect()

    const id = window.setInterval(() => api.scrollNext(), 6500)
    return () => {
      window.clearInterval(id)
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  // Steps
  const [step, setStep] = React.useState<1 | 2 | 3>(1)
  const [showPass, setShowPass] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [banner, setBanner] = React.useState<{
    type: "ok" | "err"
    text: string
  } | null>(null)

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", username: "", password: "", remember: true },
    mode: "onTouched",
  })

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100

  async function nextStep() {
    setBanner(null)

    const ok =
      step === 1
        ? await form.trigger(["email"])
        : step === 2
        ? await form.trigger(["username"])
        : await form.trigger(["password"])

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

    if (values.password.trim() === "123456") {
      setLoading(false)
      setBanner({ type: "err", text: "Credenciales inválidas. Intenta nuevamente." })
      return
    }

    setLoading(false)
    setBanner({ type: "ok", text: \`Bienvenido (demo): \${values.username}\` })
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[#FFFEFA] shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
      >
        {/* Fondo premium */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,64,91,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,86,23,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.28)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: shadcn Carousel */}
          <div className="relative min-h-[300px] lg:min-h-[640px]">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="absolute inset-0"
            >
              <CarouselContent className="h-full">
                {slides.map((s, idx) => (
                  <CarouselItem key={idx} className="relative h-[300px] lg:h-[640px]">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/22 to-black/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Logo */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
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
            <div className="absolute bottom-7 left-7 right-7 z-10 max-w-xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={\`t-\${activeSlide}\`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  {slides[activeSlide].title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={\`d-\${activeSlide}\`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                  className="mt-2 max-w-md text-sm text-white/80"
                >
                  {slides[activeSlide].desc}
                </motion.p>
              </AnimatePresence>

              {/* Dots */}
              <div className="mt-5 flex items-center gap-2">
                {slides.map((_, i) => {
                  const isActive = i === activeSlide
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => api?.scrollTo(i)}
                      className={cn(
                        "h-1.5 rounded-full transition",
                        isActive
                          ? "w-10 bg-white/90"
                          : "w-4 bg-white/40 hover:bg-white/55"
                      )}
                      aria-label={\`Slide \${i + 1}\`}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Form shadcn */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <Card className="rounded-[28px] border-neutral-200 bg-white/75 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.20em] text-[#18405B]/80">
                        Devwolf Login
                      </div>
                      <CardTitle className="mt-2 text-2xl font-semibold tracking-tight">
                        Iniciar sesión
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Paso {step} de 3
                      </CardDescription>
                    </div>

                    <Badge className="rounded-full bg-neutral-900 px-4 py-2 text-[11px] font-semibold text-white hover:bg-neutral-900">
                      Sign in
                    </Badge>
                  </div>

                  <div className="pt-1">
                    <Progress value={progress} className="h-2" />
                  </div>

                  <AnimatePresence>
                    {banner && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                      >
                        <Alert
                          className={cn(
                            "mt-2 rounded-2xl",
                            banner.type === "err"
                              ? "border-rose-200 bg-rose-50 text-rose-900"
                              : "border-emerald-200 bg-emerald-50 text-emerald-900"
                          )}
                        >
                          <AlertDescription className="text-sm">
                            {banner.text}
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <AnimatePresence mode="wait" initial={false}>
                        {/* STEP 1: Email */}
                        {step === 1 && (
                          <motion.div
                            key="step-email"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="pl-9"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button
                              type="button"
                              onClick={nextStep}
                              className="w-full rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                            >
                              Continuar <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        )}

                        {/* STEP 2: Username */}
                        {step === 2 && (
                          <motion.div
                            key="step-username"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type="text"
                                        placeholder="tu_usuario"
                                        className="pl-9"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-2 gap-3">
                              <Button type="button" variant="outline" onClick={prevStep} className="rounded-2xl">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Atrás
                              </Button>

                              <Button
                                type="button"
                                onClick={nextStep}
                                className="rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                              >
                                Continuar
                              </Button>
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 3: Password */}
                        {step === 3 && (
                          <motion.div
                            key="step-password"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                      <Input
                                        {...field}
                                        type={showPass ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-9 pr-11"
                                      />
                                      <button
                                        type="button"
                                        onClick={() => setShowPass((v) => !v)}
                                        className="absolute right-1 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-neutral-600 hover:bg-neutral-50"
                                        aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                                      >
                                        {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                      </button>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex items-center justify-between gap-3 pt-1">
                              <div className="flex items-center gap-2">
                                <FormField
                                  control={form.control}
                                  name="remember"
                                  render={({ field }) => (
                                    <>
                                      <Checkbox
                                        checked={!!field.value}
                                        onCheckedChange={(v) => field.onChange(!!v)}
                                        id="remember"
                                      />
                                      <Label htmlFor="remember" className="text-xs text-neutral-700">
                                        Recordarme
                                      </Label>
                                    </>
                                  )}
                                />
                              </div>

                              <a href="#" className="text-xs text-neutral-500 hover:text-neutral-900">
                                ¿Olvidaste tu contraseña?
                              </a>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <Button type="button" variant="outline" onClick={prevStep} className="rounded-2xl">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Atrás
                              </Button>

                              <Button
                                type="submit"
                                disabled={loading}
                                className="rounded-2xl bg-[#18405B] hover:bg-[#18405B]/95"
                                onClick={async () => {
                                  const ok = await form.trigger(["password"])
                                  if (!ok) return
                                }}
                              >
                                {loading ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Entrando...
                                  </>
                                ) : (
                                  "Login"
                                )}
                              </Button>
                            </div>

                            <p className="pt-2 text-center text-xs text-neutral-500">
                              Sin social login · UX por pasos ✨
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </Form>
                </CardContent>

                <CardFooter className="pt-0" />
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
`,
}
