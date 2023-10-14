import { SelectWithLabelAndError } from '../../components/common';
import { useGetCitiesQuery } from '../../features/checkout/slices/api';

const getCitiesByRegion = (provinces, code) => {
    const currentProvinceNumber = code.slice(0, -5);
    return Object.values(provinces).filter((province) => {
        return province.code.slice(0, -5) === currentProvinceNumber;
    });
};

const CitiesSelectField = ({ province, register, error }) => {
    const { cities } = useGetCitiesQuery('getCities', {
        selectFromResult: ({ data }) => ({
            cities: province
                ? data?.entities
                    ? getCitiesByRegion(data.entities, province)
                    : null
                : null,
        }),
    });

    return (
        <SelectWithLabelAndError
            wrapperClassName="flex-1"
            {...register('city')}
            placeholder="Select your city"
            error={error}
            options={{
                data: cities ? cities : [],
                value: 'code',
                text: 'name',
            }}
            required
            disabled={!province}
        >
            City
        </SelectWithLabelAndError>
    );
};

export default CitiesSelectField;
