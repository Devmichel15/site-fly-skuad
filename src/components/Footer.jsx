import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";

const Footer = () => {
  return (
    <footer className="h-[90vh] w-full bg-black relative flex flex-col items-center justify-center overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#c8102e" intensity={10} />
          <pointLight
            position={[-10, -10, -10]}
            color="#d4af37"
            intensity={5}
          />

          <Float speed={8} rotationIntensity={1.5} floatIntensity={1}>
            <mesh scale={2.5}>
              <sphereGeometry args={[1, 100, 100]} />
              <MeshDistortMaterial
                color="#c8102e"
                speed={1.5}
                distort={0.6}
                radius={1}
                metalness={0.8}
                roughness={0.1}
              />
            </mesh>
          </Float>
        </Canvas>
      </div>

      <div className="z-10 text-center flex flex-col items-center px-6">
        <div className="w-32 h-32 border-4 border-gold p-2 mb-12 animate-pulse shadow-[0_0_80px_rgba(212,175,55,0.3)]">
          <div className="w-full h-full bg-gold flex items-center justify-center">
            <span className="text-black font-black text-6xl italic font-display">
              FS
            </span>
          </div>
        </div>

        <h2 className="text-[10vw] font-black text-white leading-[0.7] tracking-tighter mb-8 italic">
          FLY <span className="text-gold">SKUAD</span>
        </h2>

        <div className="w-60 h-[1px] bg-white/20 mb-12" />

        <p className="text-white/30 font-black tracking-[1em] text-[10px] uppercase mb-20 max-w-lg text-center leading-relaxed">
          O Legado da Cultura Angolana é Perpetuado pela Visão de Quem Ousa
          Romper.
        </p>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-white/50 text-[10px] tracking-[0.5em] font-black uppercase">
          <span className="hover:text-gold cursor-pointer transition-all border-b border-transparent hover:border-gold">
            Network
          </span>
          <span className="hover:text-gold cursor-pointer transition-all border-b border-transparent hover:border-gold">
            Privacy Protocol
          </span>
          <span className="hover:text-gold cursor-pointer transition-all border-b border-transparent hover:border-gold">
            Terms of Existence
          </span>
          <span className="hover:text-gold cursor-pointer transition-all border-b border-transparent hover:border-gold">
            Angola Avante
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex flex-col md:flex-row justify-between px-12 gap-8 items-center border-t border-white/5 pt-8">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-angola animate-ping" />
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">
            Global Operations Office • Dubai & Luanda
          </span>
        </div>
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">
          © 2026 Fly Skuad Digital Core • Powered by Greatness
        </span>
        <div className="flex gap-4">
          <div className="w-8 h-[1px] bg-white/10" />
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">
            SOTD Gold
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
