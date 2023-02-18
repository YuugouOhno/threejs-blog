import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

import { useRef, useState } from "react";



type Props = {
    setSelectedPost?: any,
    Id?: String
}


const SubModel = ({ setSelectedPost, Id}:Props) => {

    const ref = useRef<any>();
    const handleClick = () => {
        setSelectedPost(Id);
    }

    const materials = useLoader(MTLLoader, "test3-2.mtl");
    const obj = useLoader(OBJLoader, "test3-2.obj", (loader) => {
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
                scale={1}
                opacity={0.5}
                onClick={handleClick}
            />
        </>
    );
};

export default SubModel;