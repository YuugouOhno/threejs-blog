import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

import { useRef, useState } from "react";



type Props = {
    setSelectedPost?: any,
    Id?: String
}


const SubModel2 = ({ setSelectedPost, Id}:Props) => {

    const ref = useRef<any>();
    const handleClick = () => {
        setSelectedPost(Id);
    }

    const materials = useLoader(MTLLoader, "test5-3.mtl");
    const obj = useLoader(OBJLoader, "test5-3.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    }) as any;

    

    console.log(obj)
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <primitive
                object={obj}
                scale={0.004}
                opacity={0.5}
                onClick={handleClick}
            />
        </>
    );
};

export default SubModel2;