import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: { token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload;
            state.token = accessToken;
        },
        logOut: (state) => {
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const selectAccessToken = (state) => state.authentication.token;
