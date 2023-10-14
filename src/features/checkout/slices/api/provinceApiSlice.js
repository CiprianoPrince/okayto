import { createEntityAdapter } from '@reduxjs/toolkit';
import { getProvincesQuery } from './provinceApiReducer';
import { addressApiSlice } from './addressApiSlice';

// Provinces Entity Adapter
const provinceAdapter = createEntityAdapter({
    selectId: (province) => province.code,
    sortComparer: (a, b) => a.code.localeCompare(b.code),
});

const ProvinceInitialState = provinceAdapter.getInitialState();

export const extendedProvinceApiSlice = addressApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProvinces: builder.query({
            query: getProvincesQuery.query,
            transformResponse: getProvincesQuery.transformResponse(
                provinceAdapter,
                ProvinceInitialState
            ),
            providesTags: getProvincesQuery.providesTags,
        }),
    }),
});

export default extendedProvinceApiSlice;
