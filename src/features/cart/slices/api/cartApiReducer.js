export const getCartsQuery = {
    query: ({ userId }) => `/users/${userId}/carts`,
    transformResponse: (cartsAdapter, CartInitialState) => (response) =>
        cartsAdapter.setAll(CartInitialState, response.data),
    providesTags: (result) => [
        { type: 'Cart', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'Cart', id })),
    ],
};
