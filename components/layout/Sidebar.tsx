"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/lib/stores/sidebar-store"

interface SidebarProps {
  sections: Array<{ id: string; name: string }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

const getInitials = (label: string) => {
  const words = label.trim().split(/\s+/)
  return words
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  const { collapsed, toggleCollapsed } = useSidebarStore()

  return (
    <aside
      className={cn(
        "sticky top-0 h-screen border-r border-gray-200 bg-white transition-[width] duration-200 dark:border-gray-700 dark:bg-gray-800",
        collapsed ? "w-20 p-3" : "w-64 p-6",
      )}
      data-collapsed={collapsed ? "true" : "false"}
    >
      <div className={cn("mb-6 flex items-center", collapsed ? "justify-center" : "justify-between")}>
        <h2 className={cn("text-lg font-bold text-gray-900 dark:text-white", collapsed && "sr-only")}>
          Categories
        </h2>
        <button
          type="button"
          onClick={toggleCollapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          className="inline-flex size-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
        </button>
      </div>
      <nav className="space-y-2">
        {sections.map((section) => {
          const initials = getInitials(section.name)
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              title={collapsed ? section.name : undefined}
              className={cn(
                "flex w-full items-center rounded-lg py-2.5 text-left text-sm font-medium transition-colors",
                collapsed ? "justify-center px-2" : "gap-3 px-4",
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
              )}
            >
              <span className={cn("truncate", collapsed && "sr-only")}>{section.name}</span>
              <span aria-hidden className={cn("text-xs font-semibold uppercase", !collapsed && "hidden")}>
                {initials}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
