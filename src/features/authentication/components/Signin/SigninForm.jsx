import { Form } from '../../../../components';
import SigninButton from './SigninButton';
const SigninForm = ({ className, fields, register, errors, handleSubmit, toSubmit, ...props }) => {
    const [email, password] = fields;
    const { name: emailName, ...emailInput } = email.input;
    const { name: passwordName, ...passwordInput } = password.input;

    return (
        <>
            <Form className={`space-y-8 ${className}`} onSubmit={handleSubmit(toSubmit)} {...props}>
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

                <Form.Group>
                    <SigninButton>Log in</SigninButton>
                </Form.Group>
            </Form>
        </>
    );
};

export default SigninForm;
