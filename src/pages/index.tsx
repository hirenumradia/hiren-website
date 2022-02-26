import { Heading, Box, Main } from "grommet";
import Head from "next/head";
import Shader from "../components/3d/Shader";
import { Component } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  attributes,
  react as HomeContent,
} from "../../_collections/posts/oxie.md";
import { Euler } from "three";

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    const cameraRotation = new Euler(Math.PI / 2, 0, 1);
    return (
      <>
        <Main pad="large">
          <Heading size="xxxlarge">{title}</Heading>
          <HomeContent />
          <Box>
            {cats.map((cat, k) => (
              <Box key={k}>
                <Heading size="xlarge">{cat.name}</Heading>
                <p>{cat.description}</p>
              </Box>
            ))}
            <Canvas>
              <perspectiveCamera
                position={1}
                rotation={cameraRotation}
                fov={60}
                near={1}
                far={1000}
              />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Shader position={[-1.2, 0, 0]}></Shader>
              <Shader position={[1.2, 0, 0]}></Shader>
            </Canvas>
          </Box>
        </Main>
      </>
    );
  }
}
