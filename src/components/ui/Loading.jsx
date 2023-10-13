const Loading = () => {
    return (
        <div className="animate-pulse flex h-full min-h-full w-full max-w-full items-center justify-center bg-primary-100">
            <div className="aspect-square w-1/12 animate-spin rounded-full border-8 border-accent-300 border-r-accent-500"></div>
        </div>
    );
};

export default Loading;
