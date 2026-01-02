
import type { Variant } from "../../../../types"

export const featuredPricing: Variant = {
  id: "featured-pricing",
  title: "Featured Pricing Card",
  description: "Highlighted pricing card with badge",
  tags: ["pricing", "featured", "badge"],
  preview: (
    <div className="max-w-sm rounded-lg border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-xl dark:from-purple-950 dark:to-pink-950">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</h3>
        <span className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">$99</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Everything you need for your team</p>
      </div>
      <ul className="mb-6 space-y-3">
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
          <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Unlimited everything
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
          <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          24/7 Priority support
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
          <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Advanced security
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
          <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <button className="w-full rounded-lg bg-purple-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-purple-600">
        Start Free Trial
      </button>
    </div>
  ),
  code: `<div className="max-w-sm rounded-lg border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-xl dark:from-purple-950 dark:to-pink-950">
  <div className="mb-4 flex items-center justify-between">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</h3>
<span className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">Popular</span>
  </div>
  <div className="mb-4">
<div className="flex items-baseline gap-1">
  <span className="text-5xl font-bold text-gray-900 dark:text-white">$99</span>
  <span className="text-gray-500 dark:text-gray-400">/month</span>
</div>
<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Everything you need for your team</p>
  </div>
  <ul className="mb-6 space-y-3">
<li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Unlimited everything
</li>
<li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  24/7 Priority support
</li>
<li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Advanced security
</li>
<li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Custom integrations
</li>
  </ul>
  <button className="w-full rounded-lg bg-purple-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-purple-600">
Start Free Trial
  </button>
</div>`,
}
