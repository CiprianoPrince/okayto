const FooterCopyright = ({ children, className, ...props }) => {
    const year = new Date().getFullYear();
    return (
        <>
            <span
                className={`text-center font-montserrat text-base font-semibold leading-normal text-secondary-500 ${className}`}
                {...props}
            >
                {children ?? (
                    <>
                        <span className="whitespace-nowrap">Copyright &copy; {year} Okayto.</span>{' '}
                        <span className="whitespace-nowrap">All rights reserved</span>
                    </>
                )}
            </span>
        </>
    );
};

export default FooterCopyright;
