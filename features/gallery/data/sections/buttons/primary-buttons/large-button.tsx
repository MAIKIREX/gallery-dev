
import type { Variant } from "../../../../types"

export const largeButton: Variant = {
  id: "large-button",
  title: "Large Button",
  description: "Large primary button for hero sections",
  tags: ["button", "large", "hero"],
  preview: (
    <button className="rounded-lg bg-emerald-500 px-8 py-3.5 text-lg font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
      Get Started
    </button>
  ),
  code: `<button className="rounded-lg bg-emerald-500 px-8 py-3.5 text-lg font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
  Get Started
</button>`,
}
