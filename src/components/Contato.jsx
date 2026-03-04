import React from "react";
import { Send, Instagram, Youtube, Twitter, ArrowUpRight } from "lucide-react";

const Contato = () => {
  return (
    <section
      id="contato"
      className="py-40 bg-black px-10 relative overflow-hidden"
    >
      {/* Decorative Branding */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[40vw] font-black text-white leading-none">
          LUANDA
        </h2>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
        <div className="w-full lg:w-2/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gold flex items-center justify-center">
              <span className="text-black font-black text-xl italic">FS</span>
            </div>
            <div className="h-[2px] w-40 bg-white/10" />
          </div>

          <h2 className="text-8xl md:text-9xl font-black text-white leading-[0.8] mb-12 tracking-tighter">
            LET'S <br /> <span className="text-gold italic">CONNECT</span>
          </h2>

          <p className="text-white/50 text-2xl leading-relaxed mb-16 font-light max-w-lg">
            Expanda o seu império com a maior voz de Angola. Colaborações,
            eventos e parcerias globais.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {[
              { label: "INSTAGRAM", handle: "@FLYSKUAD", icon: Instagram },
              { label: "YOUTUBE", handle: "FLY SKUAD TV", icon: Youtube },
              { label: "TWITTER", handle: "@FLY_SKUAD", icon: Twitter },
              { label: "BOOKING", handle: "WORK@FLY.AO", icon: ArrowUpRight },
            ].map((social, i) => (
              <div key={social.label} className="group cursor-pointer">
                <span className="text-[10px] tracking-[0.4em] font-black text-white/20 uppercase group-hover:text-gold transition-colors">
                  {social.label}
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <social.icon size={16} className="text-gold" />
                  <span className="text-white font-black text-sm group-hover:underline decoration-angola">
                    {social.handle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/5 bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 md:p-20 relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold" />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <label className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-black">
                Full Identity
              </label>
              <input
                type="text"
                className="bg-transparent border-b-2 border-white/10 px-0 py-4 focus:outline-none focus:border-gold text-2xl text-white transition-all placeholder:text-white/5"
                placeholder="SEU NOME..."
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-black">
                Digital Access
              </label>
              <input
                type="email"
                className="bg-transparent border-b-2 border-white/10 px-0 py-4 focus:outline-none focus:border-gold text-2xl text-white transition-all placeholder:text-white/5"
                placeholder="EMAIL@SERVER.COM"
              />
            </div>
            <div className="flex flex-col gap-4 md:col-span-2">
              <label className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-black">
                Your Vision
              </label>
              <textarea
                rows="4"
                className="bg-transparent border-b-2 border-white/10 px-0 py-4 focus:outline-none focus:border-gold text-2xl text-white transition-all resize-none placeholder:text-white/5"
                placeholder="DEIXE A TUA MENSAGEM..."
              />
            </div>

            <button className="md:col-span-2 group relative h-24 overflow-hidden bg-gold">
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10 flex items-center justify-center gap-4 text-black font-black text-xl tracking-[0.5em] uppercase">
                Transmitir Dados <Send size={24} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
