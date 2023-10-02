import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../../features/authentication/slices';

// Default base query with token handling
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().authentication.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

// Handle the refresh logic
export const handleRefresh = async (api, extraOptions) => {
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data?.accessToken) {
        // store the new token
        api.dispatch(setCredentials(refreshResult.data.accessToken));
        return true; // Indicates successful refresh
    } else {
        api.dispatch(logOut());
        return false; // Indicates failed refresh
    }
};

// Base query with reauthentication logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // If a 403 error occurs, try refreshing the token
    if (result?.error?.originalStatus === 403) {
        const refreshed = await handleRefresh(api, extraOptions);
        // If token was refreshed successfully, retry the original query
        if (refreshed) {
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

// Create the API slice
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
