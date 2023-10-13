import { twMerge } from 'tailwind-merge';

const CalculationVariableAndValue = ({
    children,
    className,
    variableClassName,
    valueClassName,
    value,
}) => {
    return (
        <div className={twMerge('flex flex-row justify-between', className)}>
            <span className={twMerge('text-secondary-400', variableClassName)}>{children}</span>
            <span className={twMerge('text-secondary-600', valueClassName)}>&#8369;{value}</span>
        </div>
    );
};

export default CalculationVariableAndValue;
