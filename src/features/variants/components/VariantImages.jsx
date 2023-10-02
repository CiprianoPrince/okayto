import { memo } from 'react';
import { useProductsData } from '../../products/hooks';

import { getImageStorageUrl } from '../helpers';

import CurrentImage from './CurrentImage';
import ImageSelector from './ImageSelector';
import { Loading } from '../../../components';

const VariantImages = memo(({ productId }) => {
    const { product, isProductsError, isProductsLoading, isProductsSuccess } =
        useProductsData(productId);

    if (isProductsLoading) return <Loading />;
    if (isProductsError) return <Loading />;
    if (isProductsSuccess) {
        const storageUrl = getImageStorageUrl(product.name);

        return (
            <div className="space-y-4 border">
                <CurrentImage storageUrl={storageUrl} />

                <ImageSelector storageUrl={storageUrl} />
            </div>
        );
    }

    return null;
});

VariantImages.displayName = 'VariantImages';

export default VariantImages;
