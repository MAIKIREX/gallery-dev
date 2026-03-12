import type { Variant } from "../../../../types"

export const liftShadowButton: Variant = {
  id: "lift-shadow-button",
  title: "Lift Shadow Button",
  description: "Soft lift with glow on hover",
  tags: ["button", "animation", "hover", "shadow"],
  preview: (
    <button className="group relative rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/40">
      <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative">Lift Action</span>
    </button>
  ),
  code: `<button className="group relative rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/40">
  <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  <span className="relative">Lift Action</span>
</button>`,
}
