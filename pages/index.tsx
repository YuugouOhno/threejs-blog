import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import MainModel from "../components/MainModel";
import SubModel from "../components/SubModel";
import Controler from "../components/Controler";
import Post from "../components/Post";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";


const Home: NextPage = () => {
  const [wireframeChecked, setWireframeChecked] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  console.log(wireframeChecked);
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas className="w-1/2" camera={{ position: [10, 10, 10] }}>
        {/* <directionalLight color="red" position={[0, 0, 10]} /> */}
        <Suspense fallback={null}>
          <MainModel />
          <SubModel setSelectedPost={setSelectedPost} Id="subModel" />
        </Suspense>
        <Box position={[0, 2, 2]} setSelectedPost={setSelectedPost} selectedPost={selectedPost} Id="box1" />
        <Box position={[1, 1, -2]} setSelectedPost={setSelectedPost} selectedPost={selectedPost} Id="box2" />
        <Box position={[-4, 1, 0]} setSelectedPost={setSelectedPost} selectedPost={selectedPost} Id="box3" />
        <OrbitControls />
      </Canvas>
      <Controler wireframeChecked={wireframeChecked} setWireframeChecked={setWireframeChecked}/>
      {selectedPost ? <Post setSelectedPost={setSelectedPost} selectedPost={selectedPost}/>: null}
    </div>
  );
};

export default Home;
