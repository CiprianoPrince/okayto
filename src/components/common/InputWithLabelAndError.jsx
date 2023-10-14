import { forwardRef } from 'react';
import InputWithLabel from './InputWithLabel';
import { twMerge } from 'tailwind-merge';

const InputWithLabelAndErrorForwardRef = (
    { children, wrapperClassName, errorClassName, error, ...props },
    ref
) => {
    return (
        <div className={twMerge('relative', wrapperClassName)}>
            <InputWithLabel {...props} ref={ref}>
                {children}
            </InputWithLabel>
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

const InputWithLabelAndError = forwardRef(InputWithLabelAndErrorForwardRef);
InputWithLabelAndError.displayName = 'InputWithLabelAndError';

export default InputWithLabelAndError;
