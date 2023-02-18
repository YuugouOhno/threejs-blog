import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";


const MainModel = () => {
    const materials = useLoader(MTLLoader, "test5-1.mtl");
    const obj = useLoader(OBJLoader, "test5-1.obj", (loader) => {
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
            />
        </>
    );
};

export default MainModel;
