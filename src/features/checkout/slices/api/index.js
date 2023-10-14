import regionApiSlice from './regionApiSlice';
import provinceApiSlice from './provinceApiSlice';
import cityApiSlice from './cityApiSlice';

export const { useGetRegionsQuery } = regionApiSlice;
export const { useGetProvincesQuery } = provinceApiSlice;
export const { useGetCitiesQuery } = cityApiSlice;
