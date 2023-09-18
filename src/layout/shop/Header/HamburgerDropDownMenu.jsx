import { Bars3Icon } from '@heroicons/react/24/outline';

import { useRef, useState } from 'react';

import DropDownMenuIcon from './DropDownMenuIcon';
import DropDownMenu from './DropDownMenu';
const HamburgerDropDownMenu = ({ authLinks }) => {
    const HamburgerRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <>
            <div className="relative lg:hidden">
                <DropDownMenuIcon ref={HamburgerRef} onClick={handleClick} aria-label="Menu button">
                    <Bars3Icon className="w-8 lg:w-10" />
                </DropDownMenuIcon>
                {showMenu && (
                    <DropDownMenu
                        className="left-0 top-full w-60"
                        ref={HamburgerRef}
                        links={authLinks}
                        setShowMenu={setShowMenu}
                    />
                )}
            </div>
        </>
    );
};
[];

export default HamburgerDropDownMenu;
