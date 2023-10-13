import { Route, Routes } from 'react-router-dom';
import { AuthLayout, ShopLayout } from './layout';
import {
    Signin,
    Signup,
    Signout,
    Home,
    Shop,
    MostWanted,
    NewArrival,
    Cart,
    Checkout,
} from './pages';

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
                    <Route path="shop" element={<Shop />} />
                    <Route path="most-wanted" element={<MostWanted />} />
                    <Route path="new-arrival" element={<NewArrival />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
