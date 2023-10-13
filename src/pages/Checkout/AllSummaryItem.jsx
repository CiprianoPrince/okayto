import { Loading } from '../../components';
import { useGetCartsQuery } from '../../features/cart/slices/api';
import { useDecodedToken } from '../../hooks';
import SummaryItem from './SummaryItems';

const AllSummaryItem = () => {
    const decodedToken = useDecodedToken();
    const { cartIds, isCartsError, isCartsLoading, isCartsFetching, isCartsSuccess } =
        useGetCartsQuery(
            { userId: decodedToken?.userId },
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

    return (
        <>
            {isCartsError && <Loading />}
            {(isCartsLoading || isCartsFetching) && <Loading />}
            {isCartsSuccess &&
                cartIds.map((id) => <SummaryItem key={id} userId={decodedToken.userId} id={id} />)}
        </>
    );
};

export default AllSummaryItem;
