
import type { Variant } from "../../../../types"

export const subtleButton: Variant = {
  id: "subtle-button",
  title: "Subtle Button",
  description: "Soft secondary button with muted colors",
  tags: ["button", "subtle", "soft"],
  preview: (
    <button className="rounded-lg bg-gray-200 px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
      Cancel
    </button>
  ),
  code: `<button className="rounded-lg bg-gray-200 px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
  Cancel
</button>`,
}
