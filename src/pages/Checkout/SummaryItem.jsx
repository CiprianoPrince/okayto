import { Loading } from '../../components';
import { useGetVariantByProductIdByIdQuery } from '../../features/variants/slices';

const SummaryItem = ({ cartId, quantity, variantId, productId }) => {
    const { variant, isVariantError, isVariantLoading, isVariantFetching, isVariantSuccess } =
        useGetVariantByProductIdByIdQuery(
            { productId, variantId },
            {
                selectFromResult: ({ data, isError, isLoading, isFetching, isSuccess }) => ({
                    variant: data?.entities[variantId],
                    isVariantError: isError,
                    isVariantLoading: isLoading,
                    isVariantFetching: isFetching,
                    isVariantSuccess: isSuccess,
                }),
            }
        );
    return (
        <>
            {isVariantError && <Loading />}
            {(isVariantLoading || isVariantFetching) && <Loading />}
            {isVariantSuccess && (
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2 md:gap-4">
                        <img
                            className="rounded-lg"
                            src={variant.image.imagePath}
                            alt={variant.image.altText}
                            width={100}
                        />
                        <div className="flex flex-col">
                            <p className="font-medium text-secondary-600">{name}</p>
                            <p className="font-medium text-secondary-600">
                                {variant.color.name} | {variant.color.name}
                            </p>
                        </div>
                    </div>

                    <span className="text-base font-medium leading-normal text-secondary-600">
                        &#8369;{variant.product.price}
                    </span>
                </div>
            )}
        </>
    );
};

export default SummaryItem;
