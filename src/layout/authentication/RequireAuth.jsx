// import jwtDecode from 'jwt-decode';
// import { useLocation, Navigate, Outlet } from 'react-router-dom';

// const Auth = ({ allowedRoles }) => {
//     // const { authentication } = useAuth();
//     const token = useSelector(selectAccessToken);
//     const location = useLocation();

//     return authentication?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//         <Outlet />
//     ) : authentication?.accessToken ? ( //changed from user to accessToken to persist login after refresh
//         <Navigate to="/unauthorized" state={{ from: location }} replace />
//     ) : (
//         <Navigate to="/login" state={{ from: location }} replace />
//     );
// };

// export default Auth;

import jwtDecode from 'jwt-decode';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../features/authentication/redux/authenticationSlice';

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector(selectAccessToken);
    const location = useLocation();

    // Decode the JWT token to get user details
    let decodedToken = null;
    try {
        decodedToken = jwtDecode(token);
    } catch (error) {
        console.error('Error decoding JWT:', error);
    }

    // Check for the role from the decoded token
    return allowedRoles?.includes(decodedToken.role) ? (
        <Outlet />
    ) : token ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
