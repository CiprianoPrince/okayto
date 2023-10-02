import variantApiSlice from './variantApiSlice';
import variantSlice from './variantSlice';

export const { useGetVariantsByProductIdQuery, useAddVariantToProductMutation } = variantApiSlice;

export const {
    setVariants,
    setCurrentSize,
    setCurrentVariant,
    setCurrentVariantSet,
    setVariantSets,
} = variantSlice.actions;

export const variantReducer = variantSlice.reducer;

export const selectVariants = (state) => state.variant.variants;
export const selectCurrentSize = (state) => state.variant.currentSize;
export const selectCurrentVariant = (state) => state.variant.currentVariant;
export const selectCurrentVariantSet = (state) => state.variant.currentVariantSet;
export const selectVariantSets = (state) => state.variant.variantSets;
