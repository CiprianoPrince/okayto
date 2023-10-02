import productSlice from './productSlice';
import categorySlice from './categorySlice';
import sizeSlice from './sizeSlice';

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productSlice;

export const {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    useAddNewCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categorySlice;

export const { useGetSizesQuery } = sizeSlice;
