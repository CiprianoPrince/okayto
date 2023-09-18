const FooterText = ({ children, className, ...props }) => {
    return (
        <>
            <p
                className={`mt-6 font-montserrat text-base font-semibold leading-7 text-secondary-500 ${className}`}
                {...props}
            >
                {children}
            </p>
        </>
    );
};

export default FooterText;
