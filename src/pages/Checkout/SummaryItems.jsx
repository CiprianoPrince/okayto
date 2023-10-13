import { Loading } from '../../components';
import { useGetCartsQuery } from '../../features/cart/slices/api';
import SummaryItem from './SummaryItem';

const SummaryItems = ({ userId, id }) => {
    const { cart, isCartError, isCartLoading, isCartFetching, isCartSuccess } = useGetCartsQuery(
        { userId },
        {
            selectFromResult: ({ data, isError, isLoading, isFetching, isSuccess }) => ({
                cart: data?.entities[id],
                isCartError: isError,
                isCartLoading: isLoading,
                isCartFetching: isFetching,
                isCartSuccess: isSuccess,
            }),
        }
    );
    return (
        <>
            {isCartError && <Loading />}
            {(isCartLoading || isCartFetching) && <Loading />}
            {isCartSuccess && <SummaryItem key={cart.cartId} {...cart} />}
        </>
    );
};

export default SummaryItems;
