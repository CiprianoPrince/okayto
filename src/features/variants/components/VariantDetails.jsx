import { memo, useState } from 'react';

import { useProductsData } from '../../products/hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentVariant,
    selectCurrentVariantSet,
    setCurrentSize,
    setCurrentVariantSet,
} from '../slices';

import ProductDetails from './ProductDetails';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import AddToCartButton from './AddToCartButton';
import { Loading } from '../../../components';
import useQuantityController from '../../variants/hooks/useQuantityController';
import jwtDecode from 'jwt-decode';
import { selectAccessToken } from '../../authentication/slices';
import { useForm } from 'react-hook-form';
import { useAddCartMutation } from '../../cart/slices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuantityControl from './QuantityControl';
const VariantDetails = memo(({ productId }) => {
    const [isloading, setIsloading] = useState(false);

    const currentVariantSet = useSelector(selectCurrentVariantSet);
    const currentVariant = useSelector(selectCurrentVariant);
    const accessToken = useSelector(selectAccessToken);
    const dispatch = useDispatch();
    const [addCart] = useAddCartMutation();

    const handleChangeSize = (size) => {
        return (e) => {
            e.preventDefault();
            dispatch(setCurrentSize(size));
        };
    };

    const handleSetVariantSet = (variantSet) => {
        return (e) => {
            e.preventDefault();
            dispatch(setCurrentVariantSet(variantSet));
        };
    };

    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            quantity: 1,
        },
    });

    const quantity = watch('quantity', 1);
    const quantityControllers = useQuantityController(currentVariant, quantity, setValue);

    const setMaxQuantity = () => {
        setValue(
            'quantity',
            Math.min(quantity, currentVariant ? currentVariant?.inventory?.quantityInStock : 1)
        );
    };

    const onSubmit = async (cartData) => {
        setIsloading(true);
        if (!cartData || !(cartData.length !== 0)) return;

        if (!accessToken) return;

        const { userId } = jwtDecode(accessToken);

        try {
            const addCartResult = await addCart({
                userId,
                cartData: {
                    variantId: currentVariant.variantId,
                    quantity: cartData.quantity,
                },
            }).unwrap();

            if (addCartResult && addCartResult?.status === 201) {
                return toast.success('Item added to cart!', {
                    className:
                        'bg-primary-900 text-xl text-secondary-950/70 m-3 lg:mx-0 rounded-lg',
                    progressClassName: 'bg-accent-500',
                    autoClose: 1500,
                    toastId: 'message',
                });
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to add item!', {
                className: 'bg-primary-900 text-xl text-secondary-950/70 m-3 lg:mx-0 rounded-lg',
                progressClassName: 'bg-accent-500',
                autoClose: 1500,
                toastId: 'message',
            });
        }
    };

    toast.onChange((event) => {
        if (event.status === 'added') {
            setIsloading(true);
        } else {
            setIsloading(false);
        }
    });

    return currentVariantSet ? (
        <>
            <form className="space-y-4 divide-y" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <ProductDetails productId={productId} />
                </div>

                <div className="flex-1 flex-row">
                    <SizeSelector handleChangeSize={handleChangeSize} />
                </div>

                <div className="flex-1 flex-row">
                    <ColorSelector handleSetVariantSet={handleSetVariantSet} />
                </div>

                <div className="flex flex-row items-center justify-start p-4">
                    <QuantityControl
                        register={register}
                        setMaxQuantity={setMaxQuantity}
                        quantityControllers={quantityControllers}
                    />

                    <AddToCartButton isloading={isloading} />
                </div>
            </form>
            <ToastContainer limit={1} />
        </>
    ) : (
        <Loading />
    );
});

VariantDetails.displayName = 'VariantDetails';

export default VariantDetails;
