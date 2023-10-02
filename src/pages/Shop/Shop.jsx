import { useSearchParams } from 'react-router-dom';

import { Products } from '../../features/products';
import { ProductVariants } from '../../features/variants/components';

const Shop = () => {
    const [params] = useSearchParams();
    const productSlug = params.get('product');
    return (
        <main className="grow basis-0">
            <section className="h-full">
                <div className="container mx-auto h-full px-6 py-6">
                    {productSlug ? <ProductVariants productSlug={productSlug} /> : <Products />}
                </div>
            </section>
        </main>
    );
};

export default Shop;
