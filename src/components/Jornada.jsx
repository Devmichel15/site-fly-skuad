import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Jornada = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".jornada-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.5,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  const data = [
    {
      year: "2002",
      title: "O DESPERTAR",
      text: "O início de tudo nas ruas de Luanda. Onde a palavra se tornou arma e escudo.",
      img: "https://i.ytimg.com/vi/j5R_V7G4GqE/maxresdefault.jpg",
    },
    {
      year: "2013",
      title: "A REVOLUÇÃO (RRPL)",
      text: "Fundação da Reis do Rompimento. Mudamos o game para sempre.",
      img: "https://i.ytimg.com/vi/Gz3A5J-Y8X0/maxresdefault.jpg",
    },
    {
      year: "2020",
      title: "CULTURA DIGITAL",
      text: "Fly Podcast: a voz da lusofonia. Entrevistas que pararam o país.",
      img: "https://i.ytimg.com/vi/H6U6_29Lg00/maxresdefault.jpg",
    },
    {
      year: "2026",
      title: "O LEGADO",
      text: "Dubai, Luanda e o mundo. O império continua a expandir.",
      img: "https://i.ytimg.com/vi/lJ_L6V_6X_4/maxresdefault.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden bg-black relative">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-20 left-20 z-10">
        <h2 className="text-[12vw] font-black text-white/5 leading-none select-none">
          CARREIRA
        </h2>
        <div className="flex items-center gap-4 mt-[-2vw]">
          <div className="w-20 h-[2px] bg-gold" />
          <span className="text-gold tracking-[1em] font-black uppercase text-xs">
            A História de um Rei
          </span>
        </div>
      </div>

      <div ref={containerRef} className="flex h-screen w-[400vw]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="jornada-panel w-screen h-full flex items-center justify-center px-20 relative"
          >
            <div className="flex flex-col lg:flex-row items-center gap-20 max-w-8xl">
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute inset-0 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden border border-white/10 shadow-[40px_40px_0px_rgba(212,175,55,0.05)]">
                  {/* IMAGEM REAL FLY SKUAD */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[16/9] object-cover filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-gold text-black px-6 py-2 text-2xl font-black skew-x-[-12deg]">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <h3 className="text-5xl md:text-8xl text-white mb-8 uppercase leading-tight tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xl md:text-3xl leading-relaxed font-light mb-12 border-l-4 border-gold pl-8">
                  {item.text}
                </p>
                <div className="flex items-center gap-6">
                  <button className="text-[8px] tracking-[0.5em] font-black uppercase text-gold border border-gold/30 px-6 py-3 hover:bg-gold hover:text-black transition-all">
                    DOCUMENTÁRIO COMPLETO
                  </button>
                </div>
              </div>
            </div>
            {/* Connection Line */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20vw] h-[1px] bg-gradient-to-r from-gold/20 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 right-20 flex gap-4">
        {data.map((_, i) => (
          <div
            key={i}
            className="w-12 h-1 bg-white/10 relative overflow-hidden"
          >
            <div
              className="absolute left-0 top-0 h-full bg-gold w-0"
              id={`jornada-indicator-${i}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jornada;
