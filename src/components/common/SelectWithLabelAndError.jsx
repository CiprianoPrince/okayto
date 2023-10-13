import SelectWithLabel from './SelectWithLabel';
import { twMerge } from 'tailwind-merge';

const SelectWithLabelAndError = ({
    children,
    wrapperClassName,
    errorClassName,
    error,
    ...props
}) => {
    return (
        <div className={twMerge('relative', wrapperClassName)}>
            <SelectWithLabel {...props}>{children}</SelectWithLabel>
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

export default SelectWithLabelAndError;
