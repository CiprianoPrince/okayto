import { UserIcon } from '@heroicons/react/24/outline';

import { useRef, useState } from 'react';

import DropDownMenuIcon from './DropDownMenuIcon';
import DropDownMenu from './DropDownMenu';
const UserDropDownMenu = ({ authLinks }) => {
    const UserRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu((prev) => !prev);
    };

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
                        links={authLinks}
                        setShowMenu={setShowMenu}
                    />
                )}
            </div>
        </>
    );
};
[];

export default UserDropDownMenu;
