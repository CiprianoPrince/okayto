const CardHeader = ({ children, className, ...props }) => {
    return (
        <div className={`${className ?? 'p-6'}`} {...props}>
            {children}
        </div>
    );
};

export default CardHeader;
