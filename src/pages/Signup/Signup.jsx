import { Signup as SignupForm } from '../../features/authentication';
import { AuthCard as Card } from '../../components';

const Signup = () => {
    return (
        <>
            <main className="my-auto">
                <section className="container mx-auto grid w-full place-items-center p-6">
                    <Card>
                        <Card.Header>
                            <Card.Title className="text-center">Account Sign Up</Card.Title>
                            <Card.Text className="block text-center">
                                Already have an account? <Card.Link to="/signin">Log in.</Card.Link>
                            </Card.Text>
                        </Card.Header>

                        <Card.Body>
                            <SignupForm />
                        </Card.Body>

                        <Card.Footer className="block whitespace-pre-line p-6 text-center">
                            <Card.Text>
                                By clicking Create Account, you are agreeing to our{' '}
                                <Card.Link to="terms-and-condition">Terms & Conditions</Card.Link>{' '}
                                and <Card.Link to="privacy-policy">Privacy Policy</Card.Link>, and
                                to receive our promotional emails (opt out any time).
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                </section>
            </main>
        </>
    );
};

export default Signup;
