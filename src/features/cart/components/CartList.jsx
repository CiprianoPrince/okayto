import { useGetCartsQuery } from '../slices/api';

import CartListItem from './CartListItem';
import { Loading } from '../../../components';
const CartList = ({ userId }) => {
    const { cartIds, isCartsError, isCartsLoading, isCartsFetching, isCartsSuccess } =
        useGetCartsQuery(
            { userId },
            {
                selectFromResult: ({ data, isError, isLoading, isFetching, isSuccess }) => ({
                    cartIds: data?.ids,
                    isCartsError: isError,
                    isCartsLoading: isLoading,
                    isCartsFetching: isFetching,
                    isCartsSuccess: isSuccess,
                }),
            }
        );

    if (isCartsError) return <Loading />;

    if (isCartsLoading || isCartsFetching) return <Loading />;

    if (isCartsSuccess) {
        if (!cartIds.length) return <h1>Cart is currently empty</h1>;
        return cartIds.map((cartId) => (
            <CartListItem key={cartId} userId={userId} cartId={cartId} />
        ));
    }
    return null;
};

export default CartList;
