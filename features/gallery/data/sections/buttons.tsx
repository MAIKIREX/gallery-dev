import type { Section } from "../../types"

export const buttonsSection: Section = {
  id: "buttons",
  name: "Buttons",
  collections: [
    {
      id: "primary-buttons",
      title: "Primary Buttons",
      description: "Main action buttons with solid backgrounds",
      variants: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
      ],
    },
    {
      id: "secondary-buttons",
      title: "Secondary Buttons",
      description: "Outline and ghost style buttons for secondary actions",
      variants: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
      ],
    },
  ],
}
