
import type { Variant } from "../../../../types"

export const linkButton: Variant = {
  id: "link-button",
  title: "Link Button",
  description: "Text-only button styled as a link",
  tags: ["button", "link", "text"],
  preview: (
    <button className="font-medium text-blue-500 hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Learn more
    </button>
  ),
  code: `<button className="font-medium text-blue-500 hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Learn more
</button>`,
}
