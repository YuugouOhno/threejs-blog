import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import Model from "../components/Model";
import { OrbitControls } from "@react-three/drei";

import { Suspense } from "react";

const Home: NextPage = () => {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas>
        {/* <directionalLight color="red" position={[0, 0, 10]} /> */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Box position={[0,2,2]}/>
        <Box position={[1,1,-2]}/>
        <Box position={[-4,1,0]}/>
        <OrbitControls />
      </Canvas>

      <div className="controller">
      <label>
        範囲を選択：<input type="range" min="0" max="100"/>
      </label>
      </div>
    </div>
  );
};

export default Home;
