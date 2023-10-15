import { SelectWithLabelAndError } from '../../components/common';
import { useGetRegionsQuery } from '../../features/checkout/slices/api';

const RegionsSelectField = ({ register, error, ...props }) => {
    const { regions } = useGetRegionsQuery('getRegions', {
        selectFromResult: ({ data }) => ({
            regions: data?.entities ? Object.values(data.entities) : [],
        }),
    });

    return (
        <SelectWithLabelAndError
            wrapperClassName="flex-1"
            {...register('region')}
            placeholder="Select your region"
            error={error}
            options={{ data: regions, value: 'code', text: 'name' }}
            required
            {...props}
        >
            Region
        </SelectWithLabelAndError>
    );
};

export default RegionsSelectField;
