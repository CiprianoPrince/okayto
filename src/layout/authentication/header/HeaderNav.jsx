import HeaderLinkList from './HeaderNavLinkList';

const HeaderNav = ({ navLinks }) => {
    return (
        <>
            <nav>
                <HeaderLinkList navLinks={navLinks} />
            </nav>
        </>
    );
};

export default HeaderNav;
