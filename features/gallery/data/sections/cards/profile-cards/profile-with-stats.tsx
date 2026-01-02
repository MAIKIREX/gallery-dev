
import type { Variant } from "../../../../types"

export const profileWithStats: Variant = {
  id: "profile-with-stats",
  title: "Profile Card with Stats",
  description: "Profile card displaying user statistics",
  tags: ["profile", "stats", "metrics"],
  preview: (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Alex Smith</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">128</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
        </div>
      </div>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex flex-col items-center text-center">
<div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
<h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Alex Smith</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
  </div>
  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">128</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
</div>
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
</div>
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
</div>
  </div>
</div>`,
}
