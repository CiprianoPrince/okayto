import { Loading } from '../../../components';
import { useVariantData } from '../hooks';
import VariantSelector from './VariantSelector';

const AllVariants = ({ productId }) => {
    const { variants, variantSets, isVariantsError, isVariantsLoading, isVariantsSuccess } =
        useVariantData(productId);

    if (isVariantsLoading) return <Loading />;

    if (isVariantsError) return <Loading />;

    if (isVariantsSuccess) {
        return (
            <VariantSelector productId={productId} variants={variants} variantSets={variantSets} />
        );
    }

    return null;
};

export default AllVariants;
