import CinematicParallaxSection from "@/components/gsap/animated-card-section"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GsapPreviewPage() {
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

      <CinematicParallaxSection />
      
      {/* Spacer to allow scrolling past the pinned section */}
      <div className="h-screen bg-slate-950 flex flex-col items-center justify-center">
        <p className="text-slate-400 text-lg">Has llegado al final de la animación GSAP.</p>
        <p className="text-slate-500 mt-2">En este entorno de pantalla completa, ScrollTrigger tiene todo el espacio que necesita.</p>
      </div>
    </main>
  )
}
