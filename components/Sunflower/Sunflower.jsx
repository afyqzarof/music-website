import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF("/sunflower.glb");

  useFrame(() => {
    if (!group) {
      return;
    }

    group.current.rotation.y += 0.012;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, 2.5, 0]}>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Material.002"]}
          position={[-0.644, 4.513, -0.739]}
          rotation={[-0.213, 0.287, -0.157]}
        />
        <mesh
          name="black_core"
          geometry={nodes.black_core.geometry}
          material={materials["Material.001"]}
          position={[-0.629, 3.704, 0.61]}
          rotation={[0, 0, 1.583]}
        />
        <mesh
          name="Cone"
          geometry={nodes.Cone.geometry}
          material={materials["Material.003"]}
          position={[-0.782, 3.768, 0.584]}
          scale={[0.338, 1.122, 0.937]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.004"]}
          position={[-1.173, 1.927, 0.398]}
          scale={[0.929, 2.015, 1.26]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          position={[-0.631, 3.381, -0.786]}
          rotation={[-1.126, 0.309, -0.228]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-0.608, 5.189, -0.097]}
          rotation={[0.497, 0.414, -0.295]}
          scale={[1.217, 0.809, 0.842]}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials["Material.002"]}
          position={[-0.784, 5.169, 0.984]}
          rotation={[1.253, 0.553, -0.095]}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials["Material.002"]}
          position={[-0.808, 4.294, 1.84]}
          rotation={[2.313, 0.622, 0.003]}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials["Material.002"]}
          position={[-0.674, 3.406, 2.021]}
          rotation={[2.827, 0.652, -0.049]}
          scale={[1.217, 0.809, 0.842]}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials["Material.002"]}
          position={[-0.726, 2.757, 1.114]}
          rotation={[-2.74, 0.457, -0.035]}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials["Material.002"]}
          position={[-0.661, 2.633, 0.092]}
          rotation={[-2.025, 0.271, -0.075]}
          scale={0.804}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sunflower.glb");
