import { getVariantsByImageAndColor } from '../helpers';
import { useGetVariantsByProductIdQuery } from '../slices';

const useVariantData = (productId) => {
    const {
        variants,
        variantSets,
        isVariantsError,
        isVariantsLoading,
        isVariantsSuccess,
    } = useGetVariantsByProductIdQuery(productId, {
        selectFromResult: ({ data, isError, isLoading, isSuccess }) => ({
            variants: data?.entities ? Object.values(data?.entities) : [],
            variantSets: data?.entities
                ? getVariantsByImageAndColor(Object.values(data?.entities))
                : [],
            isVariantsError: isError,
            isVariantsLoading: isLoading,
            isVariantsSuccess: isSuccess,
        }),
    });
    return {
        variants,
        variantSets,
        isVariantsError,
        isVariantsLoading,
        isVariantsSuccess,
    };
};

export default useVariantData;
