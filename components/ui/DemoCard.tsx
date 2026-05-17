"use client"

import type React from "react"
import { useState } from "react"
import CodeBlock from "./CodeBlock"

interface DemoCardProps {
  preview: React.ReactNode
  code: string
}

export default function DemoCard({ preview, code }: DemoCardProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="rounded-[2.5rem] border border-black/5 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-white/5 dark:bg-[#111113] overflow-hidden transition-all duration-500">
      <div className="flex min-h-[400px] items-center justify-center p-8 relative">
        <div className="relative z-10 w-full flex justify-center">
            {preview}
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-800/50 p-4 flex justify-end bg-zinc-50/50 dark:bg-zinc-900/20">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs font-medium tracking-wider uppercase text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 px-4 py-2 rounded-full shadow-sm"
        >
          {showCode ? "Hide Code" : "View Code"}
        </button>
      </div>

      {showCode && (
        <div className="border-t border-zinc-100 dark:border-zinc-800/50 bg-zinc-950">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  )
}
