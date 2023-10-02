import { createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const sizesAdapter = createEntityAdapter({
    selectId: (size) => size.sizeId,
});

// Initialize the state using the entity adapter's getInitialState method.
const initialSizesState = sizesAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Size Endpoints
        getSizes: builder.query({
            query: () => `api/sizes`,
            transformResponse: (response) => sizesAdapter.setAll(initialSizesState, response.data),
            providesTags: (result) => [
                { type: 'Size', id: 'LIST' },
                ...result.ids.map((id) => ({ type: 'Size', id })),
            ],
        }),
    }),
});

export default extendedApiSlice;
