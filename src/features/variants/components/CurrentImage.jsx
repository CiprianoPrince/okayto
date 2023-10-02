import { memo } from 'react';

import { useSelector } from 'react-redux';
import { selectCurrentVariantSet } from '../slices';

const CurrentImage = memo(({ storageUrl }) => {
    const currentVariantSet = useSelector(selectCurrentVariantSet);
    const currentImagePath = `${storageUrl}/${currentVariantSet?.image?.imagePath}`;
    const currentAltText = `${storageUrl}/${currentVariantSet?.image?.imagePath}`;
    return (
        <div>
            <img className="mx-auto" src={currentImagePath} alt={currentAltText} />
        </div>
    );
});

CurrentImage.displayName = 'CurrentImage';

export default CurrentImage;
