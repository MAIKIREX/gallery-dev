import { ModeToggle } from "@/components/mode-toggle"

interface TopbarProps {
  title: string
  subtitle?: string
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="flex items-end justify-between px-12 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">{title}</h1>
        {subtitle && <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[65ch]">{subtitle}</p>}
      </div>
      <div className="pb-2">
        <ModeToggle />
      </div>
    </div>
  )
}
