import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRefreshTokenMutation } from '../../features/authentication/slices/api';

import { selectAccessToken, setCredentials } from '../../features/authentication/slices';

import { Outlet } from 'react-router-dom';

const PersistAuth = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [refresh] = useRefreshTokenMutation();

    const currentToken = useSelector(selectAccessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                const response = await refresh().unwrap();
                dispatch(setCredentials(response));
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !currentToken ? verifyRefreshToken() : setIsLoading(false);

        return () => (isMounted = false);
    }, []);

    return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistAuth;
