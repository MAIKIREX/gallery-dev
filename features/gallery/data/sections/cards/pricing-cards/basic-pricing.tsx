
import type { Variant } from "../../../../types"

export const basicPricing: Variant = {
  id: "basic-pricing",
  title: "Basic Pricing Card",
  description: "Simple pricing card with features list",
  tags: ["pricing", "subscription", "plan"],
  preview: (
    <div className="max-w-sm rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pro Plan</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
      </div>
      <ul className="mb-6 space-y-2">
        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Unlimited projects
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Priority support
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Advanced analytics
        </li>
      </ul>
      <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600">
        Get Started
      </button>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg dark:bg-gray-800">
  <div className="mb-4">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pro Plan</h3>
<div className="mt-2 flex items-baseline gap-1">
  <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
  <span className="text-gray-500 dark:text-gray-400">/month</span>
</div>
  </div>
  <ul className="mb-6 space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Unlimited projects
</li>
<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Priority support
</li>
<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Advanced analytics
</li>
  </ul>
  <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600">
Get Started
  </button>
</div>`,
}
