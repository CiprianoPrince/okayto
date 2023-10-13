import InputWithLabel from './InputWithLabel';
import { twMerge } from 'tailwind-merge';

const InputWithLabelAndError = ({
    children,
    wrapperClassName,
    errorClassName,
    error,
    ...props
}) => {
    return (
        <div className={twMerge('relative', wrapperClassName)}>
            <InputWithLabel {...props}>{children}</InputWithLabel>
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

export default InputWithLabelAndError;
