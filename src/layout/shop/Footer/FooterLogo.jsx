import { Link } from 'react-router-dom';

const FooterLogo = ({ className, headerLogo, ...props }) => {
    return (
        <>
            <Link to="/">
                <img
                    className={className ?? ''}
                    src={headerLogo.url}
                    alt={headerLogo.alt}
                    width={headerLogo.width}
                    height={headerLogo.height}
                    {...props}
                />
            </Link>
        </>
    );
};

export default FooterLogo;
