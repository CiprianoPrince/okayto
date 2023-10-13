import { twMerge } from 'tailwind-merge';

const InputWithLabel = ({
    children,
    labelClassName,
    className,
    id,
    name,
    type = 'text',
    required,
    ...props
}) => {
    return (
        <>
            <label
                className={twMerge('form-label | mb-2 block', labelClassName)}
                htmlFor={id ?? name}
            >
                <span
                    className={
                        required
                            ? ' relative before:absolute before:right-0 before:top-0 before:translate-x-full before:text-rose-500 before:content-["*"]'
                            : ''
                    }
                >
                    {children}
                </span>
            </label>
            <input
                className={twMerge('form-control | px-3 py-2', className)}
                type={type}
                id={id ?? name}
                name={name}
                {...props}
            />
        </>
    );
};

export default InputWithLabel;
