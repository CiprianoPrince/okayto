import { NavLink } from 'react-router-dom';

const HeaderNavLink = ({ navLink }) => {
    const { name, path } = navLink;

    const anchorClass =
        'relative block before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:-translate-x-[50%] before:bg-accent-500 before:transition-all before:duration-200 before:content-[""] hover:before:w-full';

    const handleIsActive = ({ isActive }) => {
        if (isActive) return `${anchorClass} before:w-full`;
        return `${anchorClass} `;
    };
    return (
        <>
            <li className="text-lg font-semibold">
                <NavLink className={handleIsActive} to={path}>
                    {name}
                </NavLink>
            </li>
        </>
    );
};

export default HeaderNavLink;
