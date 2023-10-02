import { useEffect } from 'react';

// react router
import { useLocation, useNavigate } from 'react-router-dom';

// form hooks
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// constant
import { signinConstant } from '../../constants';

// components
import SigninForm from './SigninForm';

// redux
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slices';
import { useSigninMutation } from "../../slices/api";
const Signin = ({ className, ...props }) => {
    const { schema, fields } = signinConstant;

    const { register, handleSubmit, formState, setFocus } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const [signin, { isLoading }] = useSigninMutation();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const toSubmit = async (data, event) => {
        try {
            const result = await signin(data).unwrap();

            if (result.status !== 200) return;

            dispatch(setCredentials(result.data));
            event.target.reset();
            navigate(from, { replace: from === '/' ? false : true });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setFocus(fields[0].input.name);
    }, [setFocus, fields]);

    return (
        <>
            <SigninForm
                className={className}
                fields={fields}
                errors={errors}
                isLoading={isLoading}
                register={register}
                handleSubmit={handleSubmit}
                toSubmit={toSubmit}
                {...props}
            />
        </>
    );
};

export default Signin;
