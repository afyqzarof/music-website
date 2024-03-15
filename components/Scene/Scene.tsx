import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Sunflower/Sunflower";

const Scene = () => {
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      camera={{ position: [12, 0, 12], rotation: [0, 0, 180] }}
    >
      <ambientLight intensity={4} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        minPolarAngle={1.57079}
        maxPolarAngle={1.57079}
      />

      <Model scale={[1.2, 1.2, 1.2]} />
    </Canvas>
  );
};

export default Scene;
