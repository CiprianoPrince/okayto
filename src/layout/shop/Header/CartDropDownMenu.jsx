import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import { useRef, useState } from 'react';

import DropDownMenuIcon from './DropDownMenuIcon';
import DropDownMenu from './DropDownMenu';
const CartDropDownMenu = ({ authLinks }) => {
    const CartRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu((prev) => !prev);
    };

    const cartLinks = [
        {
            name: 'View cart',
            path: 'cart',
        },
    ];

    return (
        <>
            <div className="relative">
                <DropDownMenuIcon ref={CartRef} onClick={handleClick} aria-label="Menu button">
                    <ShoppingBagIcon className="w-8 lg:w-10" />
                </DropDownMenuIcon>
                {showMenu && (
                    <DropDownMenu
                        className="right-0 top-full w-80"
                        ref={CartRef}
                        links={cartLinks}
                        setShowMenu={setShowMenu}
                    />
                )}
            </div>
        </>
    );
};
[];

export default CartDropDownMenu;
