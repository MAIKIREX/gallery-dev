
import type { Variant } from "../../../../types"

export const comparisonPricing: Variant = {
  id: "comparison-pricing",
  title: "Comparison Pricing Card",
  description: "Pricing card with comparison features",
  tags: ["pricing", "comparison", "features"],
  preview: (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Starter</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Perfect for trying out our service</p>
      <ul className="mt-6 space-y-3">
        <li className="flex items-start gap-2">
          <svg
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm text-gray-600 dark:text-gray-300">Up to 5 projects</span>
        </li>
        <li className="flex items-start gap-2">
          <svg
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm text-gray-600 dark:text-gray-300">Basic analytics</span>
        </li>
        <li className="flex items-start gap-2">
          <svg
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-sm text-gray-400 line-through dark:text-gray-500">Priority support</span>
        </li>
        <li className="flex items-start gap-2">
          <svg
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-sm text-gray-400 line-through dark:text-gray-500">Custom integrations</span>
        </li>
      </ul>
      <button className="mt-6 w-full rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
        Get Started
      </button>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Starter</h3>
  <div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
<span className="text-gray-500 dark:text-gray-400">/month</span>
  </div>
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Perfect for trying out our service</p>
  <ul className="mt-6 space-y-3">
<li className="flex items-start gap-2">
  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  <span className="text-sm text-gray-600 dark:text-gray-300">Up to 5 projects</span>
</li>
<li className="flex items-start gap-2">
  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  <span className="text-sm text-gray-600 dark:text-gray-300">Basic analytics</span>
</li>
<li className="flex items-start gap-2">
  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
  <span className="text-sm text-gray-400 line-through dark:text-gray-500">Priority support</span>
</li>
<li className="flex items-start gap-2">
  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
  <span className="text-sm text-gray-400 line-through dark:text-gray-500">Custom integrations</span>
</li>
  </ul>
  <button className="mt-6 w-full rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
Get Started
  </button>
</div>`,
}
