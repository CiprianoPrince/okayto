import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const QuantityControl = ({ register, setMaxQuantity, quantityControllers }) => {
    const { handleDecrement, handleIncrement } = quantityControllers;
    return (
        <div className="input-group |group flex max-w-[10rem] justify-center">
            <span
                className="input-group-text | group bg-transparent hover:bg-accent-500"
                tabIndex="0"
            >
                <MinusIcon
                    className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                    role="button"
                    onClick={handleDecrement}
                />
            </span>

            <input
                className="form-control | peer w-full max-w-[3.5rem] text-center focus:ring-accent-500"
                type="number"
                {...register('quantity')}
                onBlur={setMaxQuantity}
            />

            <span
                className="input-group-text | group bg-transparent hover:bg-accent-500"
                tabIndex="0"
            >
                <PlusIcon
                    className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                    role="button"
                    onClick={handleIncrement}
                />
            </span>
        </div>
    );
};

export default QuantityControl;
