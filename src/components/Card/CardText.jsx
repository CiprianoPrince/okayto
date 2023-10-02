const CardText = ({ children, className, ...props }) => {
    return (
        <span className={`card-text ${className ?? ''}`} {...props}>
            {children}
        </span>
    );
};

export default CardText;
