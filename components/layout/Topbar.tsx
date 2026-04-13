import { ModeToggle } from "@/components/mode-toggle"

interface TopbarProps {
  title: string
  subtitle?: string
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-6 dark:border-gray-800 dark:bg-gray-900">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>}
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}
