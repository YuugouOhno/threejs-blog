type Props = {
    setWireframeChecked?: Function
}

const Controller = ({setWireframeChecked}:Props) => {
    const hundleChange = () => {
        setWireframeChecked(prev =>!prev)
    }
    return (
        <>
            <div className="z-20 w-1/4 absolute bottom-0 right-0 text-white mb-5 text-center bg-black opacity-70">
                <label>
                    <input
                        type="checkbox"
                        onChange={hundleChange}
                    />
                    modelをwireframeで表示
                </label>
            </div>
        </>
    );
};

export default Controller;
