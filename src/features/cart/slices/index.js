import cartSlice from './cartSlice';

export const {
    useGetCartsQuery,
    useGetCartByIdQuery,
    useAddCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = cartSlice;
