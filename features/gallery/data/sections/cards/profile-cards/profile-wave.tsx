
import type { Variant } from "../../../../types"
import { Dribbble, Facebook, Globe, Instagram, Twitter } from "lucide-react"

export const profileWave: Variant = {
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
}
