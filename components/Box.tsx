// import { Props } from "@react-three/fiber";
import { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";

type Props = {
    position?: any
}

const Box = ({position}:Props) => {
    const ref = useRef<any>();
    const [clicked, setClicked ] = useState(false);
    // useFrame( ()=> (ref.current.rotation.x +=0.01 ));
    return (
        <mesh onClick={()=>setClicked(!clicked)} scale={clicked ? 2 : 1 } position={position}>
            <boxGeometry  args={[1, 1, 1]} />
            <meshStandardMaterial color={"red"} wireframe={true}/>
        </mesh>
    )
}

export default Box;