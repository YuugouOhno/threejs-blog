import { useState } from "react";

type Props = {
    wireframeChecked?: boolean;
    setWireframeChecked?: (checked: boolean) => void;
};

const Controller = ({
    wireframeChecked = false,
    setWireframeChecked,
}: Props) => {
    const [checked, setChecked] = useState<boolean>(wireframeChecked);

    const handleChange = () => {
        setChecked(!checked);
        setWireframeChecked && setWireframeChecked(!checked);
    };
    return (
        <>
            <div className="z-20 w-1/4 absolute bottom-0 right-0 text-white mb-5 text-center bg-black opacity-70">
                <label>
                    <input type="checkbox" onChange={handleChange} />
                    modelをwireframeで表示
                </label>
            </div>
        </>
    );
};

export default Controller;
