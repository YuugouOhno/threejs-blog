import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import { Stats, OrbitControls } from '@react-three/drei'


const Home: NextPage = () => {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </div>
  );
};



export default Home;
