
import type { Variant } from "../../../../types"

export const outlineButton: Variant = {
  id: "outline-button",
  title: "Outline Button",
  description: "Button with border and transparent background",
  tags: ["button", "outline", "secondary"],
  preview: (
    <button className="rounded-lg border-2 border-blue-500 px-6 py-2.5 font-medium text-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-950">
      Outline
    </button>
  ),
  code: `<button className="rounded-lg border-2 border-blue-500 px-6 py-2.5 font-medium text-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-950">
  Outline
</button>`,
}
