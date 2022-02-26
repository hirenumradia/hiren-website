import * as THREE from "three";
import { Heading, Box, Main } from "grommet";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useRef, useState } from "react";

export default function Shader(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const pointsRef = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));
  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      {/* <bufferGeometry>
        <vector3 args={[0, 0, 0]} />
      </bufferGeometry> */}
    </>
  );
}
