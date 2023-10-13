import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { selectAccessToken } from '../features/authentication/slices';

const useDecodedToken = () => {
    const token = useSelector(selectAccessToken);

    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
};

export default useDecodedToken;
