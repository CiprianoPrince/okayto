import { useState, useEffect } from 'react';

function useScrollbarWidth() {
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);

        const width = outer.offsetWidth - inner.offsetWidth;

        setScrollbarWidth(width);

        outer.parentNode.removeChild(outer);
    }, []);

    return scrollbarWidth;
}

export default useScrollbarWidth;
