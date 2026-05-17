"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const textOneRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const textFinalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      x: "28vw",
      y: "4vh",
      scale: 0.95,
      rotate: 2,
    });

    gsap.set([textLeftRef.current, textRightRef.current, textFinalRef.current], {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });

    // ESCENA 1
    tl.fromTo(
      textOneRef.current,
      {
        opacity: 0,
        x: -60,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power2.out",
      }
    );

    // Transición: card derecha → centro
    tl.to(
      cardRef.current,
      {
        x: "0vw",
        y: "0vh",
        scale: 1.05,
        rotate: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "scene2"
    );

    tl.to(
      textOneRef.current,
      {
        opacity: 0,
        x: -80,
        filter: "blur(10px)",
        duration: 0.7,
        ease: "power2.inOut",
      },
      "scene2"
    );

    // ESCENA 2: textos a ambos lados
    tl.to(
      textLeftRef.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      },
      "scene2+=0.2"
    );

    tl.to(
      textRightRef.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      },
      "scene2+=0.35"
    );

    // Pausa visual para que la escena central respire
    tl.to({}, { duration: 0.6 });

    // Transición: card centro → izquierda
    tl.to(
      cardRef.current,
      {
        x: "-28vw",
        y: "-2vh",
        scale: 0.98,
        rotate: -2,
        duration: 1,
        ease: "power2.inOut",
      },
      "scene3"
    );

    tl.to(
      textLeftRef.current,
      {
        opacity: 0,
        y: -40,
        filter: "blur(10px)",
        duration: 0.6,
        ease: "power2.inOut",
      },
      "scene3"
    );

    tl.to(
      textRightRef.current,
      {
        opacity: 0,
        y: -40,
        filter: "blur(10px)",
        duration: 0.6,
        ease: "power2.inOut",
      },
      "scene3"
    );

    // ESCENA 3: texto final a la derecha
    tl.to(
      textFinalRef.current,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      },
      "scene3+=0.35"
    );

    // Pequeño cierre cinematográfico
    tl.to(cardRef.current, {
      y: "-6vh",
      scale: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.3),rgba(2,6,23,1))]" />

      <div className="relative mx-auto grid h-screen max-w-7xl grid-cols-12 items-center px-6">
        {/* Texto escena 1 */}
        <div
          ref={textOneRef}
          className="absolute left-[8%] top-1/2 z-10 w-[360px] -translate-y-1/2"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Primera etapa
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Una historia que empieza desde el impacto.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            La card inicia a la derecha mientras el mensaje principal aparece
            desde la izquierda.
          </p>
        </div>

        {/* Texto izquierdo escena 2 */}
        <div
          ref={textLeftRef}
          className="absolute left-[7%] top-1/2 z-10 w-[300px] -translate-y-1/2"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Educación
          </span>
          <h3 className="mt-4 text-3xl font-bold">
            Conocimiento que transforma.
          </h3>
          <p className="mt-4 text-slate-300">
            Texto de apoyo ubicado al lado izquierdo de la card central.
          </p>
        </div>

        {/* Texto derecho escena 2 */}
        <div
          ref={textRightRef}
          className="absolute right-[7%] top-1/2 z-10 w-[300px] -translate-y-1/2"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Tecnología
          </span>
          <h3 className="mt-4 text-3xl font-bold">
            Soluciones con propósito.
          </h3>
          <p className="mt-4 text-slate-300">
            Texto complementario que aparece al costado derecho.
          </p>
        </div>

        {/* Texto final escena 3 */}
        <div
          ref={textFinalRef}
          className="absolute right-[8%] top-1/2 z-10 w-[380px] -translate-y-1/2"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Tercera etapa
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            El mensaje cierra con una visión clara.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            La card termina a la izquierda y el contenido principal aparece
            desde la derecha.
          </p>
        </div>

        {/* Card protagonista */}
        <div
          ref={cardRef}
          className="absolute left-1/2 top-1/2 z-20 w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-blue-950/40 backdrop-blur-xl"
        >
          <div className="rounded-2xl bg-white p-6 text-slate-950">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Fundación Jawira
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight">
              Card protagonista
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Esta card se desplaza entre tres posiciones mientras el contenido
              aparece alrededor de ella.
            </p>

            <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
