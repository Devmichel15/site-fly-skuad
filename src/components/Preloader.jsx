import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // DividedBy13 Style Particle Explosion
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          clipPath: "circle(0% at 50% 50%)",
          duration: 1.5,
          ease: "expo.inOut",
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0, filter: "blur(20px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
      },
    ).to(logoRef.current, {
      letterSpacing: "1em",
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power4.inOut",
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      <div className="relative group">
        <h1
          ref={logoRef}
          className="text-7xl md:text-9xl font-black text-gold tracking-tighter"
        >
          FLY SKUAD
        </h1>
        <div className="absolute inset-0 bg-gold blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
        <span className="text-[10px] tracking-[1em] text-white/30 font-black uppercase">
          Revolução Digital
        </span>
      </div>
    </div>
  );
};

export default Preloader;
