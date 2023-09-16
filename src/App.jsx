import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layout';
import { Signin, Signup } from './pages';

function App() {
    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
