import DemoCard from "@/components/ui/DemoCard"
import type { Variant } from "../types"

interface VariantBlockProps {
  variant: Variant
}

export default function VariantBlock({ variant }: VariantBlockProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">{variant.title}</h2>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">{variant.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {variant.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <DemoCard preview={variant.preview} code={variant.code} />
    </div>
  )
}
