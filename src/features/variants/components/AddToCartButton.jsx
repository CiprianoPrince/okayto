import { useSelector } from 'react-redux';
import { selectCurrentVariant } from '../slices';

const AddToCartButton = ({ isloading }) => {
    const currentVariant = useSelector(selectCurrentVariant);
    return (
        <button
            className={`button ${
                isloading || !currentVariant ? 'bg-accent-300 hover:bg-accent-300' : ''
            }`}
            type="submit"
            disabled={isloading || !currentVariant ? true : false}
        >   
            Add to cart
        </button>
    );
};

export default AddToCartButton;
