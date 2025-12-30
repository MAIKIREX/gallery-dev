import { ChevronRight, Dribbble, Facebook, Globe, Heart, Instagram, Twitter } from "lucide-react"
import type { Section } from "../../types"

export const cardsSection: Section = {
  id: "cards",
  name: "Cards",
  collections: [
    {
      id: "profile-cards",
      title: "Profile Cards",
      description: "User profile cards with avatars and information",
      variants: [
        {
          id: "simple-profile",
          title: "Simple Profile Card",
          description: "Basic user profile with avatar and bio",
          tags: ["profile", "user", "avatar"],
          preview: (
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Passionate about creating beautiful and functional user experiences.
              </p>
            </div>
          ),
          code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
<div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
</div>
  </div>
  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
Passionate about creating beautiful and functional user experiences.
  </p>
</div>`,
        },
        {
          id: "profile-with-stats",
          title: "Profile Card with Stats",
          description: "Profile card displaying user statistics",
          tags: ["profile", "stats", "metrics"],
          preview: (
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Alex Smith</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">128</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
                </div>
              </div>
            </div>
          ),
          code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex flex-col items-center text-center">
<div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
<h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Alex Smith</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
  </div>
  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">128</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
</div>
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
</div>
<div className="text-center">
  <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
  <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
</div>
  </div>
</div>`,
        },
        {
          id: "profile-with-actions",
          title: "Profile Card with Actions",
          description: "Interactive profile card with action buttons",
          tags: ["profile", "actions", "buttons"],
          preview: (
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-rose-600"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Wilson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Creating delightful user experiences through design thinking and research.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                  Follow
                </button>
                <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  Message
                </button>
              </div>
            </div>
          ),
          code: `<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
  <div className="flex items-start gap-4">
<div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-rose-600"></div>
<div className="flex-1">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Wilson</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
    Creating delightful user experiences through design thinking and research.
  </p>
</div>
  </div>
  <div className="mt-4 flex gap-2">
<button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
  Follow
</button>
<button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
  Message
</button>
  </div>
</div>`,
        },
        {
  id: "profile-wave",
  title: "Profile Card (Wave Header)",
  description: "Header con gradiente + ondas + avatar flotante + social icons",
  tags: ["profile", "wave", "gradient", "lucide", "hover"],
  preview: (
    <div className="group w-[360px] overflow-hidden rounded-[34px] bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="relative h-[210px] bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500">
        {/* Soft light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />

        {/* Waves */}
        <svg
          className="absolute inset-x-0 bottom-0 h-20 w-full"
          viewBox="0 0 360 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 55 C 55 35, 95 75, 150 55 C 210 30, 250 70, 360 45 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.25)" />
          <path d="M0 60 C 65 40, 110 78, 170 58 C 230 35, 270 72, 360 50 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.18)" />
          <path d="M0 66 C 75 48, 120 80, 185 62 C 250 45, 285 70, 360 58 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.12)" />
        </svg>

        {/* Avatar */}
        <div className="absolute left-1/2 top-[86px] -translate-x-1/2">
          <div className="rounded-full bg-white p-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Profile"
              className="h-[108px] w-[108px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pb-9 pt-16 text-center">
        <h3 className="text-[14px] font-semibold tracking-[0.12em] text-zinc-500">
          CHRISTIAN SØGAARD MOEN
        </h3>
        <p className="mt-1 text-sm text-zinc-400">@christianmoen</p>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-6 text-zinc-400">
          <a className="transition hover:text-zinc-900" href="#" aria-label="Dribbble">
            <Dribbble className="h-5 w-5" />
          </a>
          <a className="transition hover:text-zinc-900" href="#" aria-label="Website">
            <Globe className="h-5 w-5" />
          </a>
          <a className="transition hover:text-zinc-900" href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a className="transition hover:text-zinc-900" href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a className="transition hover:text-zinc-900" href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-zinc-400">
          Brand and communication strategy, graphic design, illustration, art direction and portrait photography.
        </p>

        <p className="mt-4 text-sm text-zinc-300">Creative at Superblaise.</p>
      </div>
    </div>
  ),
  code: `import { Dribbble, Globe, Facebook, Instagram, Twitter } from "lucide-react";

<div className="group w-[360px] overflow-hidden rounded-[34px] bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.35)]">
  <div className="relative h-[210px] bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
    <svg className="absolute inset-x-0 bottom-0 h-20 w-full" viewBox="0 0 360 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 55 C 55 35, 95 75, 150 55 C 210 30, 250 70, 360 45 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.25)" />
      <path d="M0 60 C 65 40, 110 78, 170 58 C 230 35, 270 72, 360 50 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.18)" />
      <path d="M0 66 C 75 48, 120 80, 185 62 C 250 45, 285 70, 360 58 L 360 80 L 0 80 Z" fill="rgba(255,255,255,0.12)" />
    </svg>

    <div className="absolute left-1/2 top-[86px] -translate-x-1/2">
      <div className="rounded-full bg-white p-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <img src="https://i.pravatar.cc/200?img=12" alt="Profile" className="h-[108px] w-[108px] rounded-full object-cover" />
      </div>
    </div>
  </div>

  <div className="px-8 pb-9 pt-16 text-center">
    <h3 className="text-[14px] font-semibold tracking-[0.12em] text-zinc-500">CHRISTIAN SØGAARD MOEN</h3>
    <p className="mt-1 text-sm text-zinc-400">@christianmoen</p>

    <div className="mt-6 flex items-center justify-center gap-6 text-zinc-400">
      <a className="transition hover:text-zinc-900" href="#" aria-label="Dribbble"><Dribbble className="h-5 w-5" /></a>
      <a className="transition hover:text-zinc-900" href="#" aria-label="Website"><Globe className="h-5 w-5" /></a>
      <a className="transition hover:text-zinc-900" href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
      <a className="transition hover:text-zinc-900" href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
      <a className="transition hover:text-zinc-900" href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
    </div>

    <p className="mt-6 text-sm leading-relaxed text-zinc-400">
      Brand and communication strategy, graphic design, illustration, art direction and portrait photography.
    </p>

    <p className="mt-4 text-sm text-zinc-300">Creative at Superblaise.</p>
  </div>
</div>`,
},
{
  id: "profile-minimal-glass",
  title: "Minimal Glass Profile",
  description: "Glass card con estado online, stats y contactos",
  tags: ["profile", "glass", "minimal", "lucide", "hover"],
  preview: (() => {
    const { Mail, Phone, MapPin } = require("lucide-react");
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
},
{
  id: "profile-dark-premium",
  title: "Dark Premium Profile",
  description: "Card dark con gradiente, CTAs dobles y stats",
  tags: ["profile", "dark", "premium", "lucide", "hover"],
  preview: (() => {
    const { MessageCircle, UserPlus } = require("lucide-react");
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
},
{
  id: "profile-editorial-soft",
  title: "Editorial Soft Profile",
  description: "Minimal elegante con tags y CTA",
  tags: ["profile", "minimal", "editorial", "lucide", "hover"],
  preview: (() => {
    const { ArrowUpRight } = require("lucide-react");
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
},
{
  id: "profile-sophie-light",
  title: "Profile Card (Light)",
  description: "Versión clara, limpia y minimal",
  tags: ["profile", "light", "minimal", "lucide", "hover"],
  preview: (() => {
    const { BadgeCheck, Users, Eye } = require("lucide-react");
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
},
{
  id: "profile-sophie-glass-light",
  title: "Profile Card (Glass Light Overlay)",
  description: "Foto completa + panel glass claro en la parte inferior",
  tags: ["profile", "glass", "light", "overlay", "lucide", "hover"],
  preview: (() => {
    const { BadgeCheck, User, Eye } = require("lucide-react");
    return (
      <div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.45)]">
        <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Sophie Bennett"
            className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* soft vignette like reference */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_40%,rgba(0,0,0,0.22)_100%)] opacity-70" />

          {/* GLASS panel bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-[22px] bg-white/70 p-4 backdrop-blur-xl ring-1 ring-black/5">
              <div className="flex items-center gap-2">
                <h3 className="text-[22px] font-semibold tracking-tight text-zinc-900">
                  Sophie Bennett
                </h3>

                {/* verified green */}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                  <BadgeCheck className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                Product Designer who focuses on simplicity &amp; usability.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-zinc-800/80">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" /> 312
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="h-4 w-4" /> 48
                  </span>
                </div>

                <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition hover:bg-zinc-50 active:scale-[0.99]">
                  Follow <span className="ml-1 font-bold">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })(),
  code: `import { BadgeCheck, User, Eye } from "lucide-react";

<div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.45)]">
  <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
      alt="Sophie Bennett"
      className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />

    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_40%,rgba(0,0,0,0.22)_100%)] opacity-70" />

    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="rounded-[22px] bg-white/70 p-4 backdrop-blur-xl ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <h3 className="text-[22px] font-semibold tracking-tight text-zinc-900">Sophie Bennett</h3>

          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
            <BadgeCheck className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-1 text-sm leading-relaxed text-zinc-700">
          Product Designer who focuses on simplicity &amp; usability.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-zinc-800/80">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> 312</span>
            <span className="inline-flex items-center gap-1.5"><Eye className="h-4 w-4" /> 48</span>
          </div>

          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition hover:bg-zinc-50 active:scale-[0.99]">
            Follow <span className="ml-1 font-bold">+</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
},
{
  id: "profile-sophie-glass-dark",
  title: "Profile Card (Glass Dark Overlay)",
  description: "Foto completa + panel glass oscuro y texto blanco",
  tags: ["profile", "glass", "dark", "overlay", "lucide", "hover"],
  preview: (() => {
    const { BadgeCheck, User, Eye } = require("lucide-react");
    return (
      <div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.5)]">
        <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Sophie Bennett"
            className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* stronger dark tint like reference */}
          <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/30" />

          {/* GLASS panel bottom (dark) */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-[22px] bg-zinc-950/35 p-4 backdrop-blur-xl ring-1 ring-white/15">
              <div className="flex items-center gap-2">
                <h3 className="text-[22px] font-semibold tracking-tight text-white">
                  Sophie Bennett
                </h3>

                {/* verified gray */}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/18 text-white ring-1 ring-white/15">
                  <BadgeCheck className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-white/80">
                A Product Designer focused on intuitive user experiences.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" /> 312
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="h-4 w-4" /> 48
                  </span>
                </div>

                <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] transition hover:bg-white active:scale-[0.99]">
                  Follow <span className="ml-1 font-bold">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* subtle inner border like reference */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
        </div>
      </div>
    );
  })(),
  code: `import { BadgeCheck, User, Eye } from "lucide-react";

<div className="group w-[310px] rounded-[36px] bg-white p-3 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.5)]">
  <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
      alt="Sophie Bennett"
      className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
    />

    <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/30" />

    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="rounded-[22px] bg-zinc-950/35 p-4 backdrop-blur-xl ring-1 ring-white/15">
        <div className="flex items-center gap-2">
          <h3 className="text-[22px] font-semibold tracking-tight text-white">Sophie Bennett</h3>

          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/18 text-white ring-1 ring-white/15">
            <BadgeCheck className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-1 text-sm leading-relaxed text-white/80">
          A Product Designer focused on intuitive user experiences.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> 312</span>
            <span className="inline-flex items-center gap-1.5"><Eye className="h-4 w-4" /> 48</span>
          </div>

          <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] transition hover:bg-white active:scale-[0.99]">
            Follow <span className="ml-1 font-bold">+</span>
          </button>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
  </div>
</div>`,
},
{
  id: "candidate-fullscreen",
  title: "Candidate Fullscreen Card",
  description: "Card estilo candidatos con overlay turquesa, texto grande y thumbnails",
  tags: ["profile", "candidate", "fullscreen", "overlay", "lucide", "hover"],
  preview: (() => {
    const { ChevronLeft } = require("lucide-react");

    const thumbs = [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1520975958225-8cda81d3b7af?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    ];

    return (
      <div className="group relative w-[320px] overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.65)]">
        {/* “phone” top status spacing */}
        <div className="relative h-[560px]">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
            alt="Candidate"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* subtle dark vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.55)_100%)]" />

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 text-white">
            <button
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.98]"
              aria-label="Back"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-sm font-medium text-white/90">Candidates</p>
            <div className="h-9 w-9" />
          </div>

          {/* Bottom overlay */}
          <div className="absolute inset-x-0 bottom-0">
            {/* turquoise gradient like reference */}
            <div className="h-[330px] bg-gradient-to-t from-cyan-700 via-cyan-600/80 to-transparent" />

            {/* content */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
              <h3 className="text-[40px] font-extrabold leading-[0.95] tracking-tight text-white drop-shadow">
                DAVID
                <br />
                BECKHAM
              </h3>

              <p className="mt-2 text-sm text-white/90">
                40 years, Los Angeles, USA
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                I'm a Digital Marketing Manager working in Lisbon. I like to go out for drinks and fun, cinema,
                travel and beach :)
              </p>

              {/* Thumbnails */}
              <div className="mt-5 flex items-center gap-3">
                {thumbs.map((src, idx) => (
                  <div
                    key={src}
                    className={[
                      "h-11 w-11 overflow-hidden rounded-full ring-2 transition-all",
                      idx === 0
                        ? "ring-white shadow-lg"
                        : "ring-white/50 opacity-90",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt={`thumb-${idx}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* inner highlight border */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
        </div>
      </div>
    );
  })(),
  code: `import { ChevronLeft } from "lucide-react";

const thumbs = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1520975958225-8cda81d3b7af?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
];

<div className="group relative w-[320px] overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_95px_-45px_rgba(0,0,0,0.65)]">
  <div className="relative h-[560px]">
    <img
      src="https://images.unsplash.com/photo-1520975958225-8cda81d3b7af?auto=format&fit=crop&w=1200&q=80"
      alt="Candidate"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />

    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.55)_100%)]" />

    <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 text-white">
      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.98]" aria-label="Back">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <p className="text-sm font-medium text-white/90">Candidates</p>
      <div className="h-9 w-9" />
    </div>

    <div className="absolute inset-x-0 bottom-0">
      <div className="h-[330px] bg-gradient-to-t from-cyan-700 via-cyan-600/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
        <h3 className="text-[40px] font-extrabold leading-[0.95] tracking-tight text-white drop-shadow">
          DAVID<br/>BECKHAM
        </h3>

        <p className="mt-2 text-sm text-white/90">40 years, Los Angeles, USA</p>

        <p className="mt-3 text-sm leading-relaxed text-white/85">
          I'm a Digital Marketing Manager working in Lisbon. I like to go out for drinks and fun, cinema, travel and beach :)
        </p>

        <div className="mt-5 flex items-center gap-3">
          {thumbs.map((src, idx) => (
            <div key={src} className={\`h-11 w-11 overflow-hidden rounded-full ring-2 \${idx === 0 ? "ring-white shadow-lg" : "ring-white/50 opacity-90"}\`}>
              <img src={src} alt={\`thumb-\${idx}\`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
  </div>
</div>`,
},
{
  id: "profile-connecting-add-member",
  title: "Connecting Profile (Add Member)",
  description: "Card gris con foto en B/N, estado 'Connecting' y CTA Add Member",
  tags: ["profile", "connecting", "overlay", "lucide", "hover"],
  preview: (() => {
    const { Loader2, Plus } = require("lucide-react");
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







      ],
    },
    {
      id: "pricing-cards",
      title: "Pricing Cards",
      description: "Pricing plan cards for subscriptions and services",
      variants: [
        {
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
        },
        {
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
        },
        {
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
        },
      ],
    },
    {
  id: "booking-cards",
  title: "Booking Cards",
  description: "Cards con imagen de fondo, overlay y CTA estilo booking",
  variants: [
    {
      id: "santorini-villa",
      title: "Santorini Villa (Overlay + Hover)",
      description: "Diseño tipo booking con gradiente inferior y micro-interacciones",
      tags: ["travel", "booking", "image", "cta", "hover"],
      preview: (
        <div className="group relative w-[340px] overflow-hidden rounded-[36px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.55)]">
          {/* Frame tipo “tarjeta/telefono” */}
          <div className="absolute inset-0 rounded-[36px] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative aspect-[3/5] w-full">
            {/* Imagen */}
            <img
              src="/cards/santorini-card-bg.jpg"
              alt="Santorini Villa"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />

            {/* Vignette suave */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.35)_100%)] opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Gradiente inferior (clave para que se vea como tu diseño) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/85 transition-opacity duration-300 group-hover:opacity-95" />

            {/* Contenido */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-[28px] font-semibold tracking-tight text-white drop-shadow">
                Santorini Villa
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and a private infinity
                pool for ultimate relaxation.
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/16">
                  <span className="text-sm font-semibold">4.5</span>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-white">★</span>
                    <span className="text-white">★</span>
                    <span className="text-white">★</span>
                    <span className="text-white">★</span>
                    <span className="text-white/35">★</span>
                  </div>
                </div>

                <div className="rounded-full bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/16">
                  3 Night Stay
                </div>
              </div>

              {/* Botón */}
              <button className="mt-5 w-full rounded-full bg-white py-4 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-300 hover:bg-white/95 active:scale-[0.99] group-hover:translate-y-0">
                Reserve now
              </button>
            </div>
          </div>
        </div>
      ),
      code: `// Coloca la imagen en: public/cards/santorini-card-bg.jpg
<div className="group relative w-[340px] overflow-hidden rounded-[36px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.55)]">
  <div className="absolute inset-0 rounded-[36px] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

  <div className="relative aspect-[3/5] w-full">
    <img
      src="/cards/santorini-card-bg.jpg"
      alt="Santorini Villa"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    />

    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.35)_100%)] opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/85 transition-opacity duration-300 group-hover:opacity-95" />

    <div className="absolute inset-x-0 bottom-0 p-6">
      <h3 className="text-[28px] font-semibold tracking-tight text-white drop-shadow">Santorini Villa</h3>

      <p className="mt-2 text-sm leading-relaxed text-white/80">
        Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and a private infinity pool for ultimate relaxation.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/16">
          <span className="text-sm font-semibold">4.5</span>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-white">★</span><span className="text-white">★</span><span className="text-white">★</span><span className="text-white">★</span><span className="text-white/35">★</span>
          </div>
        </div>

        <div className="rounded-full bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/16">
          3 Night Stay
        </div>
      </div>

      <button className="mt-5 w-full rounded-full bg-white py-4 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-300 hover:bg-white/95 active:scale-[0.99]">
        Reserve now
      </button>
    </div>
  </div>
</div>`,
    },
  ],
    },
    {
  id: "travel-cards",
  title: "Travel Cards",
  description: "Cards con imagen, overlay, stacked effect y CTA pill",
  variants: [
    {
      id: "rio-stacked",
      title: "Stacked Travel Card (Rio)",
      description: "Tarjeta apilada con CTA y rating",
      tags: ["travel", "stacked", "image", "cta", "hover"],
      preview: (
        <div className="relative w-[320px]">
          {/* Back cards (stack) */}
          <div className="absolute -right-6 top-4 h-[420px] w-full rotate-[6deg] rounded-[28px] bg-amber-200/80 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-[8deg]" />
          <div className="absolute -left-4 top-10 h-[420px] w-full -rotate-[5deg] rounded-[28px] bg-emerald-200/80 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-rotate-[7deg]" />

          {/* Front card */}
          <div className="group relative h-[440px] w-full overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.55)]">
            {/* Image */}
            <img
              src="/cards/rio.png"
              alt="Rio de Janeiro"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />

            {/* Dark overlay (bottom) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 transition-opacity duration-300 group-hover:opacity-95" />

            {/* Heart button */}
            <button
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15"
              aria-label="Add to favorites"
            >
              {/* simple heart svg */}
              <Heart className="text-white"/>
            </button>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm text-white/80">Brazil</p>

              <h3 className="mt-0.5 text-2xl font-semibold tracking-tight text-white">
                Rio de Janeiro
              </h3>

              <div className="mt-2 flex items-center gap-3 text-xs text-white/75">
                <div className="flex items-center gap-1.5">
                  <span className="text-white">★</span>
                  <span className="font-semibold text-white">5.0</span>
                </div>
                <span className="h-1 w-1 rounded-full bg-white/35" />
                <span>143 reviews</span>
              </div>

              {/* CTA bar */}
              <div className="mt-4 rounded-full bg-white/12 p-2 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/16">
                <div className="flex items-center justify-between">
                  <button className="flex-1 rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition hover:text-white">
                    See more
                  </button>

                  <button
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-zinc-900 shadow-md transition active:scale-[0.98]"
                    aria-label="Open"
                  >
                    <ChevronRight className="" />
                  </button>
                </div>
              </div>
            </div>

            {/* subtle border */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
          </div>
        </div>
      ),
      code: `// Coloca la imagen en: public/cards/rio.jpg
<div className="relative w-[320px]">
  <div className="absolute -right-6 top-4 h-[420px] w-full rotate-[6deg] rounded-[28px] bg-amber-200/80 shadow-xl ring-1 ring-black/5" />
  <div className="absolute -left-4 top-10 h-[420px] w-full -rotate-[5deg] rounded-[28px] bg-emerald-200/80 shadow-xl ring-1 ring-black/5" />

  <div className="group relative h-[440px] w-full overflow-hidden rounded-[28px] bg-zinc-900 shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.55)]">
    <img
      src="/cards/rio.jpg"
      alt="Rio de Janeiro"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 transition-opacity duration-300 group-hover:opacity-95" />

    <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/15" aria-label="Add to favorites">
      <Heart className="text-white"/>
    </button>

    <div className="absolute inset-x-0 bottom-0 p-5">
      <p className="text-sm text-white/80">Brazil</p>
      <h3 className="mt-0.5 text-2xl font-semibold tracking-tight text-white">Rio de Janeiro</h3>

      <div className="mt-2 flex items-center gap-3 text-xs text-white/75">
        <div className="flex items-center gap-1.5">
          <span className="text-white">★</span>
          <span className="font-semibold text-white">5.0</span>
        </div>
        <span className="h-1 w-1 rounded-full bg-white/35" />
        <span>143 reviews</span>
      </div>

      <div className="mt-4 rounded-full bg-white/12 p-2 backdrop-blur-md ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/16">
        <div className="flex items-center justify-between">
          <button className="flex-1 rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition hover:text-white">
            See more
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-zinc-900 shadow-md transition active:scale-[0.98]" aria-label="Open">
            <ChevronRight className="" />
          </button>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
  </div>
</div>`,
    },
  ],
},


  ],
}
