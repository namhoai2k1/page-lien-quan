import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';

function SmoothScrollbar({ children }) {
    const ref = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const { scrollbar } = ref.current;
        scrollbar.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Scrollbar className="scrollbar" ref={ref} damping={0.1}>
            {children}
        </Scrollbar>
    );
}

export default SmoothScrollbar;
