import { UserIcon } from '@heroicons/react/24/outline';

import { useMemo, useRef, useState } from 'react';

import DropDownMenuIcon from './DropDownMenuIcon';
import DropDownMenu from './DropDownMenu';

import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../../features/authentication/slices';

const UserDropDownMenu = ({ authLinks }) => {
    const UserRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu((prev) => !prev);
    };

    const accessLogin = useSelector(selectAccessToken);
    const filteredAuthLinks = useMemo(() => {
        return authLinks.filter((authLink) => {
            const isSigninOrSingup = authLink.path === 'signin' || authLink.path === 'signup';
            if (accessLogin) {
                return !isSigninOrSingup;
            } else {
                return isSigninOrSingup;
            }
        });
    }, [accessLogin]);

    return (
        <>
            <div className="relative hidden lg:block">
                <DropDownMenuIcon ref={UserRef} onClick={handleClick} aria-label="Menu button">
                    <UserIcon className="w-10" />
                </DropDownMenuIcon>

                {showMenu && (
                    <DropDownMenu
                        className="right-0 top-full w-60"
                        ref={UserRef}
                        links={filteredAuthLinks}
                        setShowMenu={setShowMenu}
                    />
                )}
            </div>
        </>
    );
};
[];

export default UserDropDownMenu;
