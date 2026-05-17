import type React from "react"
interface ShellProps {
  children: React.ReactNode
}

export default function Shell({ children }: ShellProps) {
  return <div className="min-h-[100dvh] bg-[#f9fafb] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-500">{children}</div>
}
