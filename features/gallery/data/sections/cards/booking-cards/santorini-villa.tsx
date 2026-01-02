
import type { Variant } from "../../../../types"

export const santoriniVilla: Variant = {
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
}
