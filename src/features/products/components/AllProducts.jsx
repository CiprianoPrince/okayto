// hooks
import { useItemsPerPage, usePagination } from '../hooks';

// redux slice
import { useGetProductsQuery } from '../slices';

// features components
import ProductList from './ProductList';
import Pagination from './Pagination';

// components
import { Loading } from '../../../components';

const AllProducts = () => {
    // Fetch products using the Redux query
    const { productIds, isError, isLoading, isSuccess } = useGetProductsQuery('getProducts', {
        selectFromResult: ({ data, isError, isLoading, isSuccess }) => ({
            productIds: data?.ids,
            isError,
            isLoading,
            isSuccess,
        }),
    });

    // Pagination hooks
    const itemsPerPage = useItemsPerPage();
    const [currentPage, setCurrentPage] = usePagination();

    // Handlers for pagination
    const handleToPrevPage = () => setCurrentPage((prev) => prev - 1);
    const handleToNextPage = () => setCurrentPage((prev) => prev + 1);

    // Render loading states
    if (isLoading) return <Loading />;

    // Render error states
    if (isError) return <Loading />;

    // Render the product list and pagination when data is successfully fetched
    if (isSuccess) {
        const totalPages = Math.ceil(productIds.length / itemsPerPage);

        const paginatedProductIds = productIds.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

        return (
            <div className="space-y-8">
                <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-3">
                    <ProductList productIds={paginatedProductIds} />
                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleToPrevPage={handleToPrevPage}
                    handleToNextPage={handleToNextPage}
                />
            </div>
        );
    }

    return null;
};

export default AllProducts;
