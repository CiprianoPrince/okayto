import { useSelector } from 'react-redux';
import { useGetSizesQuery } from '../../products/slices';
import { selectCurrentVariant, selectCurrentVariantSet } from '../slices';
import { memo } from 'react';

const SizeSelector = memo(({ handleChangeSize }) => {
    const { sizes } = useGetSizesQuery('getSizes', {
        selectFromResult: ({ data }) => ({
            sizes: data?.entities ? Object.values(data.entities) : undefined,
        }),
    });

    const currentVariantSet = useSelector(selectCurrentVariantSet);
    const currentVariant = useSelector(selectCurrentVariant);

    return (
        <div className="space-y-4 p-4">
            <span className="text-xl font-medium">Size</span>

            <div className="space-x-2">
                {sizes &&
                    sizes.map((size) => {
                        if (!currentVariantSet.sizes.includes(size.sizeId)) return;
                        const isSelected = currentVariant?.size?.sizeId === size.sizeId;

                        return (
                            <div
                                className={`group inline-flex aspect-square w-16 cursor-pointer items-center justify-center rounded-full border text-center align-middle duration-150  ${
                                    isSelected ? 'bg-accent-500' : 'hover:bg-accent-500'
                                }`}
                                key={size.sizeId}
                                onClick={handleChangeSize(size.sizeId)}
                            >
                                <div
                                    className={`font-palanquin text-4xl font-bold duration-150  ${
                                        isSelected
                                            ? 'text-primary-50'
                                            : 'text-accent-500 group-hover:text-primary-50 '
                                    }`}
                                >
                                    {size.name}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
});

SizeSelector.displayName = 'SizeSelector';

export default SizeSelector;
