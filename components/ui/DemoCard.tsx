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
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-center bg-gray-50 p-8 dark:bg-gray-900">{preview}</div>

      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>

      {showCode && (
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  )
}
