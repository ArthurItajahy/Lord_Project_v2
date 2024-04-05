import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Gandalf = ({ isMobile }) => {
  const { scene } = useGLTF("./gollum/scene.gltf");

  return (
    <group>
      <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[20, 0, 20, 20]}

        penumbra={22}
        intensity={1}
        castShadow
        shadowMapSize={1024} // corrected from shadow-mapSize to shadowMapSize
      />
      <pointLight intensity={-1} />
      <primitive

        object={scene}
        scale={isMobile ? 0.7 : 25.69}
        position={isMobile ? [0, -3, -2.2] : [0, 0.5, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
}
const GandalfCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas

      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 10,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Gandalf isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GandalfCanvas;
