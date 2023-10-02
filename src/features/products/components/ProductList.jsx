import ProductCard from './ProductCard';

const ProductList = ({ productIds }) => {
    return (
        <>
            {productIds.map((productId) => (
                <ProductCard key={productId} productId={productId} />
            ))}
        </>
    );
};

export default ProductList;
