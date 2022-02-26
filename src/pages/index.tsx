import { Heading, Box, Main } from "grommet";
import Head from "next/head";
import Shader from "../components/3d/Shader";
import { Component, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  attributes,
  react as HomeContent,
} from "../../_collections/posts/oxie.md";
import { FC } from "react";
import { Euler } from "three";

const Home: FC<unknown> = () => {
  let { title, cats } = attributes;
  const cameraRotation = new Euler(Math.PI / 2, 0, 1);
  return (
    <>
      <Main pad="large">
        <Heading size="xxxlarge">{title}</Heading>
        <HomeContent />
        <Box style={{ zIndex: 1 }}>
          {cats.map((cat, k) => (
            <Box key={k}>
              <Heading size="xlarge">{cat.name}</Heading>
              <p>{cat.description}</p>
            </Box>
          ))}
        </Box>
        <Box fill={true} style={{ position: "absolute" }}>
          <Canvas>
            <Suspense fallback={null}>
              <perspectiveCamera
                position={1}
                rotation={cameraRotation}
                fov={60}
                near={1}
                far={2000}
              />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Shader position={[-1.2, 0, 0]}></Shader>
              <Shader position={[1.2, 0, 0]}></Shader>
            </Suspense>
          </Canvas>
        </Box>
      </Main>
    </>
  );
};

export default Home;
