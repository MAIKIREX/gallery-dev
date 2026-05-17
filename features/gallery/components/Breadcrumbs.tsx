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
    <nav className="flex items-center space-x-3 text-xs tracking-wider uppercase font-semibold">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <span className="mx-3 text-zinc-300 dark:text-zinc-700">/</span>
          )}
          {index === items.length - 1 ? (
            <span className="text-zinc-900 dark:text-zinc-50">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
