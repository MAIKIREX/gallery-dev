
import type { Variant } from "../../../../types"

export const solidButton: Variant = {
  id: "solid-button",
  title: "Solid Button",
  description: "Standard solid background button",
  tags: ["button", "primary", "solid"],
  preview: (
    <button className="rounded-lg bg-blue-500 px-6 py-2.5 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Click me
    </button>
  ),
  code: `<button className="rounded-lg bg-blue-500 px-6 py-2.5 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click me
</button>`,
}
