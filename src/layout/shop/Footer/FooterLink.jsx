import { Link } from 'react-router-dom';

const FooterLink = ({ link }) => {
    const { name, path } = link;
    return (
        <>
            <li className="font-montserrat text-base font-semibold leading-7 text-secondary-500 hover:text-secondary-700">
                <Link href={path}>{name}</Link>
            </li>
        </>
    );
};

export default FooterLink;
