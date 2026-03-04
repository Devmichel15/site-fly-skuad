import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 4 },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center glass border-b border-white/10"
    >
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 border-2 border-gold rounded-none rotate-45 flex items-center justify-center group-hover:bg-gold transition-all duration-500 overflow-hidden">
          <span className="text-gold group-hover:text-black font-black text-xl -rotate-45">
            FS
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-xl tracking-tighter text-glow leading-none">
            FLY SKUAD
          </span>
          <span className="text-[8px] tracking-[0.4em] text-gold/60 font-black uppercase">
            Official Digital Experience
          </span>
        </div>
      </div>

      <div className="hidden lg:flex gap-12">
        {[
          "Início",
          "Jornada",
          "Música",
          "Vídeos",
          "Galeria",
          "Stats",
          "Contato",
        ].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="font-display text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-gold transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex flex-col items-end text-[8px] tracking-widest text-white/30 uppercase font-black">
          <span>Luanda • Angola</span>
          <span>Time: 19:58 GMT</span>
        </div>
        <button className="bg-white text-black font-black text-[10px] tracking-widest uppercase px-8 py-3 hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          RRPL TV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
