import HeaderNavLinkList from './HeaderNavLinkList';

const HeaderNav = ({ navLinks }) => {
    return (
        <nav className="hidden lg:block" aria-label="main">
            <HeaderNavLinkList navLinks={navLinks} />
        </nav>
    );
};

export default HeaderNav;
