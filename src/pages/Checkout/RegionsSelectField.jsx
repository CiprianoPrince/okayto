import React from 'react';
import { SelectWithLabelAndError } from '../../components/common';
import { useGetRegionsQuery } from '../../features/checkout/slices/api';

const RegionsSelectField = ({ register, error }) => {
    const { regions } = useGetRegionsQuery('getRegions', {
        selectFromResult: ({ data }) => ({
            regions: data?.entities,
        }),
    });

    return (
        <SelectWithLabelAndError
            wrapperClassName="flex-1"
            {...register('region')}
            placeholder="Select your region"
            error={error}
            options={{ data: regions ? Object.values(regions) : [], value: 'code', text: 'name' }}
            required
        >
            Region
        </SelectWithLabelAndError>
    );
};

export default RegionsSelectField;
