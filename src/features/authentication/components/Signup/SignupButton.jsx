const SignupButton = ({ children, className, ...props }) => {
    return (
        <>
            <button
                className={`button | w-full py-4 text-4xl font-bold ${className}`}
                type="submit"
                {...props}
            >
                {children}
            </button>
        </>
    );
};

export default SignupButton;
