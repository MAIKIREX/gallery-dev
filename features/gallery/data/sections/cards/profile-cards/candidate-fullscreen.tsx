
import type { Variant } from "../../../../types"
import { ChevronLeft } from "lucide-react";

export const candidateFullscreen: Variant = {
  id: "candidate-fullscreen",
  title: "Candidate Fullscreen Card",
  description: "Card estilo candidatos con overlay turquesa, texto grande y thumbnails",
  tags: ["profile", "candidate", "fullscreen", "overlay", "lucide", "hover"],
  preview: (() => {

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
            <div
              key={src}
              className={[
                "h-11 w-11 overflow-hidden rounded-full ring-2 transition-all",
                idx === 0 ? "ring-white shadow-lg" : "ring-white/50 opacity-90",
              ].join(" ")}
            >
              <img src={src} alt={"thumb-" + idx} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
  </div>
</div>`
}
