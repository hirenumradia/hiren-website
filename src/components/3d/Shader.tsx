import * as THREE from "three";
import { Heading, Box, Main } from "grommet";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Component, useMemo, useRef, useState, Suspense } from "react";
import { BufferAttribute, BufferGeometry, TextureLoader } from "three";

export default function Shader(props: JSX.IntrinsicElements["mesh"]) {
  const starDistance: number = 250;
  const starQuantity: number = 1250;
  const distance: number = 1000;

  const [verticies, velocities, accelerations] = useMemo(() => {
    let verticies = [];
    let velocities = [];
    let accelerations = [];

    for (let i = 0; i < starQuantity; i++) {
      verticies.push(starDistance - Math.random() * starDistance * 2);
      verticies.push(starDistance - Math.random() * starDistance * 2);
      verticies.push(-1 * distance * Math.random());
      velocities.push(0);
      accelerations.push(Math.random() * 0.0002);
    }
    return [new Float32Array(verticies), velocities, accelerations];
  }, [starQuantity]);

  const meshRef = useRef<THREE.Mesh>(null!);

  const pointsRef = useRef<THREE.BufferGeometry>(null!);

  const starSprite = useLoader(TextureLoader, "/starSprite.png");

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;

    const positionAttribute = pointsRef.current.getAttribute("position");

    // console.log("Before Z", positionAttribute);

    for (let i = 0; i < positionAttribute.count; i++) {
      let z = positionAttribute.getZ(i);

      let vel = velocities[i];

      let accel = accelerations[i];

      vel += accel;
      velocities[i] = vel;

      z += vel;

      if (z >= 0) {
        velocities[i] = 0;
        z = -1 * distance * Math.random();
      }

      positionAttribute.setZ(i, z);
    }

    positionAttribute.needsUpdate = true;
  });

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
      <points>
        <bufferGeometry attach="geometry" ref={pointsRef}>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={verticies.length / 3}
            array={verticies}
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
