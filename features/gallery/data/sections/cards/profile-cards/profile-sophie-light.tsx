
import type { Variant } from "../../../../types"
import { BadgeCheck, Users, Eye } from "lucide-react";

export const profileSophieLight: Variant = {
  id: "profile-sophie-light",
  title: "Profile Card (Light)",
  description: "Versión clara, limpia y minimal",
  tags: ["profile", "light", "minimal", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[280px] rounded-[28px] bg-white p-4 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.3)]">
        <div className="overflow-hidden rounded-[22px] bg-zinc-100">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Sophie Bennett"
            className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-semibold text-zinc-900">Sophie Bennett</h3>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/20">
              <BadgeCheck className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-1 text-[12px] leading-relaxed text-zinc-500">
            Product Designer who focuses on simplicity & usability.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[12px] text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4" /> 312
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-4 w-4" /> 48
              </span>
            </div>

            <button className="rounded-full bg-zinc-100 px-4 py-2 text-[12px] font-semibold text-zinc-900 transition hover:bg-zinc-200 active:scale-[0.99]">
              Follow <span className="ml-1 font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    );
  })(),
  code: `import { BadgeCheck, Users, Eye } from "lucide-react";

<div className="group w-[280px] rounded-[28px] bg-white p-4 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.3)]">
  <div className="overflow-hidden rounded-[22px] bg-zinc-100">
    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
      alt="Sophie Bennett"
      className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />
  </div>

  <div className="mt-4">
    <div className="flex items-center gap-2">
      <h3 className="text-[16px] font-semibold text-zinc-900">Sophie Bennett</h3>
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/20">
        <BadgeCheck className="h-4 w-4" />
      </span>
    </div>

    <p className="mt-1 text-[12px] leading-relaxed text-zinc-500">
      Product Designer who focuses on simplicity & usability.
    </p>

    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4 text-[12px] text-zinc-500">
        <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" /> 312</span>
        <span className="inline-flex items-center gap-1.5"><Eye className="h-4 w-4" /> 48</span>
      </div>

      <button className="rounded-full bg-zinc-100 px-4 py-2 text-[12px] font-semibold text-zinc-900 transition hover:bg-zinc-200 active:scale-[0.99]">
        Follow <span className="ml-1 font-bold">+</span>
      </button>
    </div>
  </div>
</div>`,
}
