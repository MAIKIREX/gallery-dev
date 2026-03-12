import type { Variant } from "../../../../types"

export const pingRingButton: Variant = {
  id: "ping-ring-button",
  title: "Ping Ring Button",
  description: "Hover ping ring for subtle feedback",
  tags: ["button", "animation", "ping", "ring"],
  preview: (
    <button className="group relative inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-2.5 font-medium text-emerald-900 transition-colors duration-300 hover:bg-emerald-500/20">
      <span className="absolute inset-0 rounded-full ring-2 ring-emerald-500/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
      <span className="relative">Ping Ring</span>
    </button>
  ),
  code: `<button className="group relative inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-2.5 font-medium text-emerald-900 transition-colors duration-300 hover:bg-emerald-500/20">
  <span className="absolute inset-0 rounded-full ring-2 ring-emerald-500/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
  <span className="relative">Ping Ring</span>
</button>`,
}
