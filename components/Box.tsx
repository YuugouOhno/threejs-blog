// import { Props } from "@react-three/fiber";
import { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";

type Props = {
    position?: any,
    setSelectedPost?: any,
    selectedPost?: String,
    Id?: String
}

const Box = ({position, setSelectedPost, selectedPost, Id}:Props) => {
    const ref = useRef<any>();
    const handleClick = () => {
        setSelectedPost(Id);
    }
    
    return (
        <mesh onClick={handleClick} position={position}>
            <boxGeometry  args={[1, 1, 1]} />
            <meshStandardMaterial color={selectedPost==Id?"purple":"orange"} wireframe={true}/>
        </mesh>
    )
}

export default Box;