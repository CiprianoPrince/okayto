import FormInput from './FormInput';
import FormLabel from './FormLabel';
import FormError from './FormError';
import FormGroup from './FormGroup';

const Form = ({ children, className, ...props }) => {
    return (
        <>
            <form className={`${className ?? ''}`} {...props}>
                {children}
            </form>
        </>
    );
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.Error = FormError;

export default Form;
