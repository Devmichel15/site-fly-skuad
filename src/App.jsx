import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jornada from "./components/Jornada";
import Musica from "./components/Musica";
import Videos from "./components/Videos";
import Galeria from "./components/Galeria";
import Stats from "./components/Stats";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-gold selection:text-black">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="relative">
          <Navbar />
          <Hero />
          <Jornada />
          <Musica />
          <Videos />
          <Galeria />
          <Stats />
          <Contato />
          <Footer />

          {/* Custom Cursor / Global Decorative Elements */}
          <div className="fixed bottom-12 right-12 z-[110] flex flex-col items-center gap-6 mix-blend-difference pointer-events-none">
            <div className="w-[1px] h-40 bg-gradient-to-t from-gold to-transparent" />
            <span className="[writing-mode:vertical-lr] text-[8px] tracking-[1em] text-gold font-black uppercase">
              Fly Skuad Official Core
            </span>
          </div>

          <div className="fixed top-1/2 left-8 -translate-y-1/2 z-[110] hidden md:flex flex-col gap-8 opacity-20">
            {["01", "02", "03", "04", "05"].map((num) => (
              <span key={num} className="text-[10px] font-black font-mono">
                {num}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
