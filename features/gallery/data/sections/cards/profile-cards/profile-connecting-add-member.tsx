
import type { Variant } from "../../../../types"
import { Loader2, Plus } from "lucide-react";

export const profileConnectingAddMember: Variant = {
  id: "profile-connecting-add-member",
  title: "Connecting Profile (Add Member)",
  description: "Card gris con foto en B/N, estado 'Connecting' y CTA Add Member",
  tags: ["profile", "connecting", "overlay", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[320px] overflow-hidden rounded-[34px] bg-zinc-400 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-50px_rgba(0,0,0,0.6)]">
        <div className="relative h-[420px]">
          {/* BG */}
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Louisa Marin"
            className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* Soft gray overlay (like reference) */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/55 via-zinc-400/25 to-zinc-900/60" />

          {/* Title */}
          <div className="absolute inset-x-0 top-8 text-center">
            <h3 className="text-[44px] font-extrabold tracking-tight text-white drop-shadow">
              Louisa Marin
            </h3>
            <div className="mt-2 flex items-center justify-center gap-2 text-white/85">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm font-medium">Connecting</span>
            </div>
          </div>

          {/* Bottom area */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-end justify-between gap-4">
              {/* user */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/35">
                  <img
                    src="https://i.pravatar.cc/120?img=32"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">louisa_marin01</p>
                  <p className="text-xs text-white/70">23m ago</p>
                </div>
              </div>

              {/* button */}
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15 active:scale-[0.99]"
                type="button"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <Plus className="h-4 w-4" />
                </span>
                Add Member
              </button>
            </div>
          </div>

          {/* Inner border */}
          <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/12" />
        </div>
      </div>
    );
  })(),
  code: `import { Loader2, Plus } from "lucide-react";

<div className="group w-[320px] overflow-hidden rounded-[34px] bg-zinc-400 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-50px_rgba(0,0,0,0.6)]">
  <div className="relative h-[420px]">
    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
      alt="Louisa Marin"
      className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-[1.05]"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/55 via-zinc-400/25 to-zinc-900/60" />

    <div className="absolute inset-x-0 top-8 text-center">
      <h3 className="text-[44px] font-extrabold tracking-tight text-white drop-shadow">Louisa Marin</h3>
      <div className="mt-2 flex items-center justify-center gap-2 text-white/85">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm font-medium">Connecting</span>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 p-5">
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/35">
            <img src="https://i.pravatar.cc/120?img=32" alt="avatar" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">louisa_marin01</p>
            <p className="text-xs text-white/70">23m ago</p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15 active:scale-[0.99]" type="button">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
            <Plus className="h-4 w-4" />
          </span>
          Add Member
        </button>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/12" />
  </div>
</div>`,
}
