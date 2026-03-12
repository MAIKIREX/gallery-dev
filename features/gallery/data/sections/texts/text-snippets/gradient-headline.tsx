import type { Variant } from "../../../../types"

export const gradientHeadline: Variant = {
  id: "gradient-headline",
  title: "Gradient Headline",
  description: "Titulo grande con degradado y soporte corto",
  tags: ["text", "headline", "gradient"],
  preview: (
    <div className="max-w-2xl rounded-3xl border border-neutral-200 bg-[radial-gradient(circle_at_top,#fff7ed,transparent_60%)] p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Studio notes
      </p>
      <h3 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
        Construye mensajes{" "}
        <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
          memorables
        </span>
      </h3>
      <p className="mt-4 text-sm text-neutral-600">
        Mezcla contrastes, lineas cortas y un cierre claro para que el usuario recuerde la idea
        principal.
      </p>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs text-neutral-600 shadow-sm">
        <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
        Copia optimizada para landing
      </div>
    </div>
  ),
  code: `<div className="max-w-2xl rounded-3xl border border-neutral-200 bg-[radial-gradient(circle_at_top,#fff7ed,transparent_60%)] p-8">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
    Studio notes
  </p>
  <h3 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
    Construye mensajes{" "}
    <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
      memorables
    </span>
  </h3>
  <p className="mt-4 text-sm text-neutral-600">
    Mezcla contrastes, lineas cortas y un cierre claro para que el usuario recuerde la idea
    principal.
  </p>
  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs text-neutral-600 shadow-sm">
    <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
    Copia optimizada para landing
  </div>
</div>`,
}
