"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Design Beyond Limits",
    subtitle: "Motion Graphics",
    desc: "Unleash creativity with scroll-driven precision.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Fluid Experiences",
    subtitle: "Interaction",
    desc: "Create seamless transitions that wow the user.",
    img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop"
  },
  {
    title: "Spatial Interfaces",
    subtitle: "Immersion",
    desc: "Break the boundaries of standard web layouts.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Cinematic Web",
    subtitle: "Performance",
    desc: "Achieve 60fps with optimized GSAP transforms.",
    img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".gsap-panel");
    
    // Configura el movimiento horizontal fijando la sección
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none", // CRÍTICO: debe ser none para vincular scroll a posición 1:1
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1, // suavidad del arrastre
        end: "+=3000", // duración del pin
      }
    });

    // Animar elementos dentro de cada panel basándose en containerAnimation
    panels.forEach((panel: any, i) => {
      // Efecto Parallax en la imagen de fondo
      const img = panel.querySelector(".panel-img");
      if (img) {
        gsap.fromTo(img, 
          { x: "20vw" }, // empieza desplazado a la derecha
          {
            x: "-20vw",  // termina desplazado a la izquierda (parallax relativo)
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            }
          }
        );
      }

      // Animación de entrada de textos
      if (i === 0) return; // el primer panel ya está visible

      const title = panel.querySelector(".panel-title");
      const subtitle = panel.querySelector(".panel-subtitle");
      const desc = panel.querySelector(".panel-desc");

      gsap.from([subtitle, title, desc], {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: "left 60%", // inicia cuando el borde izquierdo del panel llega al 60% de la pantalla
          toggleActions: "play none none reverse",
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden bg-slate-950">
      <div 
        ref={wrapperRef}
        className="flex h-full"
        style={{ width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="gsap-panel relative h-full w-screen flex-shrink-0 flex items-center overflow-hidden"
          >
            {/* Imagen de fondo con overflow para el parallax */}
            <div className="absolute inset-0 z-0 scale-125">
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="panel-img h-full w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/80" />
            </div>

            {/* Contenido de texto */}
            <div className="relative z-10 pl-[10%] md:pl-[15%] max-w-4xl">
              <div className="overflow-hidden mb-4">
                <span className="panel-subtitle inline-block text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                  {slide.subtitle}
                </span>
              </div>
              <div className="overflow-hidden mb-6">
                <h2 className="panel-title text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
                  {slide.title}
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="panel-desc text-lg md:text-2xl text-slate-300 font-light max-w-xl">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
