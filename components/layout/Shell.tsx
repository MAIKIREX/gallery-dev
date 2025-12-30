import type React from "react"
interface ShellProps {
  children: React.ReactNode
}

export default function Shell({ children }: ShellProps) {
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</div>
}
