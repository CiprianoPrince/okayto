import { TrashIcon } from '@heroicons/react/24/outline';

const CartHeader = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <h2 className="header-2">Cart</h2>
            <button className="font-medium text-secondary-600">
                <TrashIcon className="mb-1 inline h-4 w-4" />
                Remove
            </button>
        </div>
    );
};

export default CartHeader;
