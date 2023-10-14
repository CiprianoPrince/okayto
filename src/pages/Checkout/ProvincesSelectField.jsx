import React, { forwardRef } from 'react';
import { SelectWithLabelAndError } from '../../components/common';
import { useGetProvincesQuery } from '../../features/checkout/slices/api';

const getProvincesByRegion = (provinces, code) => {
    const regionNumber = code.slice(0, -7);
    console.log(regionNumber);
    return Object.values(provinces).filter((province) => {
        return province.code.slice(0, -7) === regionNumber;
    });
};

const ProvincesSelectFieldFowardRef = ({ region, register, error }, ref) => {
    const { provinces } = useGetProvincesQuery('getProvinces', {
        selectFromResult: ({ data }) => ({
            provinces: region
                ? data?.entities
                    ? getProvincesByRegion(data.entities, region)
                    : null
                : null,
        }),
    });

    return (
        <SelectWithLabelAndError
            wrapperClassName="flex-1"
            {...register('province')}
            placeholder="Select your province"
            error={error}
            options={{
                data: provinces ? provinces : [],
                value: 'code',
                text: 'name',
            }}
            required
            disabled={!region}
            ref={ref}
        >
            Province
        </SelectWithLabelAndError>
    );
};

const ProvincesSelectField = forwardRef(ProvincesSelectFieldFowardRef);
ProvincesSelectField.displayName = 'ProvincesSelectField';

export default ProvincesSelectField;
