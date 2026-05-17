"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textWrapper = document.querySelector(".zoom-text-wrapper");
    const image = document.querySelector(".zoom-image");
    const content = document.querySelector(".reveal-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500", // 2500px of scrolling for the whole effect
        scrub: 1,
        pin: true,
      }
    });

    // 1. Escalar el texto inmensamente hasta que desaparezca
    tl.to(textWrapper, {
      scale: 80,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    }, 0);

    // 2. Escalar hacia abajo la imagen y enfocarla simultáneamente
    tl.fromTo(image, 
      { scale: 1.5, filter: "blur(20px) brightness(0.5)" },
      { scale: 1, filter: "blur(0px) brightness(0.8)", duration: 1, ease: "power2.inOut" },
      0
    );

    // 3. Mostrar el contenido de texto que estaba oculto
    tl.fromTo(content,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0.8 // Inicia cuando el zoom ya casi terminó
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      
      {/* Capa de Imagen de Fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" 
          alt="Reveal Background" 
          className="zoom-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* Capa de Texto Gigante (Máscara simulada por tipografía) */}
      <div className="zoom-text-wrapper absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-[15vw] font-black text-white tracking-tighter mix-blend-overlay">
          INNOVAR
        </h1>
      </div>

      {/* Capa de Contenido Revelado */}
      <div className="reveal-content relative z-20 text-center px-6 max-w-3xl">
        <span className="text-blue-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">
          El futuro es ahora
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Más allá de lo evidente.
        </h2>
        <p className="text-xl text-slate-200 font-light">
          Al hacer scroll, el texto principal funciona como una ventana que se abre al escalar drásticamente. GSAP ScrollTrigger coordina la opacidad, la escala y el desenfoque para dar un efecto de inmersión 3D espectacular.
        </p>
      </div>

    </section>
  );
}
