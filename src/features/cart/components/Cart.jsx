import { useDecodedToken } from '../../../hooks';
import CartHeader from './CartHeader';
import CartList from './CartList';
import CartListHeader from './CartListHeader';
import CartSummary from './CartSummary';

const Cart = () => {
    const decodedToken = useDecodedToken();
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="basis-8/12 divide-y px-2 py-4 lg:px-4 lg:py-6 2xl:basis-9/12">
                <CartHeader />

                <CartListHeader />

                <CartList userId={decodedToken?.userId} />
            </div>

            <div className="basis-4/12 rounded-lg p-8 font-medium shadow-xl ring-1 ring-secondary-500/5 lg:self-start 2xl:basis-3/12">
                <CartSummary />
            </div>
        </div>
    );
};

export default Cart;
