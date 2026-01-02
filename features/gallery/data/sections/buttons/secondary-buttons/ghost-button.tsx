
import type { Variant } from "../../../../types"

export const ghostButton: Variant = {
  id: "ghost-button",
  title: "Ghost Button",
  description: "Minimal button without border",
  tags: ["button", "ghost", "minimal"],
  preview: (
    <button className="rounded-lg px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800">
      Ghost
    </button>
  ),
  code: `<button className="rounded-lg px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800">
  Ghost
</button>`,
}
