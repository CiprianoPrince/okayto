export const getRegionsQuery = {
    query: () => `/region`,
    transformResponse: (regionsAdapter, RegionInitialState) => (response) =>
        regionsAdapter.setAll(RegionInitialState, response.data[0].region),
    providesTags: (result) => [
        { type: 'Region', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'Region', id })),
    ],
};
