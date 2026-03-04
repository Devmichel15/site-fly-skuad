import React from "react";

const Galeria = () => {
  const images = [
    "https://i.ytimg.com/vi/vF0S7OOn9Ew/maxresdefault.jpg",
    "https://i.ytimg.com/vi/H6U6_29Lg00/maxresdefault.jpg",
    "https://i.ytimg.com/vi/lJ_L6V_6X_4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Gz3A5J-Y8X0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/j5R_V7G4GqE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/9x0Y7rY_Y0A/maxresdefault.jpg",
    "https://i.ytimg.com/vi/vF0S7OOn9Ew/maxresdefault.jpg",
    "https://i.ytimg.com/vi/H6U6_29Lg00/maxresdefault.jpg",
    "https://i.ytimg.com/vi/lJ_L6V_6X_4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Gz3A5J-Y8X0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/j5R_V7G4GqE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/9x0Y7rY_Y0A/maxresdefault.jpg",
    "https://i.ytimg.com/vi/vF0S7OOn9Ew/maxresdefault.jpg",
    "https://i.ytimg.com/vi/H6U6_29Lg00/maxresdefault.jpg",
    "https://i.ytimg.com/vi/lJ_L6V_6X_4/maxresdefault.jpg",
  ];

  return (
    <section id="galeria" className="py-40 bg-black overflow-hidden relative">
      <div className="px-10 mb-32 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-[18vw] font-black text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          MOMENTOS
        </h2>
        <h2 className="text-6xl md:text-8xl font-black text-gold z-10 relative text-glow italic">
          FRAME BY FRAME
        </h2>
        <div className="w-24 h-[2px] bg-angola mt-6" />
        <p className="text-white/40 tracking-[1em] uppercase text-xs mt-8">
          Captured Reality • Fly Skuad
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden bg-white/5 border border-white/10 ${i % 4 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            {/* IMAGEM REAL FLY SKUAD */}
            <img
              src={img}
              alt={`Fly Skuad Action ${i}`}
              className="w-full h-full object-cover filter brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 3D Hover Detail */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[8px] tracking-[0.5em] font-black text-gold uppercase underline decoration-angola/50">
                Capture ID_{i + 1000}
              </span>
              <p className="text-white text-xs font-black uppercase italic mt-1">
                Fly Experience
              </p>
            </div>

            {/* Corner Decorative */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-2 right-2 w-[1px] h-4 bg-gold" />
              <div className="absolute top-2 right-2 w-4 h-[1px] bg-gold" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 flex justify-center relative z-10">
        <button className="group relative px-20 py-8 overflow-hidden bg-white/5 border border-white/10 hover:border-gold transition-colors duration-500">
          <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 text-white group-hover:text-black font-black tracking-[0.8em] text-xs uppercase">
            Carregar Mais História
          </span>
        </button>
      </div>
    </section>
  );
};

export default Galeria;
