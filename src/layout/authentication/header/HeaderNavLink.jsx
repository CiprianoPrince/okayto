import { NavLink } from 'react-router-dom';

const HeaderNavLink = ({ navLink }) => {
    const { name, path } = navLink;

    const handleIsActive = ({ isActive }) => {
        if (isActive) return 'rounded-full bg-accent-100 px-3 py-2 font-semibold text-accent-500';
        return 'rounded-full px-3 py-2 font-semibold text-accent-500';
    };

    return (
        <li>
            <NavLink className={handleIsActive} to={path}>
                {name}
            </NavLink>
        </li>
    );
};

export default HeaderNavLink;
