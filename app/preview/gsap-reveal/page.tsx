import TextRevealSection from "@/components/gsap/text-reveal"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GsapRevealPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Botón flotante para regresar a la galería */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/gallery/gsap"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Volver a la Galería
        </Link>
      </div>

      <TextRevealSection />
      
      <div className="h-screen bg-slate-950 flex flex-col items-center justify-center border-t border-white/10">
        <p className="text-slate-400 text-lg">Fin de la animación de Zoom de Texto.</p>
        <p className="text-slate-500 mt-2">La ilusión de profundidad se logra escalando múltiples capas a distintas velocidades.</p>
      </div>
    </main>
  )
}
