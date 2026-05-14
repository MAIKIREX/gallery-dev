
import type { Variant } from "../../../../types"

export const gradientButton: Variant = {
  id: "gradient-button",
  title: "Gradient Button",
  description: "Button with gradient background",
  tags: ["button", "gradient", "colorful"],
  preview: (
    <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 font-medium text-white hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
      Gradient
    </button>
  ),
  code: `<button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 font-medium text-white hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
  Gradient
</button>`,
}
