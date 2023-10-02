const CardTitle = ({ children, className, ...props }) => {
    return (
        <>
            <h1 className={`header-1 | ${className ?? ''}`} {...props}>
                {children}
            </h1>
        </>
    );
};

export default CardTitle;
