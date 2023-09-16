import { Form } from '../../../../components';
import SignupButton from './SignupButton';

const SignupForm = ({ className, fields, register, errors, handleSubmit, toSubmit, ...props }) => {
    const [firstName, lastName, email, password, confirmPassword] = fields;

    const { name: firstNameName, ...firstNameInput } = firstName.input;
    const { name: lastNameName, ...lastNameInput } = lastName.input;
    const { name: emailName, ...emailInput } = email.input;
    const { name: passwordName, ...passwordInput } = password.input;
    const { name: confirmPasswordName, ...confirmPasswordInput } = confirmPassword.input;

    return (
        <>
            <Form className={`space-y-7 ${className}`} onSubmit={handleSubmit(toSubmit)} {...props}>
                <Form.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative">
                        <Form.Label {...firstName.label} />
                        <Form.Input {...register(firstNameName)} {...firstNameInput} />
                        {errors?.[firstNameName] && (
                            <Form.Error {...firstName.error}>
                                {errors[firstNameName]?.message}
                            </Form.Error>
                        )}
                    </div>

                    <div className="relative">
                        <Form.Label {...lastName.label} />
                        <Form.Input {...register(lastNameName)} {...lastNameInput} />
                        {errors[lastNameName] && (
                            <Form.Error {...lastName.error}>
                                {errors[lastNameName]?.message}
                            </Form.Error>
                        )}
                    </div>
                </Form.Group>

                <Form.Group className="relative">
                    <Form.Label {...email.label} />
                    <Form.Input {...register(emailName)} {...emailInput} />
                    {errors?.[emailName] && (
                        <Form.Error {...email.error}>{errors[emailName]?.message}</Form.Error>
                    )}
                </Form.Group>

                <Form.Group className="relative">
                    <Form.Label {...password.label} />
                    <Form.Input {...register(passwordName)} {...passwordInput} />
                    {errors?.[passwordName] && (
                        <Form.Error {...password.error}>{errors[passwordName]?.message}</Form.Error>
                    )}
                </Form.Group>

                <Form.Group className="relative">
                    <Form.Label {...confirmPassword.label} />
                    <Form.Input {...register(confirmPasswordName)} {...confirmPasswordInput} />
                    {errors?.[confirmPasswordName] && (
                        <Form.Error {...confirmPassword.error}>
                            {errors[confirmPasswordName]?.message}
                        </Form.Error>
                    )}
                </Form.Group>

                <Form.Group>
                    <SignupButton>Create Account</SignupButton>
                </Form.Group>
            </Form>
        </>
    );
};

export default SignupForm;
