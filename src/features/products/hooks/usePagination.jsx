import { useState } from 'react';

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return [currentPage, handleClick];
};

export default usePagination;
