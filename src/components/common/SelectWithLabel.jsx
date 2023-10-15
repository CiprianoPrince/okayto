import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const SelectWithLabelForwardRef = (
    {
        children,
        labelClassName,
        className,
        id,
        name,
        placeholder,
        curr,
        required,
        options,
        ...props
    },
    ref
) => {
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
                            : null
                    }
                >
                    {children}
                </span>
            </label>
            <select
                className={twMerge(
                    `form-control | px-3 py-2 ${!curr ? ' text-gray-400' : 'text-black'}`,
                    className
                )}
                id={id ?? name}
                name={name}
                ref={ref}
                {...props}
            >
                <option className="hidden" value="" selected disabled>
                    {placeholder}
                </option>
                {options &&
                    options.data &&
                    options.data.map((item) => (
                        <option
                            className="p-2 text-black"
                            key={item[options?.value]}
                            value={item[options?.value]}
                        >
                            {item[options.text]}
                        </option>
                    ))}
            </select>
        </>
    );
};

const SelectWithLabel = forwardRef(SelectWithLabelForwardRef);
SelectWithLabel.displayName = 'SelectWithLabel';

export default SelectWithLabel;
