// components
import SearchBar from './SearchBar';

// constant
import { headerConstant } from '../../../constants';

import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

// Menu
import HamburgerDropDownMenu from './HamburgerDropDownMenu';
import UserDropDownMenu from './UserDropDownMenu';
import CartDropDownMenu from './CartDropDownMenu';
const Header = () => {
    const { headerLogo, navLinks, authLinks } = headerConstant;
    return (
        <>
            <header className="sticky top-0 z-10 bg-primary-50 text-secondary-800 shadow-lg">
                <div className="container mx-auto flex items-center justify-between p-6">
                    <HamburgerDropDownMenu navLinks={navLinks} authLinks={authLinks} />

                    <HeaderLogo headerLogo={headerLogo} />

                    <HeaderNav navLinks={navLinks} />

                    <div className="flex max-w-sm items-center gap-4 lg:w-full">
                        <SearchBar inputGroupClass="hidden lg:flex" />

                        <CartDropDownMenu authLinks={authLinks} />

                        <UserDropDownMenu authLinks={authLinks} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
