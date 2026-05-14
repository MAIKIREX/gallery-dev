import type { ReactNode } from "react"

interface DemoFrameProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function DemoFrame({ title, subtitle, children }: DemoFrameProps) {
  return (
    <div className="w-full rounded-3xl bg-white/70 p-6 ring-1 ring-black/10 backdrop-blur">
      <div className="mb-4 space-y-1">
        <p className="text-sm font-semibold text-black/70">{title}</p>
        {subtitle ? <p className="text-xs text-black/50">{subtitle}</p> : null}
      </div>
      <div className="grid min-h-[120px] place-items-center rounded-2xl bg-[#E9E1D6] p-6">
        {children}
      </div>
    </div>
  )
}
