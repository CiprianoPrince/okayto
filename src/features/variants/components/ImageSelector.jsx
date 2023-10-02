import { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    selectCurrentVariantSet,
    selectVariantSets,
    setCurrentVariantSet,
} from '../../variants/slices';
import { useDispatch, useSelector } from 'react-redux';

const ImageSelector = memo(({ storageUrl }) => {
    const currentVariantSet = useSelector(selectCurrentVariantSet);
    const variantSets = useSelector(selectVariantSets);

    const dispatch = useDispatch();

    const handleSetVariantSet = (variantSet) => {
        return (e) => {
            e.preventDefault();
            dispatch(setCurrentVariantSet(variantSet));
        };
    };
    return (
        <>
            {variantSets && (
                <Swiper
                    className="p-4"
                    modules={[A11y]}
                    slidesPerView={4}
                    spaceBetween={16}
                    freeMode={true}
                >
                    {variantSets.map((variantSet) => {
                        const {
                            image: { imageId, imagePath, altText },
                        } = variantSet;

                        const isSelected = currentVariantSet?.image?.imageId === imageId;
                        return (
                            <SwiperSlide key={imageId} tag="article">
                                <div
                                    className={`cursor-pointer rounded-sm duration-150 ${
                                        isSelected ? 'ring-4 ring-accent-500' : ''
                                    }`}
                                    onClick={handleSetVariantSet(variantSet)}
                                >
                                    <img src={`${storageUrl}/${imagePath}`} alt={altText} />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
        </>
    );
});

ImageSelector.displayName = 'ImageSelector';

export default ImageSelector;
