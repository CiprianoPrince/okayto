import { Loading } from '../../../components';
import { useProductsData } from '../../products/hooks';

const ProductDetails = ({ productId }) => {
    const { product, isProductsError, isProductsLoading, isProductsSuccess } =
        useProductsData(productId);
    if (isProductsLoading) return <Loading />;
    if (isProductsError) return <Loading />;
    if (isProductsSuccess) {
        return (
            <div className="p-4">
                <h1 className="header-3 line-clamp-1 font-palanquin font-bold">{product.name}</h1>
                <span className="font-montserrat text-xl font-bold text-secondary-600">
                    &#8369;<span className="text-3xl">{product.price}</span>
                </span>
            </div>
        );
    }
    return null;
};

export default ProductDetails;
