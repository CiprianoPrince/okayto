import authenticationApiSlice from './authenticationApiSlice';

export const { useSigninMutation, useSignupMutation, useRefreshTokenMutation, useSignoutMutation } =
    authenticationApiSlice;
