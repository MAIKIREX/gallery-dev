"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Ecosistema Tecnológico",
    description: "Desarrollo de interfaces inmersivas con rendimiento de 60fps constantes.",
    color: "bg-slate-900",
    border: "border-slate-800",
    text: "text-blue-400"
  },
  {
    title: "Educación Continua",
    description: "Estrategias de aprendizaje potenciadas por animación e interactividad.",
    color: "bg-blue-900",
    border: "border-blue-800",
    text: "text-cyan-400"
  },
  {
    title: "Salud y Bienestar",
    description: "Interfaces amigables y accesibles para conectar a las personas.",
    color: "bg-cyan-900",
    border: "border-cyan-800",
    text: "text-emerald-400"
  },
  {
    title: "Impacto Global",
    description: "Diseño que rompe fronteras utilizando tecnologías de vanguardia.",
    color: "bg-emerald-950",
    border: "border-emerald-800",
    text: "text-teal-400"
  }
];

export default function StackingCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".stacking-card");
    const container = containerRef.current;
    
    if (!container || cards.length === 0) return;

    cards.forEach((card, index) => {
      // Configuramos el pinning de cada tarjeta al llegar arriba
      ScrollTrigger.create({
        trigger: card,
        start: `top ${index * 30 + 100}px`, // Se apilan dejando 30px visibles de la anterior
        endTrigger: container,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false, // Permite que la siguiente tarjeta pase por encima
      });

      // Efecto 3D: Escalar y oscurecer la tarjeta cuando la siguiente pasa por encima
      if (index !== cards.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          y: -20, // Empujar ligeramente hacia arriba
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full pb-[50vh] bg-slate-950 text-white">
      {/* Intro Header */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Tarjetas Apilables
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          ScrollTrigger permite crear efectos de capas "Sticky" sin usar CSS position sticky, brindando control total sobre la animación de cada capa oculta.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative mx-auto w-full max-w-4xl px-4 flex flex-col gap-[20vh] pb-32">
        {cardsData.map((card, index) => (
          <div 
            key={index} 
            className={`stacking-card relative w-full h-[60vh] rounded-[2rem] border ${card.border} ${card.color} shadow-2xl flex flex-col justify-between p-10 md:p-16 overflow-hidden origin-top`}
          >
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[100%] transition-transform" />
            
            <div className="relative z-10">
              <span className={`text-sm font-semibold uppercase tracking-widest ${card.text} mb-4 block`}>
                Capa 0{index + 1}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg text-slate-300 max-w-md">{card.description}</p>
            </div>
            
            <div className="relative z-10 flex items-end justify-between mt-12">
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-2 rounded-full bg-white/10" />
                ))}
              </div>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
