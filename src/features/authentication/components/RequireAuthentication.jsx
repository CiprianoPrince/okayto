import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from './authenticationSlice';

const RequireAuthentication = () => {
    const token = useSelector(selectAccessToken);
    const location = useLocation();

    return token ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />;
};
export default RequireAuthentication;
