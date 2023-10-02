import { createSlice } from '@reduxjs/toolkit';
import { logOut, setCredentials } from './authenticationReducers';

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: { token: null },
    reducers: {
        setCredentials,
        logOut,
    },
});

export default authenticationSlice;
