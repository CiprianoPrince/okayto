import HeaderNavLink from './HeaderNavLink';

const HeaderNavLinkList = ({ navLinks }) => {
    return (
        <>
            <ul className="flex items-center justify-center gap-x-6">
                {navLinks.map((navLink) => (
                    <HeaderNavLink key={navLink.name} navLink={navLink} />
                ))}
            </ul>
        </>
    );
};

export default HeaderNavLinkList;
