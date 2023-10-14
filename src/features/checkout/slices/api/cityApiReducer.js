export const getCitiesQuery = {
    query: () => `/city`,
    transformResponse: (citiesAdapter, CityInitialState) => (response) =>
        citiesAdapter.setAll(CityInitialState, response[0].city),
    providesTags: (result) => [
        { type: 'City', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'City', id })),
    ],
};
