import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
    const ref = useRef<any>();
    const [clicked, setClicked ] = useState(false);
    useFrame( ()=> (ref.current.rotation.x +=0.01 ));
    return (
        <mesh ref={ref} onClick={()=>setClicked(!clicked)} scale={clicked ? 2 : 1 }>
            <boxGeometry  args={[1, 1, 1]} />
            <meshStandardMaterial color={"red"} />
        </mesh>
    )
}

export default Box;