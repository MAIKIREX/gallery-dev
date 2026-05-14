import type { Variant } from "../../../../types"

export const editorialLede: Variant = {
  id: "editorial-lede",
  title: "Editorial Lede",
  description: "Intro corto con jerarquia clara y microcopy",
  tags: ["text", "typography", "lede"],
  preview: (
    <div className="max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Guia breve</p>
      <h3 className="mt-3 text-3xl font-semibold text-neutral-900">
        Tipografia con ritmo y foco
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        Un lead corto con palabras precisas ayuda a orientar al usuario antes de la accion. Usa
        contrastes suaves y espacio entre lineas para mejorar la lectura.
      </p>
      <p className="mt-4 text-xs text-neutral-400">Actualizado hace 2 dias</p>
    </div>
  ),
  code: `<div className="max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Guia breve</p>
  <h3 className="mt-3 text-3xl font-semibold text-neutral-900">
    Tipografia con ritmo y foco
  </h3>
  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
    Un lead corto con palabras precisas ayuda a orientar al usuario antes de la accion. Usa
    contrastes suaves y espacio entre lineas para mejorar la lectura.
  </p>
  <p className="mt-4 text-xs text-neutral-400">Actualizado hace 2 dias</p>
</div>`,
}
