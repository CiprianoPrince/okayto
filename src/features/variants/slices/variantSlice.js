import { createSlice } from '@reduxjs/toolkit';
import {
    setCurrentSize,
    setVariants,
    setCurrentVariant,
    setCurrentVariantSet,
    setVariantSets,
} from './variantReducers';

const variantSlice = createSlice({
    name: 'variant',
    initialState: {
        variants: null,
        currentVariant: null,
        currentSize: null,
        currentVariantSet: null,
        variantSets: null,
    },
    reducers: {
        setVariants,
        setCurrentSize,
        setCurrentVariant,
        setCurrentVariantSet,
        setVariantSets,
    },
});

export default variantSlice;
