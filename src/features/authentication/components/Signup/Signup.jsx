import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// form hooks
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// components
import SignupForm from './SignupForm';

// constants
import { signupConstant } from '../../constants';

// redux
import { useSigninMutation, useSignupMutation } from '../../redux/authenticationApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/authenticationSlice';

const Signup = ({ className, ...props }) => {
    const { schema, fields } = signupConstant;

    const { register, handleSubmit, formState, setFocus } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const [signup, { isLoading }] = useSignupMutation();
    const [signin] = useSigninMutation();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    console.log(from);

    const toSubmit = async (data) => {
        try {
            const signupResult = await signup(data).unwrap();
            if (!(signupResult?.status === 201)) return;

            const signinResult = await signin(data).unwrap();

            if (!signinResult?.accessToken) return;
            dispatch(setCredentials(signinResult));
            navigate(from, { replace: from === '/' ? false : true });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setFocus(fields[0].input.name);
    }, [setFocus, fields]);

    return (
        <SignupForm
            className={className}
            fields={fields}
            errors={errors}
            isLoading={isLoading}
            register={register}
            handleSubmit={handleSubmit}
            toSubmit={toSubmit}
            {...props}
        />
    );
};

export default Signup;
