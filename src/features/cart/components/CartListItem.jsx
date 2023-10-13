import { CheckIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useGetVariantByProductIdByIdQuery } from '../../variants/slices';
import { useGetCartsQuery } from '../slices/api';

const CartListItem = ({ userId, cartId }) => {
    const { cartData } = useGetCartsQuery(
        { userId },
        {
            selectFromResult: ({ data, isError, isLoading, isFetching, isSuccess }) => ({
                cartData: data?.entities[cartId],
            }),
        }
    );

    const variantData = useGetVariantByProductIdByIdQuery({
        productId: cartData?.productId,
        variantId: cartData?.variantId,
    });

    return (
        <div className="grid grid-cols-12 items-center">
            <div className="relative col-span-2 px-3 py-2 text-center md:col-span-1">
                <input
                    className="peer mb-1 h-4 w-4 appearance-none rounded-md bg-accent-50 align-middle ring-2 ring-accent-300 checked:bg-transparent hover:ring-accent-500"
                    type="checkbox"
                />
                <CheckIcon className="absolute left-1/2 top-1/2 -z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 stroke-[5px] text-accent-400 peer-checked:block" />
            </div>

            <div className="col-span-10 shrink-0 px-3 py-2 text-start md:col-span-6">
                <div className="flex flex-row gap-4">
                    <img className="rounded-lg" src={''} alt="example" width={100} />
                    <div className="flex flex-col py-2">
                        <p className="font-medium text-secondary-600">Cardingan</p>
                        <p className="font-medium text-secondary-600">Green | M</p>
                    </div>
                </div>
            </div>

            <div className="col-span-8 space-y-4 px-3 py-2 text-center md:col-span-3">
                <div className="input-group |group justify-center">
                    <span
                        className="input-group-text | group bg-transparent hover:bg-accent-500"
                        tabIndex="0"
                    >
                        <MinusIcon
                            className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                            role="button"
                        />
                    </span>
                    <input
                        className="form-control | peer w-full max-w-[5rem] text-center focus:ring-accent-500"
                        type="number"
                        value={1}
                    />

                    <span
                        className="input-group-text | group bg-transparent hover:bg-accent-500"
                        tabIndex="0"
                    >
                        <PlusIcon
                            className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                            role="button"
                        />
                    </span>
                </div>
                <button className="font-medium text-secondary-600">
                    <TrashIcon className="mb-1 inline h-4 w-4" />
                    Remove
                </button>
            </div>

            <div className="col-span-4 px-3 py-2 text-center md:col-span-2">
                <span className="text-xl font-medium leading-normal text-secondary-600">
                    &#8369;1,000.00
                </span>
            </div>
        </div>
    );
};

export default CartListItem;
