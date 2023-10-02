// Import necessary modules from Redux Toolkit
import { createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

// Create an entity adapter for products. This provides utilities for dealing with normalized state.
// - selectId determines the primary key of each entity.
// - sortComparer is a function that determines how entities should be sorted in a list.
const productsAdapter = createEntityAdapter({
    selectId: (product) => product.productId,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

// Initialize the state using the entity adapter's getInitialState method.
const initialProductsState = productsAdapter.getInitialState();

// Extend the initial API slice with new endpoints related to products.
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoint to fetch all products.
        getProducts: builder.query({
            query: () => '/api/products',
            // Transform the server response using the entity adapter's utilities.
            transformResponse: (response) =>
                productsAdapter.setAll(initialProductsState, response.data),
            // Tags used to refetch or invalidate the data for optimized caching.
            providesTags: (result) => [
                { type: 'Product', id: 'LIST' },
                ...result.ids.map((id) => ({ type: 'Product', id })),
            ],
        }),

        // Endpoint to fetch a specific product by its ID.
        getProductById: builder.query({
            query: (productId) => `/api/products/${productId}`,
            transformResponse: (response) =>
                productsAdapter.setAll(initialProductsState, response.data),
            providesTags: (result) => [{ type: 'Product', id: result.productId }],
        }),

        // Endpoint to add a new product.
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/api/products',
                method: 'POST',
                body: newProduct,
            }),
            // Invalidate the list of products when a new one is added.
            invalidatesTags: [{ type: 'Product', id: 'LIST' }],
        }),

        // Endpoint to update a product.
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/api/products/${product.productId}`,
                method: 'PUT',
                body: product,
            }),
            invalidatesTags: ({ productId }) => [{ type: 'Product', id: productId }],
        }),

        // Endpoint to delete a product.
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/api/products/${productId}`,
                method: 'DELETE',
                body: { productId },
            }),
            invalidatesTags: (productId) => [{ type: 'Product', id: productId }],
        }),
    }),
});

// Exporting hooks that can be used in components to interact with the endpoints.
// export const {
//     useGetProductsQuery,
//     useGetProductByIdQuery,
//     useAddNewProductMutation,
//     useUpdateProductMutation,
//     useDeleteProductMutation,
// } = extendedApiSlice;

export default extendedApiSlice;
