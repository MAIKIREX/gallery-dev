"use client"

import { useState } from "react"
import { Highlight, themes, type Language } from "prism-react-renderer"

interface CodeBlockProps {
  code: string
  language?: Language
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const normalizedCode = code.trimEnd()

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-md bg-gray-800 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <Highlight theme={themes.nightOwl} code={normalizedCode} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} w-full max-w-full overflow-x-auto rounded-lg border border-gray-800 text-sm leading-relaxed`}
            style={style}
          >
            <code className="block min-w-full whitespace-pre px-4 py-4">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-xs text-gray-500">{i + 1}</span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}
