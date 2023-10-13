import { Link } from 'react-router-dom';

const CartSummary = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-row justify-between">
                <span className="text-secondary-400">Subtotal</span>
                <span className="text-secondary-600">&#8369;0</span>
            </div>

            <div className="flex flex-row justify-between">
                <span className="text-secondary-400">Discount</span>
                <span className="text-secondary-600">&#8369;0</span>
            </div>

            <hr className="my-8 h-px rounded-xl border-0 bg-secondary-900/30" />

            <div className="flex flex-row justify-between">
                <span className="text-secondary-500">Grand Total</span>
                <span className="text-secondary-600">&#8369;0</span>
            </div>

            <div className="[ xs:flex-col ] flex flex-col gap-4 sm:flex-row-reverse lg:flex-col">
                <Link
                    className="button | w-full flex-1 bg-secondary-950 text-center text-lg font-bold hover:bg-secondary-800 focus:bg-secondary-700 active:bg-secondary-700"
                    to="/checkout"
                >
                    Checkout now
                </Link>

                <Link className="flex-1 text-center text-accent-500" to="/">
                    Continue shopping
                </Link>
            </div>
        </div>
    );
};

export default CartSummary;
