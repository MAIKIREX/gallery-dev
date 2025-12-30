import DemoCard from "@/components/ui/DemoCard"
import type { Variant } from "../types"

interface VariantBlockProps {
  variant: Variant
}

export default function VariantBlock({ variant }: VariantBlockProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{variant.title}</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{variant.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {variant.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
