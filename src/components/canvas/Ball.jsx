import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";






const SauronRing = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3.25}>
        {/* Using TorusGeometry to create a ring shape */}
        <torusGeometry args={[0.7, 0.100, 604, 200]} /> {/* Adjust innerRadius, outerRadius, and segments as needed */}
        {/* Applying material with color */}
        <meshStandardMaterial
          color='#ffffff' // Adjust color as needed
          metalness={1} // Set to 1 for a metallic appearance
          roughness={0.8} // Adjust roughness to control reflection
          polygonOffset
          polygonOffsetFactor={25}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} />
        <SauronRing imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
