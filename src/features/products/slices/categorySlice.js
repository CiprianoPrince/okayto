import { createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

// Categories Entity Adapter
const categoriesAdapter = createEntityAdapter({
    selectId: (category) => category.categoryId,
    sortComparer: (a, b) => a.categoryId - b.categoryId,
});

const initialCategoriesState = categoriesAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            transformResponse: (response) =>
                categoriesAdapter.setAll(initialCategoriesState, response.data),
            providesTags: (result) => [
                { type: 'Category', id: 'LIST' },
                ...result.ids.map((id) => ({ type: 'Category', id })),
            ],
        }),
        getCategoryById: builder.query({
            query: (categoryId) => `/api/categories/${categoryId}`,
            transformResponse: (response) => response.data,
            providesTags: (result) => [{ type: 'Category', id: result.categoryId }],
        }),
        addNewCategory: builder.mutation({
            query: (newCategory) => ({
                url: '/api/categories',
                method: 'POST',
                body: newCategory,
            }),
            invalidatesTags: [{ type: 'Category', id: 'LIST' }],
        }),
        updateCategory: builder.mutation({
            query: (category) => ({
                url: `/api/categories/${category.categoryId}`,
                method: 'PUT',
                body: category,
            }),
            invalidatesTags: ({ categoryId }) => [{ type: 'Category', id: categoryId }],
        }),
        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url: `/api/categories/${categoryId}`,
                method: 'DELETE',
                body: { categoryId },
            }),
            invalidatesTags: (categoryId) => [{ type: 'Category', id: categoryId }],
        }),
    }),
});

export default extendedApiSlice;
