import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVariantSets, setVariants } from '../slices';
import VariantImages from './VariantImages';
import VariantDetails from './VariantDetails';

const VariantSelector = ({ productId, variants, variantSets }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setVariants(variants));
        dispatch(setVariantSets(variantSets));
    }, []);
    return (
        <div className="grid h-full grid-cols-2 gap-8">
            <VariantImages productId={productId} />

            <VariantDetails productId={productId} />
        </div>
    );
};

export default VariantSelector;
