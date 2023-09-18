import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

import { authenticationConstant } from '../../../constants';
const Header = () => {
    // const { pathname } = useLocation()
    const { headerLogo, navLinks } = authenticationConstant;
    return (
        <>
            <header className="sticky top-0 w-full bg-primary-100 text-secondary-800">
                <div className="container mx-auto flex items-center justify-between p-6">
                    <HeaderLogo headerLogo={headerLogo} />

                    <HeaderNav navLinks={navLinks} />
                </div>
            </header>
        </>
    );
};

export default Header;
