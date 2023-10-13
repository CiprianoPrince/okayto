import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const SelectWithLabel = ({
    children,
    labelClassName,
    className,
    id,
    name,
    placeholder,
    required,
    options = [],
    onChange,
    ...props
}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

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
                    `form-control | px-3 py-2 ${!value ? ' text-gray-400' : 'text-black'}`,
                    className
                )}
                id={id ?? name}
                name={name}
                onChange={handleChange}
                {...props}
            >
                <option className="hidden" selected disabled>
                    {placeholder}
                </option>
                {options.map(({ text, value }) => (
                    <option className="p-2 text-black" key={value} value={value}>
                        {text}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectWithLabel;
