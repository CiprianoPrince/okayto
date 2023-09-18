import { Route, Routes } from 'react-router-dom';
import { AuthLayout, ShopLayout } from './layout';
import { Signin, Signup, Signout, Home } from './pages';

function App() {
    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signout" element={<Signout />} />
                </Route>

                <Route path="/" element={<ShopLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
