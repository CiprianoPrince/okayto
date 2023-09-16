const FormError = ({ children, className, ...props }) => {
    return (
        <span className={`text-xs text-red-500 ${className}`} {...props}>
            {children}
        </span>
    );
};

export default FormError;
