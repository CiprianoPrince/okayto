import { useGetProductsQuery } from '../../products/slices';

import { getProductBySlug } from '../../products/helpers';

import AllVariants from './AllVariants';
import { Loading } from '../../../components';

const ProductVariants = ({ productSlug }) => {
    const { product, isProductsError, isProductsLoading, isProductsSuccess } = useGetProductsQuery(
        'getProducts',
        {
            selectFromResult: ({ data, isError, isLoading, isSuccess }) => ({
                product: data?.entities ? getProductBySlug(data?.entities, productSlug) : undefined,
                isProductsError: isError,
                isProductsLoading: isLoading,
                isProductsSuccess: isSuccess,
            }),
        }
    );

    if (isProductsLoading) return <Loading />;

    if (isProductsError) return <Loading />;

    if (isProductsSuccess) {
        return <AllVariants productId={product?.productId} />;
    }

    return null;
};

export default ProductVariants;
