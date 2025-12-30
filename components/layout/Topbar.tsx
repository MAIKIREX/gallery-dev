interface TopbarProps {
  title: string
  subtitle?: string
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="border-b border-gray-200 bg-white px-8 py-6 dark:border-gray-700 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}
