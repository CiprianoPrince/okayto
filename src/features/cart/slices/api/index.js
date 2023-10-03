import cartApiSlice from './cartApiSlice';

export const {
    useGetCartsQuery,
    useGetCartByIdQuery,
    useAddCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = cartApiSlice;
