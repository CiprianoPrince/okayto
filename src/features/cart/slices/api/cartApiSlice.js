import { createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../../../app/api/apiSlice';
import { getCartsQuery } from './cartApiReducer';

// Carts Entity Adapter
const cartsAdapter = createEntityAdapter({
    selectId: (cart) => cart.cartId,
    sortComparer: (a, b) => a.cartId - b.cartId,
});

const CartInitialState = cartsAdapter.getInitialState();

export const extendedCartsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCarts: builder.query({
            query: getCartsQuery.query,
            transformResponse: getCartsQuery.transformResponse(cartsAdapter, CartInitialState),
            providesTags: getCartsQuery.providesTags,
        }),
        getCartById: builder.query({
            query: ({ userId, cartId }) => `/users/${userId}/carts/${cartId}`,
            transformResponse: (response) => response.data,
            providesTags: (result) => [{ type: 'Cart', id: result.cartId }],
        }),
        addCart: builder.mutation({
            query: ({ userId, cartData }) => ({
                url: `/users/${userId}/carts`,
                method: 'POST',
                body: cartData,
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        updateCart: builder.mutation({
            query: (cart) => ({
                url: `/api/carts/${cart.cartId}`,
                method: 'PUT',
                body: cart,
            }),
            invalidatesTags: ({ cartId }) => [{ type: 'Cart', id: cartId }],
        }),
        deleteCart: builder.mutation({
            query: (cartId) => ({
                url: `/api/carts/${cartId}`,
                method: 'DELETE',
                body: { cartId },
            }),
            invalidatesTags: (cartId) => [{ type: 'Cart', id: cartId }],
        }),
    }),
});

export default extendedCartsApiSlice;
