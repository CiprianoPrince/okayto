import { SelectWithLabelAndError } from '../../components/common';
import { useGetProvincesQuery } from '../../features/checkout/slices/api';

const getProvincesByRegion = (provinces, code) => {
    const currentRegionNumber = code.slice(0, -7);
    return Object.values(provinces).filter((province) => {
        return province.code.slice(0, -7) === currentRegionNumber;
    });
};

const ProvincesSelectField = ({ region, register, error, ...props }) => {
    const { provinces } = useGetProvincesQuery('getProvinces', {
        selectFromResult: ({ data }) => ({
            provinces: region
                ? data?.entities
                    ? getProvincesByRegion(data.entities, region)
                    : []
                : [],
        }),
    });

    return (
        <SelectWithLabelAndError
            wrapperClassName="flex-1"
            {...register('province')}
            placeholder="Select your province"
            error={error}
            options={{
                data: provinces,
                value: 'code',
                text: 'name',
            }}
            required
            disabled={!provinces.length}
            {...props}
        >
            Province
        </SelectWithLabelAndError>
    );
};

export default ProvincesSelectField;
