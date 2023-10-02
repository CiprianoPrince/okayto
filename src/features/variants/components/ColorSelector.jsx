import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentVariantSet, selectVariantSets } from '../slices';

const ColorSelector = memo(({ handleSetVariantSet }) => {
    const variantSets = useSelector(selectVariantSets);
    const currentVariantSet = useSelector(selectCurrentVariantSet);

    return (
        <>
            {variantSets && (
                <div className="space-y-4 p-4">
                    <span className="text-xl font-medium">Color</span>

                    <div className="space-x-2">
                        {variantSets.map((variantSet) => {
                            const {
                                color: { colorId, name, code },
                            } = variantSet;

                            const isSelected = currentVariantSet?.color?.colorId === colorId;
                            return (
                                <div
                                    className={`inline-block aspect-square w-16 cursor-pointer rounded-full duration-150 ${
                                        isSelected
                                            ? 'ring-4 ring-inset ring-accent-500'
                                            : 'hover:ring-4 hover:ring-inset hover:ring-accent-500'
                                    }`}
                                    key={variantSet.color.colorId}
                                    style={{ backgroundColor: `${code}` }}
                                    onClick={handleSetVariantSet(variantSet)}
                                    title={name}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
});

ColorSelector.displayName = 'ColorSelector';

export default ColorSelector;
