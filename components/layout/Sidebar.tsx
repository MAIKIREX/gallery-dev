"use client"

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
        "sticky top-0 h-[100dvh] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        collapsed ? "w-20 px-2 py-8" : "w-72 px-8 py-10",
      )}
    >
      <div className={cn("mb-12 flex items-center", collapsed ? "justify-center" : "justify-between")}>
        <h2 className={cn("text-xs tracking-widest font-semibold uppercase text-zinc-400 dark:text-zinc-500", collapsed && "sr-only")}>
          Index
        </h2>
        <button
          type="button"
          onClick={toggleCollapsed}
          className="inline-flex size-8 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          {collapsed ? (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5L10 7.5L5.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
             <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.5L5 7.5L9.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>
      </div>
      <nav className="space-y-4">
        {sections.map((section) => {
          const initials = getInitials(section.name)
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              title={collapsed ? section.name : undefined}
              className={cn(
                "flex w-full items-center text-left text-sm transition-all duration-300",
                collapsed ? "justify-center" : "gap-4",
                isActive
                  ? "text-zinc-900 font-medium dark:text-zinc-50"
                  : "text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300",
              )}
            >
              <span className={cn("truncate", collapsed && "sr-only")}>{section.name}</span>
              <span aria-hidden className={cn("text-xs font-medium uppercase tracking-wider", !collapsed && "hidden")}>
                {initials}
              </span>
              {!collapsed && isActive && (
                <span className="ml-auto size-1.5 rounded-full bg-zinc-900 dark:bg-zinc-50" />
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
