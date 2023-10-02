import PaginationButton from './PaginationButton';

const Pagination = ({ totalPages, currentPage, handleToPrevPage, handleToNextPage }) => {
    const isPrevPageAvailable = currentPage - 1 > 0;
    const isNextPageAvailable = currentPage + 1 <= totalPages;

    return (
        <nav aria-label="Page navigation">
            <ul className="list-style-none flex flex-shrink-0 items-center justify-center gap-4">
                <li>
                    <PaginationButton
                        label="Previous"
                        isAvailable={isPrevPageAvailable}
                        onClick={handleToPrevPage}
                    />
                </li>

                <li>
                    <PaginationButton
                        label={currentPage - 1}
                        isAvailable={isPrevPageAvailable}
                        onClick={handleToPrevPage}
                    />
                </li>

                <li aria-current="page">
                    <button
                        className="relative block rounded bg-neutral-100 px-4 py-2 text-sm text-secondary-600 transition-all duration-300"
                        disabled
                    >
                        {currentPage}
                    </button>
                </li>

                <li>
                    <PaginationButton
                        label={currentPage + 1}
                        isAvailable={isNextPageAvailable}
                        onClick={handleToNextPage}
                    />
                </li>

                <li>
                    <PaginationButton
                        label="Next"
                        isAvailable={isNextPageAvailable}
                        onClick={handleToNextPage}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
