import authenticationSlice from './authenticationSlice';

export { selectAccessToken } from './authenticationSelectors';

export const { setCredentials, logOut } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
