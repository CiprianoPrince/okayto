const FormLabel = ({ children, className, ...props }) => {
    return (
        <label className={`block text-lg ${className}`} {...props}>
            {children}
        </label>
    );
};

export default FormLabel;
