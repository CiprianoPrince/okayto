import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logOut } from '../../slices';
import { useSignoutMutation } from '../../slices/api';

import { Navigate } from 'react-router-dom';

const Signout = () => {
    const [signout] = useSignoutMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        const signoutAndDispatch = async () => {
            try {
                await signout().unwrap();
                dispatch(logOut());
            } catch (error) {
                console.error(error);
            }
        };

        signoutAndDispatch();
    }, [signout, dispatch]);

    return <Navigate to="/" replace />;
};

export default Signout;
