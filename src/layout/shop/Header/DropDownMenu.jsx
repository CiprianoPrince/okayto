import { useClickOutside } from '../../../hooks';
import { forwardRef } from 'react';

import DropDownMenuLinkList from './DropDownMenuLinkList';

import { motion } from 'framer-motion';
const ForwardRefDropDownMenu = ({ className, links, setShowMenu }, ref) => {
    useClickOutside(ref, () => setShowMenu(false));

    return (
        <motion.div
            className={`absolute max-w-[calc(100vw_-_calc(100%_+_1.5rem))] ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <nav
                className="rounded-lg bg-primary-50 shadow-xl ring-1 ring-secondary-900/5"
                aria-label="main"
            >
                <DropDownMenuLinkList links={links} />
            </nav>
        </motion.div>
    );
};

const DropDownMenu = forwardRef(ForwardRefDropDownMenu);

export default DropDownMenu;
