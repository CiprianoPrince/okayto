import { useLocation, useNavigate } from 'react-router-dom';

// form hooks
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// components
import SignupForm from './SignupForm';

// redux
import { useSignupMutation } from '../../redux/authenticationApiSlice';
import { signupConstant } from '../../constants';
import { useEffect } from 'react';

const Signup = ({ className, ...props }) => {
    const { schema, fields } = signupConstant;

    const { register, handleSubmit, formState, setFocus } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const [signup, { isLoading }] = useSignupMutation();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const toSubmit = async (data, event) => {
        try {
            const result = await signup(data).unwrap();
            console.log(result);
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
