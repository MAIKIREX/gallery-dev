import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <svg className="mx-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {index === items.length - 1 ? (
            <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
