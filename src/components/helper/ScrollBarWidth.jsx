import { useEffect } from 'react';
import useScrollbarWidth from '../../hooks/useScrollbarWidth';

function ScrollBarWidth() {
    const scrollbarWidth = useScrollbarWidth();

    // Setting the CSS variable on the root
    useEffect(() => {
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

        return () => document.documentElement.style.removeProperty('--scrollbar-width');
    }, [scrollbarWidth]);

    return null;
}

export default ScrollBarWidth;
