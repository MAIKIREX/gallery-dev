
import type { Variant } from "../../../../types"
import { ArrowUpRight } from "lucide-react";

export const profileEditorialSoft: Variant = {
  id: "profile-editorial-soft",
  title: "Editorial Soft Profile",
  description: "Minimal elegante con tags y CTA",
  tags: ["profile", "minimal", "editorial", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[360px] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/200?img=7"
                alt="Profile"
              />
              <div>
                <p className="text-base font-semibold text-zinc-900">Sofia M.</p>
                <p className="text-sm text-zinc-500">Editorial Designer</p>
              </div>
            </div>

            <button className="rounded-full bg-zinc-100 p-2 text-zinc-800 transition hover:bg-zinc-200 active:scale-[0.98]">
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            I craft calm, editorial interfaces with strong typography and subtle motion.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Typography", "Design Systems", "Motion"].map((t) => (
              <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                {t}
              </span>
            ))}
          </div>

          <button className="mt-5 w-full rounded-2xl bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]">
            Hire
          </button>
        </div>
      </div>
    );
  })(),
  code: `import { ArrowUpRight } from "lucide-react";

<div className="group w-[360px] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  <div className="p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img className="h-12 w-12 rounded-full object-cover" src="https://i.pravatar.cc/200?img=7" alt="Profile" />
        <div>
          <p className="text-base font-semibold text-zinc--900">Sofia M.</p>
          <p className="text-sm text-zinc-500">Editorial Designer</p>
        </div>
      </div>

      <button className="rounded-full bg-zinc-100 p-2 text-zinc-800 transition hover:bg-zinc-200 active:scale-[0.98]">
        <ArrowUpRight className="h-5 w-5" />
      </button>
    </div>

    <p className="mt-4 text-sm leading-relaxed text-zinc-600">
      I craft calm, editorial interfaces with strong typography and subtle motion.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">Typography</span>
      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">Design Systems</span>
      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">Motion</span>
    </div>

    <button className="mt-5 w-full rounded-2xl bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]">
      Hire
    </button>
  </div>
</div>`,
}
