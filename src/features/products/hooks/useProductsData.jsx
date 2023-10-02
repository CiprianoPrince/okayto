import { useGetProductsQuery } from '../slices';

const useProductsData = (productId) => {
    const name = productId ? 'product' : 'products';
    const { data, isProductsError, isProductsLoading, isProductsSuccess } = useGetProductsQuery(
        'getProducts',
        {
            selectFromResult: ({ data, isError, isLoading, isSuccess }) => ({
                data: productId ? data?.entities[productId] : data?.entities,
                isProductsError: isError,
                isProductsLoading: isLoading,
                isProductsSuccess: isSuccess,
            }),
        }
    );
    return { [name]: data, isProductsError, isProductsLoading, isProductsSuccess };
};

export default useProductsData;
