import { Link } from 'react-router-dom';
const CardLink = ({ children, className, to, ...props }) => {
    return (
        <>
            <Link
                className={`text-accent-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ${className}`}
                to={to ?? '/'}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};

export default CardLink;
