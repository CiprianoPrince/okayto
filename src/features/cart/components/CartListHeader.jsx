import { CheckIcon } from '@heroicons/react/24/outline';

const CartListHeader = () => {
    return (
        <div className="hidden items-center md:flex">
            <div className="relative basis-1/12 px-3 py-2 text-center">
                <input
                    className="peer mb-1 h-4 w-4 appearance-none rounded-md bg-accent-50 align-middle ring-2 ring-accent-300 checked:bg-transparent hover:ring-accent-500"
                    type="checkbox"
                />
                <CheckIcon className="absolute left-1/2 top-1/2 -z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 stroke-[5px] text-accent-400 peer-checked:block" />
            </div>

            <div className="basis-6/12 px-3 py-2 text-start">
                <span className="font-semibold uppercase text-secondary-500/80">Product</span>
            </div>

            <div className="basis-3/12 px-3 py-2 text-center">
                <span className="font-semibold uppercase text-secondary-500/80">Quantity</span>
            </div>

            <div className="basis-2/12 px-3 py-2 text-center">
                <span className="font-semibold uppercase text-secondary-500/80">Price</span>
            </div>
        </div>
    );
};

export default CartListHeader;
