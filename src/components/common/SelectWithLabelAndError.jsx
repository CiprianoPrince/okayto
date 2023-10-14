import { forwardRef } from 'react';
import SelectWithLabel from './SelectWithLabel';
import { twMerge } from 'tailwind-merge';

const SelectWithLabelAndErrorForwardRef = (
    { children, wrapperClassName, errorClassName, error, ...props },
    ref
) => {
    return (
        <div className={twMerge('relative', wrapperClassName)}>
            <SelectWithLabel {...props} ref={ref}>
                {children}
            </SelectWithLabel>
            {error && (
                <span
                    className={twMerge(
                        'absolute bottom-0 left-1 translate-y-full text-xs text-rose-500',
                        errorClassName
                    )}
                >
                    {error}
                </span>
            )}
        </div>
    );
};

const SelectWithLabelAndError = forwardRef(SelectWithLabelAndErrorForwardRef);
SelectWithLabelAndError.displayName = 'SelectWithLabelAndError';

export default SelectWithLabelAndError;
