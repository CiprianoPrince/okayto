import { NavLink } from 'react-router-dom';
const DropDownMenuLink = ({ link }) => {
    return (
        <li className="text-lg font-semibold">
            <NavLink
                className="block truncate rounded-lg px-3 py-1 hover:bg-primary-100/50"
                to={link.path}
            >
                {link.name}
            </NavLink>
        </li>
    );
};

export default DropDownMenuLink;
