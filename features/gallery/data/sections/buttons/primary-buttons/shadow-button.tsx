
import type { Variant } from "../../../../types"

export const shadowButton: Variant = {
  id: "shadow-button",
  title: "Shadow Button",
  description: "Button with prominent shadow effect",
  tags: ["button", "shadow", "elevated"],
  preview: (
    <button className="rounded-lg bg-indigo-500 px-6 py-2.5 font-medium text-white shadow-lg hover:bg-indigo-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      Elevated
    </button>
  ),
  code: `<button className="rounded-lg bg-indigo-500 px-6 py-2.5 font-medium text-white shadow-lg hover:bg-indigo-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Elevated
</button>`,
}
