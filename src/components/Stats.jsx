import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Text,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";

const StatBox = ({ num, label, position, color, distort = 0.3 }) => (
  <Float speed={4} rotationIntensity={0.6} floatIntensity={1.2}>
    <mesh position={position}>
      <boxGeometry args={[3.2, 1.8, 0.2]} />
      <meshStandardMaterial
        color={color}
        opacity={0.15}
        transparent
        metalness={1}
        roughness={0}
      />
      <Text
        position={[0, 0.2, 0.15]}
        fontSize={0.7}
        color={color}
        font="https://fonts.gstatic.com/s/outfit/v11/Q_k79pfa_V7700e-v5_D.woff2"
        anchorX="center"
        anchorY="middle"
      >
        {num}
      </Text>
      <Text
        position={[0, -0.4, 0.15]}
        fontSize={0.2}
        color="#ffffff"
        opacity={0.6}
        letterSpacing={0.2}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </mesh>
  </Float>
);

const Stats = () => {
  return (
    <section
      id="stats"
      className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 z-0 cursor-move">
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#d4af37" intensity={5} />
          <pointLight
            position={[-10, -10, -10]}
            color="#c8102e"
            intensity={5}
          />

          <StatBox
            num="2.5M+"
            label="IG FOLLOWERS"
            position={[-5, 3, 0]}
            color="#d4af37"
          />
          <StatBox
            num="650K+"
            label="YOUTUBE SUBS"
            position={[5, 2, -3]}
            color="#c8102e"
          />
          <StatBox
            num="2B+"
            label="TOTAL REACH"
            position={[-4, -3, 2]}
            color="#ffffff"
          />
          <StatBox
            num="13 ANOS"
            label="CARREIRA ÉPICA"
            position={[4, -2, -1]}
            color="#d4af37"
          />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="z-10 text-center pointer-events-none px-4">
        <div className="flex flex-col items-center">
          <span className="text-gold font-black tracking-[1em] text-[10px] uppercase mb-8">
            Data of Influence
          </span>
          <h2 className="text-[18vw] font-black text-white leading-none tracking-tighter mix-blend-difference">
            IMPACTO
          </h2>
          <h3 className="text-3xl md:text-5xl font-display text-white/40 mt-[-4vw]">
            DOMÍNIO DIGITAL ABSOLUTO
          </h3>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Stats;
