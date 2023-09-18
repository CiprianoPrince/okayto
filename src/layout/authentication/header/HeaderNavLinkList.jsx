import HeaderLink from './HeaderNavLink';

const HeaderNavLinkList = ({ navLinks }) => {
    return (
        <>
            <ul className="flex flex-row gap-2">
                {navLinks.map((navLink) => (
                    <HeaderLink key={navLink.name} navLink={navLink} />
                ))}
            </ul>
        </>
    );
};

export default HeaderNavLinkList;
