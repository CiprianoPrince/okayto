import { forwardRef } from 'react';

const FormInputComponent = ({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`w-full rounded-md px-3 py-2 text-secondary-950 caret-accent-500 ring-1 ring-inset ring-secondary-500/30 focus:outline-none focus:ring-2  focus:ring-accent-500 focus:ring-offset-0 ${className}`}
            {...props}
        />
    );
};

const FormInput = forwardRef(FormInputComponent);

export default FormInput;
