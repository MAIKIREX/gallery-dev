import Link from "next/link"
import type { Collection } from "../types"

interface CollectionListProps {
  collections: Collection[]
  sectionId: string
}

export default function CollectionList({ collections, sectionId }: CollectionListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection) => (
        <Link
          key={collection.id}
          href={`/gallery/${sectionId}/${collection.id}`}
          className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-400">
              {collection.title}
            </h3>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              {collection.variants.length} {collection.variants.length === 1 ? "variant" : "variants"}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{collection.description}</p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400">
            View collection
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  )
}
