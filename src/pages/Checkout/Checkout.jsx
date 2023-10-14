import { Link } from 'react-router-dom';
import { InputWithLabelAndError, SelectWithLabelAndError } from '../../components/common';
import { useForm } from 'react-hook-form';
import CalculationVariableAndValue from './CalculationVariableAndValue';
import AllSummaryItem from './AllSummaryItem';
import RegionsSelectField from './RegionsSelectField';
import ProvincesSelectField from './ProvincesSelectField';
import CitiesSelectField from './CitiesSelectField';

const Checkout = () => {
    const { register, handleSubmit, formState, resetField, watch, getValues } = useForm();
    const { errors } = formState;

    const region = watch('region', '');
    const province = watch('province', '');
    console.log(getValues);

    const onSubmit = (formData) => {
        console.log(formData);
    };

    // useEffect(() => {}, [region]);
    return (
        <main>
            <section className="container mx-auto px-4 py-8">
                <form className="flex flex-col lg:flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="basis-7/12 px-2 py-4 lg:px-4 lg:py-6 2xl:basis-8/12">
                        <div>
                            <h1 className="header-2">Checkout</h1>
                        </div>

                        <hr className="my-4 h-px rounded-xl border-0 bg-secondary-900/30" />

                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="header-4 | text-sm text-secondary-700">
                                    Your shipping information
                                </h2>
                            </div>

                            <div className="flex flex-row gap-4">
                                <InputWithLabelAndError
                                    wrapperClassName="flex-1"
                                    {...register('firstName')}
                                    placeholder="Enter your first name"
                                    error={errors.firstName?.message}
                                    required
                                >
                                    First name
                                </InputWithLabelAndError>

                                <InputWithLabelAndError
                                    wrapperClassName="flex-1"
                                    {...register('lastName')}
                                    placeholder="Enter your last name"
                                    error={errors.lastName?.message}
                                    required
                                >
                                    Last name
                                </InputWithLabelAndError>
                            </div>

                            <InputWithLabelAndError
                                {...register('email')}
                                type="email"
                                placeholder="Enter your email"
                                error={errors.email?.message}
                                required
                            >
                                Email
                            </InputWithLabelAndError>

                            <InputWithLabelAndError
                                {...register('phone')}
                                type="tel"
                                placeholder="Enter your phone"
                                error={errors.phone?.message}
                                required
                            >
                                Phone number
                            </InputWithLabelAndError>

                            <InputWithLabelAndError
                                wrapperClassName="flex-1"
                                {...register('streetAndHouseNo')}
                                placeholder="Enter your streetAndHouseNo"
                                error={errors.streetAndHouseNo?.message}
                                required
                            >
                                Street and House No.
                            </InputWithLabelAndError>

                            <div className="flex flex-row gap-4">
                                <RegionsSelectField
                                    register={register}
                                    error={errors.region?.message}
                                />

                                <ProvincesSelectField
                                    region={region}
                                    register={register}
                                    error={errors.province?.message}
                                />

                                <CitiesSelectField
                                    province={province}
                                    register={register}
                                    error={errors.city?.message}
                                />
                            </div>

                            <InputWithLabelAndError
                                {...register('postal')}
                                placeholder="Enter your postal code"
                                error={errors.postal?.message}
                                required
                            >
                                Postal Code
                            </InputWithLabelAndError>
                        </div>
                    </div>

                    <div className="basis-5/12 rounded-lg p-8 font-medium shadow-xl ring-1 ring-secondary-500/5 lg:self-start 2xl:basis-4/12">
                        <div className="flex flex-col space-y-6">
                            <AllSummaryItem />

                            <CalculationVariableAndValue value={0}>
                                Subtotal
                            </CalculationVariableAndValue>

                            <CalculationVariableAndValue value={0}>
                                Discount
                            </CalculationVariableAndValue>

                            <CalculationVariableAndValue value={0}>
                                Shipment
                            </CalculationVariableAndValue>

                            <hr className="my-8 h-px rounded-xl border-0 bg-secondary-900/30" />

                            <CalculationVariableAndValue value={0}>
                                Grand Total
                            </CalculationVariableAndValue>

                            <div className="flex flex-col gap-4 sm:flex-row-reverse lg:flex-col">
                                <button
                                    className="button | w-full flex-1 bg-secondary-950 text-center text-lg font-bold hover:bg-secondary-800 focus:bg-secondary-700 active:bg-secondary-700"
                                    to="/payment"
                                    type="submit"
                                >
                                    Continue to payment
                                </button>

                                <div className="flex-1 text-center">
                                    <p className="text-secondary-600">
                                        <Link
                                            className="text-center text-accent-500 hover:text-accent-700"
                                            to="/cart"
                                        >
                                            Back to cart
                                        </Link>{' '}
                                        or{' '}
                                        <Link
                                            className="text-center text-accent-500 hover:text-accent-700"
                                            to="/"
                                        >
                                            Continue shopping
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Checkout;
