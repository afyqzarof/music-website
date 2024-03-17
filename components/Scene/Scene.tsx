"use client";
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Sunflower/Sunflower2";

type SceneProps = {
  position: [number, number, number];
};
const Scene = ({ position }: SceneProps) => {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ position, rotation: [0, 0, 180] }}>
      <ambientLight intensity={4} />
      <OrbitControls makeDefault enableZoom={false} />

      <Model />
    </Canvas>
  );
};

export default Scene;
