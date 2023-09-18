import { Signin as SigninForm } from '../../features/authentication';
import { AuthCard as Card } from '../../components';

const Signin = () => {
    return (
        <main className="h-0 grow basis-0">
            <section className="h-full">
                <div className="container mx-auto grid h-full place-items-center p-6">
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
                </div>
            </section>
        </main>
    );
};

export default Signin;
