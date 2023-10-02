import { apiSlice } from '../../../../app/api/apiSlice';

import {
    refreshTokenMutation,
    signinMutation,
    signoutMutation,
    signupMutation,
} from './authenticationApiReducers';

export const authenticationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: signinMutation,
        }),
        signup: builder.mutation({
            query: signupMutation,
        }),
        signout: builder.mutation({
            query: signoutMutation,
        }),
        refreshToken: builder.mutation({
            query: refreshTokenMutation,
        }),
    }),
});

export default authenticationApiSlice;
