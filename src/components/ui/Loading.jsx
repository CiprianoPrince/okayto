const Loading = () => {
    return (
        <div className="flex h-full min-h-full w-full max-w-full items-center justify-center bg-primary-100">
            <div className="animate-spin aspect-square w-1/12 rounded-full border-8 border-accent-300 border-r-accent-500"></div>
        </div>
    );
};

export default Loading;
