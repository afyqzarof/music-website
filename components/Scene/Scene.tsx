import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Sunflower/Sunflower";

const Scene = ({ scale, position, zoom }) => {
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      camera={{ position, rotation: [0, 0, 180], zoom }}
    >
      <ambientLight intensity={4} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        minPolarAngle={1.57079}
        maxPolarAngle={1.57079}
      />

      <Model scale={scale} />
    </Canvas>
  );
};

export default Scene;
