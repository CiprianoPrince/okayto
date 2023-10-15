import React, { useEffect } from 'react';
import RegionsSelectField from './RegionsSelectField';
import ProvincesSelectField from './ProvincesSelectField';
import CitiesSelectField from './CitiesSelectField';

const AddressSelectFields = ({
    region,
    province,
    city,
    onRegionChange,
    onProvinceChange,
    register,
    errors,
}) => {
    useEffect(() => {
        onRegionChange();
    }, [onRegionChange]);
    useEffect(() => {
        onProvinceChange();
    }, [onProvinceChange]);
    return (
        <>
            <RegionsSelectField curr={region} register={register} error={errors.region?.message} />

            <ProvincesSelectField
                curr={province}
                region={region}
                register={register}
                error={errors.province?.message}
            />

            <CitiesSelectField
                curr={city}
                province={province}
                register={register}
                error={errors.city?.message}
            />
        </>
    );
};

export default AddressSelectFields;
