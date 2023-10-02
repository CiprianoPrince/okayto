const findVariant = (state) => {
    const stateCopy = { ...state };
    const foundVariant = stateCopy.variants.find((variant) => {
        return (
            variant?.image?.imageId === stateCopy.currentVariantSet?.image?.imageId &&
            variant?.size?.sizeId === stateCopy.currentSize
        );
    });
    return foundVariant;
};

const getAvailableSize = (state, variantSet) => {
    if (state.currentSize) {
        if (variantSet?.sizes.includes(state.currentSize)) return state.currentSize;
    }
    return variantSet.sizes?.[0];
};

export const setVariants = (state, action) => {
    const variants = action.payload;
    state.variants = variants;
};

export const setCurrentSize = (state, action) => {
    const sizeId = action.payload;
    state.currentSize = sizeId;

    const foundVariant = findVariant(state);
    if (!foundVariant) return;
    state.currentVariant = foundVariant;
};

export const setCurrentVariant = (state, action) => {
    const variant = action.payload;
    state.currentVariant = variant;
};

export const setCurrentVariantSet = (state, action) => {
    const variantSet = action.payload;
    state.currentVariantSet = variantSet;

    const availableSize = getAvailableSize(state, variantSet);
    state.currentSize = availableSize;

    const foundVariant = findVariant(state);
    if (!foundVariant) return;
    state.currentVariant = foundVariant;
};

export const setVariantSets = (state, action) => {
    const variantSets = action.payload;

    if (variantSets && variantSets.length !== 0) {
        state.variantSets = variantSets;
        state.currentVariantSet = variantSets?.[0];

        const availableSize = getAvailableSize(state, variantSets?.[0]);
        state.currentSize = availableSize;

        const foundVariant = findVariant(state);
        if (!foundVariant) return;
        state.currentVariant = foundVariant;
    }
};
