import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Text,
  Environment,
  Stars,
  useTexture,
  MeshDistortMaterial,
  Bloom,
  EffectComposer,
} from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const count = 2000;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 60;
      p[i * 3 + 1] = (Math.random() - 0.5) * 60;
      p[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#d4af37"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FlyPortrait = () => {
  // IMAGEM REAL FLY SKUAD - URL YouTube High-Res
  const texture = useTexture(
    "https://i.ytimg.com/vi/vF0S7OOn9Ew/maxresdefault.jpg",
  );

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]} rotation={[0, -0.2, 0]}>
        <planeGeometry args={[10, 5.6]} />
        <MeshDistortMaterial
          map={texture}
          speed={3}
          distort={0.15}
          radius={1}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="h-screen w-full relative bg-black overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: false }}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} />
          <Environment preset="night" />
          <Stars
            radius={100}
            depth={50}
            count={7000}
            factor={4}
            saturation={1}
            fade
            speed={2}
          />
          <ParticleField />
          <FlyPortrait />
          <ambientLight intensity={0.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={5}
            color="#d4af37"
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={2}
            color="#c8102e"
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <div className="overflow-hidden mb-[-2vw]">
          <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter text-white mix-blend-difference animate-pulse">
            FLY
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter text-gold text-glow italic">
            SKUAD
          </h1>
        </div>

        <p className="font-display text-lg md:text-2xl mt-8 text-white/60 tracking-[1em] uppercase bg-black/50 backdrop-blur-md px-6 py-2">
          Rei do Rompimento • Luanda
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-8 pointer-events-auto">
          <button className="px-10 py-5 bg-gold text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            OUVIR DISCOGRAFIA
          </button>
          <button className="px-10 py-5 border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 backdrop-blur-sm">
            ASSISTIR PODCAST
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 z-20 hidden md:block">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.5em] text-white/30 font-black uppercase rotate-[-90deg] origin-left translate-y-[-100px]">
          SOTD Candidate 2026
        </div>
      </div>
    </section>
  );
};

export default Hero;
