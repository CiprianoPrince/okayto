const CardFooter = ({ children, className, ...props }) => {
    return (
        <div className={`${className ?? 'p-6'}`} {...props}>
            {children}
        </div>
    );
};

export default CardFooter;
