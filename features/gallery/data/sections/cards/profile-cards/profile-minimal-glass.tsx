
import type { Variant } from "../../../../types"
import { Mail, Phone, MapPin } from "lucide-react";

export const profileMinimalGlass: Variant = {
  id: "profile-minimal-glass",
  title: "Minimal Glass Profile",
  description: "Glass card con estado online, stats y contactos",
  tags: ["profile", "glass", "minimal", "lucide", "hover"],
  preview: (() => {
    return (
      <div className="group w-[360px] overflow-hidden rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative h-24 bg-gradient-to-r from-zinc-900 to-zinc-700" />
        <div className="-mt-12 px-6 pb-6">
          <div className="flex items-end justify-between">
            <div className="relative">
              <img
                className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-lg"
                src="https://i.pravatar.cc/200?img=32"
                alt="Profile"
              />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white" />
            </div>

            <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]">
              Follow
            </button>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-zinc-900">Yesenia Herrera</h3>
          <p className="text-sm text-zinc-500">Product Designer · Remote</p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["Posts", "128"],
              ["Followers", "9.2k"],
              ["Following", "312"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white px-3 py-2 text-center ring-1 ring-black/5">
                <p className="text-sm font-semibold text-zinc-900">{v}</p>
                <p className="text-xs text-zinc-500">{k}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> La Paz, Bolivia
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> yesenia@mail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +591 70000000
            </div>
          </div>
        </div>
      </div>
    );
  })(),
  code: `import { Mail, Phone, MapPin } from "lucide-react";

<div className="group w-[360px] overflow-hidden rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  <div className="relative h-24 bg-gradient-to-r from-zinc-900 to-zinc-700" />
  <div className="-mt-12 px-6 pb-6">
    <div className="flex items-end justify-between">
      <div className="relative">
        <img
          className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-lg"
          src="https://i.pravatar.cc/200?img=32"
          alt="Profile"
        />
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white" />
      </div>

      <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]">
        Follow
      </button>
    </div>

    <h3 className="mt-4 text-lg font-semibold text-zinc-900">Yesenia Herrera</h3>
    <p className="text-sm text-zinc-500">Product Designer · Remote</p>

    <div className="mt-4 grid grid-cols-3 gap-2">
      <div className="rounded-2xl bg-white px-3 py-2 text-center ring-1 ring-black/5">
        <p className="text-sm font-semibold text-zinc-900">128</p>
        <p className="text-xs text-zinc-500">Posts</p>
      </div>
      <div className="rounded-2xl bg-white px-3 py-2 text-center ring-1 ring-black/5">
        <p className="text-sm font-semibold text-zinc-900">9.2k</p>
        <p className="text-xs text-zinc-500">Followers</p>
      </div>
      <div className="rounded-2xl bg-white px-3 py-2 text-center ring-1 ring-black/5">
        <p className="text-sm font-semibold text-zinc-900">312</p>
        <p className="text-xs text-zinc-500">Following</p>
      </div>
    </div>

    <div className="mt-4 space-y-2 text-sm text-zinc-600">
      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> La Paz, Bolivia</div>
      <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> yesenia@mail.com</div>
      <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +591 70000000</div>
    </div>
  </div>
</div>`,
}
