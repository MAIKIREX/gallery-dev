
import type { Variant } from "../../../../types"

export const simpleProfile: Variant = {
  id: "simple-profile",
  title: "Simple Profile Card",
  description: "Basic user profile with avatar and bio",
  tags: ["profile", "user", "avatar"],
  preview: (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        Passionate about creating beautiful and functional user experiences.
      </p>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
<div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
</div>
  </div>
  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
Passionate about creating beautiful and functional user experiences.
  </p>
</div>`,
}
