import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  useTexture,
  MeshDistortMaterial,
} from "@react-three/drei";

const Record = ({ url, position, rotation }) => {
  const meshRef = useRef();
  const texture = useTexture(url);

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <cylinderGeometry args={[2.5, 2.5, 0.15, 64]} />
        <meshStandardMaterial map={texture} roughness={0.1} metalness={0.9} />
      </mesh>
    </Float>
  );
};

const Musica = () => {
  const albums = [
    {
      title: "VILÃO",
      url: "https://i.ytimg.com/vi/vF0S7OOn9Ew/maxresdefault.jpg",
    },
    {
      title: "AQUECIMENTO",
      url: "https://i.ytimg.com/vi/j5R_V7G4GqE/maxresdefault.jpg",
    },
    {
      title: "REIS DO ROMPIMENTO",
      url: "https://i.ytimg.com/vi/Gz3A5J-Y8X0/maxresdefault.jpg",
    },
  ];

  return (
    <section
      id="música"
      className="h-[120vh] w-full bg-[#050505] relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="absolute top-32 left-20 z-10 w-full flex flex-col items-start px-20">
        <h2 className="text-[15vw] font-black text-white/5 absolute -top-20 -left-10 leading-none">
          TRACKLIST
        </h2>
        <h3 className="text-7xl font-black text-gold text-glow italic mb-4">
          MÚSICA ABSOLUTA
        </h3>
        <p className="text-white/40 tracking-[1em] uppercase text-xs border-l-2 border-angola pl-4">
          Digital Discography
        </p>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas gl={{ alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[20, 20, 20]}
            angle={0.15}
            penumbra={1}
            intensity={10}
            color="#d4af37"
          />

          <Record
            url={albums[0].url}
            position={[-6, 0, 0]}
            rotation={[0.4, 0, 0]}
          />
          <Record
            url={albums[1].url}
            position={[0, 2, -4]}
            rotation={[0.2, 0.4, 0]}
          />
          <Record
            url={albums[2].url}
            position={[6, -1, 0]}
            rotation={[-0.2, -0.2, 0]}
          />
        </Canvas>
      </div>

      <div className="absolute bottom-32 right-32 flex flex-col items-end gap-8 z-10">
        {albums.map((album, i) => (
          <div
            key={i}
            className="group cursor-pointer text-right flex items-center gap-6"
          >
            <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
            <div className="flex flex-col">
              <span className="text-angola text-[10px] font-black tracking-widest leading-none">
                0{i + 1}. ALBUM
              </span>
              <h3 className="text-5xl md:text-7xl text-white group-hover:text-gold transition-all duration-300 font-black italic">
                {album.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musica;
