import { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks';

const useItemsPerPage = () => {
    const [itemsPerPage, setitemsPerPage] = useState(9);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width < 768) {
            setitemsPerPage(8);
        } else {
            setitemsPerPage(9);
        }
    }, [width]);
    return itemsPerPage;
};

export default useItemsPerPage;
