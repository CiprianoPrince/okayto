import { Signin as SigninForm } from '../../features/authentication';
import { AuthCard as Card } from '../../components';

const Signin = () => {
    return (
        <main className="my-auto">
            <section className="container mx-auto grid place-items-center p-6">
                <Card>
                    <Card.Header>
                        <Card.Title className="text-center">O-kayto Login</Card.Title>
                        <Card.Text className="block text-center">
                            New here? <Card.Link to="/signup">Create an account.</Card.Link>
                        </Card.Text>
                    </Card.Header>

                    <Card.Body>
                        <SigninForm />
                    </Card.Body>

                    <Card.Footer className="block whitespace-pre-line p-6 text-center">
                        <Card.Link to="/forgot-password">Forgot password?</Card.Link>
                    </Card.Footer>
                </Card>
            </section>
        </main>
    );
};

export default Signin;
