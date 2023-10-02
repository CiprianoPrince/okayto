import { useRef, useEffect } from 'react';

const useQuantityController = (variant, quantity, setValue) => {
    const incrementIntervalRef = useRef(null);
    const decrementIntervalRef = useRef(null);

    const handleDecrement = () => {
        setValue('quantity', Math.max(Number(quantity) - 1, 1));
    };

    const handleIncrement = () => {
        setValue(
            'quantity',
            Math.min(Number(quantity) + 1, variant ? variant.inventory?.quantityInStock : Infinity)
        );
    };

    const handleIncrementStart = () => {
        handleIncrement();
        incrementIntervalRef.current = setInterval(handleIncrement, 100);
    };

    const handleIncrementStop = () => {
        clearInterval(incrementIntervalRef.current);
    };

    const handleDecrementStart = () => {
        handleDecrement();
        decrementIntervalRef.current = setInterval(handleDecrement, 100);
    };

    const handleDecrementStop = () => {
        clearInterval(decrementIntervalRef.current);
    };

    useEffect(() => {
        return () => {
            clearInterval(incrementIntervalRef.current);
            clearInterval(decrementIntervalRef.current);
        };
    }, []);

    return {
        handleDecrement,
        handleIncrement,
        handleIncrementStart,
        handleIncrementStop,
        handleDecrementStart,
        handleDecrementStop,
    };
};

export default useQuantityController;
