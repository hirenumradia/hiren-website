import * as THREE from "three";
import { Heading, Box, Main } from "grommet";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Component, useMemo, useRef, useState, Suspense } from "react";
import { BufferAttribute, BufferGeometry, TextureLoader } from "three";

export default function Shader(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const vertices = [];

  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);

    vertices.push(x, y, z);
  }

  const pointsRef = useRef<THREE.BufferGeometry>(null!);

  const starSprite = useLoader(TextureLoader, "/starSprite.png");

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));

  const starDistance: number = 250;
  const starQuantity: number = 1250;

  const [positions] = useMemo(() => {
    let positions = [];
    for (let i = 0; i < starQuantity; i++) {
      positions.push(starDistance - Math.random() * starDistance * 2);
      positions.push(starDistance - Math.random() * starDistance * 2);
      positions.push(starDistance - Math.random() * starDistance * 2);
    }
    return [new Float32Array(positions)];
  }, [starQuantity]);

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
        <meshStandardMaterial color={hovered ? "pink" : "orange"} />
      </mesh>
      <points>
        <bufferGeometry attach="geometry" ref={pointsRef}>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          ></bufferAttribute>
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          color={"white"}
          map={starSprite}
          alphaTest={0.5}
          transparent={true}
          sizeAttenuation={true}
        />
      </points>
      {/* <bufferGeometry>
        <vector3 args={[0, 0, 0]} />
      </bufferGeometry> */}
    </>
  );
}
