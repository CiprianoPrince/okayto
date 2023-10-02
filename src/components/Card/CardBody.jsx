const CardBody = ({ children, className, ...props }) => {
    return (
        <div className={`${className ?? 'px-6'}`} {...props}>
            {children}
        </div>
    );
};

export default CardBody;
