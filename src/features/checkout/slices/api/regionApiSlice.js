import { createEntityAdapter } from '@reduxjs/toolkit';
import { getRegionsQuery } from './regionApiReducer';
import { addressApiSlice } from './addressApiSlice';

// Regions Entity Adapter
const regionAdapter = createEntityAdapter({
    selectId: (region) => region.code,
    sortComparer: (a, b) => a.code.localeCompare(b.code),
});

const RegionInitialState = regionAdapter.getInitialState();

export const extendedRegionApiSlice = addressApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRegions: builder.query({
            query: getRegionsQuery.query,
            transformResponse: getRegionsQuery.transformResponse(regionAdapter, RegionInitialState),
            providesTags: getRegionsQuery.providesTags,
        }),
    }),
});

export default extendedRegionApiSlice;
