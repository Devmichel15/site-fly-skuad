import React from "react";
import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      title: "Fly Podcast: O Especial",
      img: "https://i.ytimg.com/vi/H6U6_29Lg00/maxresdefault.jpg",
      category: "EPISÓDIO 100",
    },
    {
      title: "Batalha do Século: RRPL",
      img: "https://i.ytimg.com/vi/Gz3A5J-Y8X0/maxresdefault.jpg",
      category: "FLOW PESADO",
    },
    {
      title: "Dubai com a Equipe",
      img: "https://i.ytimg.com/vi/lJ_L6V_6X_4/maxresdefault.jpg",
      category: "LIFESTYLE",
    },
    {
      title: "A Caminho do Show",
      img: "https://i.ytimg.com/vi/9x0Y7rY_Y0A/maxresdefault.jpg",
      category: "NOS BASTIDORES",
    },
  ];

  return (
    <section
      id="vídeos"
      className="min-h-screen w-full bg-black py-40 px-10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-angola/5 to-transparent skew-x-12 translate-x-20" />

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-l-8 border-gold pl-12">
          <div>
            <h2 className="text-[12vw] font-black text-white leading-[0.7] tracking-[2px]">
              VISÃO
            </h2>
            <p className="text-gold tracking-[0.8em] mt-6 text-sm font-black uppercase italic">
              Canal Oficial Fly Skuad TV
            </p>
          </div>
          <button className="mt-12 md:mt-0 group flex items-center gap-4 text-white hover:text-gold transition-all duration-500">
            <span className="text-[10px] tracking-[0.4em] font-black uppercase">
              Explorar Todo o Canal
            </span>
            <div className="w-12 h-12 border border-white/20 group-hover:border-gold flex items-center justify-center rounded-none rotate-45 transition-all">
              <Play size={16} className="-rotate-45" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden aspect-video bg-white/5 border border-white/10 cursor-pointer shadow-2xl"
            >
              {/* IMAGEM REAL FLY SKUAD */}
              <img
                src={vid.img}
                alt={vid.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-8 left-8">
                <div className="bg-gold text-black px-4 py-1 text-[10px] font-black tracking-widest uppercase">
                  {vid.category}
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter group-hover:text-glow transition-all">
                    {vid.title}
                  </h3>
                </div>

                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <span className="text-[10px] tracking-widest font-black uppercase">
                    Play Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
