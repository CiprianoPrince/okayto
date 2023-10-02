import { createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const variantsAdapter = createEntityAdapter({
    selectId: (variant) => variant.variantId,
});

// Initialize the state using the entity adapter's getInitialState method.
const initialVariantsState = variantsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Variant Endpoints
        getVariantsByProductId: builder.query({
            query: (productId) => `api/products/${productId}/variants`,
            transformResponse: (response) =>
                variantsAdapter.setAll(initialVariantsState, response.data),
            providesTags: (result) => [...result.ids.map((id) => ({ type: 'Variant', id }))],
        }),
        addVariantToProduct: builder.mutation({
            query: ({ productId, variant }) => ({
                url: `/products/${productId}/variants`,
                method: 'POST',
                body: variant,
            }),
            invalidatesTags: ({ variantId }) => [{ type: 'Variant', id: variantId }],
        }),
    }),
});

export default extendedApiSlice;
