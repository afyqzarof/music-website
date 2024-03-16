import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    black_core: THREE.Mesh;
    Cone: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "CircleAction"
  | "ConeAction"
  | "CylinderAction"
  | "Plane.002Action"
  | "Plane.005Action"
  | "Plane.006Action"
  | "Plane.007Action"
  | "Plane.008Action";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/sunflower.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += 0.012;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
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
        {/* <mesh
          name="Cone"
          geometry={nodes.Cone.geometry}
          material={materials["Material.003"]}
          position={[-0.782, 3.768, 0.584]}
          scale={[0.338, 1.122, 0.937]}
        /> */}
        {/* <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          // material={materials["Material.004"]}
          position={[-1.173, 1.927, 0.398]}
          scale={[0.929, 2.015, 1.26]}
        /> */}
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
