const CardText = ({ children, className, ...props }) => {
    return (
        <span className={`font-semibold text-secondary-950 ${className ?? ''}`} {...props}>
            {children}
        </span>
    );
};

export default CardText;
