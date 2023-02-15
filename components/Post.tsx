type Props = {
    setSelectedPost?: any
    selectedPost?: String
};

const Post = ({ setSelectedPost, selectedPost }: Props) => {
    const handleClick = () => {
        setSelectedPost("");
    };
    return (
        <>
            <div className="z-10 w-1/4 h-screen absolute top-0 right-0 bg-black opacity-70">
                <div className="text-white p-3 text-4xl" onClick={handleClick}>
                    X
                </div>
                <div className="text-white">{selectedPost}</div>
            </div>
        </>
    );
};

export default Post;
