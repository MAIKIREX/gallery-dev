
import type { Variant } from "../../../../types"
import { MessageCircle, UserPlus } from "lucide-react";

export const profileDarkPremium: Variant = {
  id: "profile-dark-premium",
  title: "Dark Premium Profile",
  description: "Card dark con gradiente, CTAs dobles y stats",
  tags: ["profile", "dark", "premium", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[360px] overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-rose-500/10 to-sky-500/10" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/15"
                  src="https://i.pravatar.cc/200?img=48"
                  alt="Profile"
                />
                <div>
                  <p className="text-base font-semibold text-white">Christian Moen</p>
                  <p className="text-sm text-white/60">@christianmoen</p>
                </div>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">
                Pro
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Brand strategy, UI systems, and visual direction for modern products.
            </p>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white/90 active:scale-[0.99]">
                <span className="inline-flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" /> Message
                </span>
              </button>
              <button className="flex-1 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.99]">
                <span className="inline-flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" /> Connect
                </span>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Projects", "24"],
                ["Clients", "18"],
                ["Years", "6+"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-white">{v}</p>
                  <p className="text-xs text-white/60">{k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  })(),
  code: `import { MessageCircle, UserPlus } from "lucide-react";

<div className="group w-[360px] overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
  <div className="relative p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-rose-500/10 to-sky-500/10" />
    <div className="relative">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/15" src="https://i.pravatar.cc/200?img=48" alt="Profile" />
          <div>
            <p className="text-base font-semibold text-white">Christian Moen</p>
            <p className="text-sm text-white/60">@christianmoen</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">Pro</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/70">
        Brand strategy, UI systems, and visual direction for modern products.
      </p>

      <div className="mt-5 flex gap-3">
        <button className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white/90 active:scale-[0.99]">
          <span className="inline-flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" /> Message
          </span>
        </button>
        <button className="flex-1 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.99]">
          <span className="inline-flex items-center justify-center gap-2">
            <UserPlus className="h-4 w-4" /> Connect
          </span>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-white/5 p-3 text-center ring-1 ring-white/10">
          <p className="text-sm font-semibold text-white">24</p>
          <p className="text-xs text-white/60">Projects</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-3 text-center ring-1 ring-white/10">
          <p className="text-sm font-semibold text-white">18</p>
          <p className="text-xs text-white/60">Clients</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-3 text-center ring-1 ring-white/10">
          <p className="text-sm font-semibold text-white">6+</p>
          <p className="text-xs text-white/60">Years</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
}
