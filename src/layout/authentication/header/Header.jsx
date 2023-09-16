import { Link, NavLink } from 'react-router-dom';
import { authLayoutConstant as constant } from '../../../constants';
const Header = () => {
    // const { pathname } = useLocation()
    return (
        <>
            <header className="sticky top-0 w-full bg-primary-100 text-secondary-800">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <Link className="w-[8rem]" to="/">
                        <img src={constant?.headerLogo?.url} alt={constant?.headerLogo?.alt} />
                    </Link>

                    <nav className="flex max-w-sm items-center justify-end gap-4 lg:w-full">
                        <NavLink
                            className="rounded-full px-3 py-2 font-semibold text-accent-500"
                            to="signin"
                        >
                            Sign in
                        </NavLink>

                        <NavLink
                            className="rounded-full bg-accent-100 px-3 py-2 font-semibold text-accent-500"
                            to="signup"
                        >
                            Sign up
                        </NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
