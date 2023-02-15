import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";


type Props = {
    wireframeChecked?: boolean
}

const Model = ({wireframeChecked}:Props) => {
    const [colorMap, normalMap] = useLoader(TextureLoader, [
        "cottage_diffuse.png",
        "cottage_normal.png",
    ]);
    const materials = useLoader(MTLLoader, "cottage_obj.mtl");
    const obj = useLoader(OBJLoader, "cottage_obj.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
    obj.children[4].material.wireframe = wireframeChecked;
    // obj.children[4].material.alpha = true;
    // obj.children[4].material.trasparent = true;
    // // obj.children[4].material.alphaToCoverage = false;
    // obj.children[4].material.opacity = 0.5;

    console.log(obj.children[4].material);
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <primitive
                object={obj}
                scale={0.4}
                map={colorMap}
                normalMap={normalMap}
                opacity={0.5}
            />
        </>
    );
};

export default Model;
