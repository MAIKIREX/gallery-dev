
import type { Variant } from "../../../../types"

export const profileWithActions: Variant = {
  id: "profile-with-actions",
  title: "Profile Card with Actions",
  description: "Interactive profile card with action buttons",
  tags: ["profile", "actions", "buttons"],
  preview: (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-rose-600"></div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Wilson</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Creating delightful user experiences through design thinking and research.
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
          Follow
        </button>
        <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          Message
        </button>
      </div>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex items-start gap-4">
<div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-rose-600"></div>
<div className="flex-1">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Wilson</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
    Creating delightful user experiences through design thinking and research.
  </p>
</div>
  </div>
  <div className="mt-4 flex gap-2">
<button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
  Follow
</button>
<button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
  Message
</button>
  </div>
</div>`,
}
