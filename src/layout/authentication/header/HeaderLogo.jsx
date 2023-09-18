import { Link } from 'react-router-dom';

const HeaderLogo = ({ headerLogo }) => {
    return (
        <>
            <Link className="w-[8rem]" to="/">
                <img src={headerLogo.url} alt={headerLogo.alt} />
            </Link>
        </>
    );
};

export default HeaderLogo;
