import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addressApiSlice = createApi({
    reducerPath: 'addressApi', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://psgc-api.wareneutron.com/api' }),
    tagTypes: ['Region', 'Province', 'City', 'Municipality', 'Barangay'],
    endpoints: (builder) => ({}),
});
