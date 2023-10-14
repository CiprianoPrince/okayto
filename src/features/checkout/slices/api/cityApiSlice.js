import { createEntityAdapter } from '@reduxjs/toolkit';
import { getCitiesQuery } from './cityApiReducer';
import { addressApiSlice } from './addressApiSlice';

// Cities Entity Adapter
const cityAdapter = createEntityAdapter({
    selectId: (city) => city.code,
    sortComparer: (a, b) => a.code.localeCompare(b.code),
});

const CityInitialState = cityAdapter.getInitialState();

export const extendedCityApiSlice = addressApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCities: builder.query({
            query: getCitiesQuery.query,
            transformResponse: getCitiesQuery.transformResponse(cityAdapter, CityInitialState),
            providesTags: getCitiesQuery.providesTags,
        }),
    }),
});

export default extendedCityApiSlice;
