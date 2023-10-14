export const getProvincesQuery = {
    query: () => `/province`,
    transformResponse: (provincesAdapter, ProvinceInitialState) => (response) =>
        provincesAdapter.setAll(ProvinceInitialState, response[0].province),
    providesTags: (result) => [
        { type: 'Province', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'Province', id })),
    ],
};
