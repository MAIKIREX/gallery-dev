import HorizontalScrollSection from "@/components/gsap/horizontal-scroll"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GsapHorizontalPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Botón flotante para regresar a la galería */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/gallery/gsap"
          className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Volver a la Galería
        </Link>
      </div>

      <div className="h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Desliza hacia abajo</h1>
        <p className="text-slate-400 max-w-lg relative z-10">
          La siguiente sección fijará la pantalla y transformará el desplazamiento vertical en un viaje cinemático horizontal usando ScrollTrigger y containerAnimation.
        </p>
        <div className="mt-12 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
        </div>
      </div>

      <HorizontalScrollSection />
      
      {/* Spacer to allow scrolling past the pinned section */}
      <div className="h-screen bg-slate-950 flex flex-col items-center justify-center border-t border-white/10">
        <p className="text-slate-400 text-lg">Fin de la experiencia Horizontal.</p>
      </div>
    </main>
  )
}
