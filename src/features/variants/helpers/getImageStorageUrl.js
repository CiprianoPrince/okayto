import { ENDPOINT, VARIANTS_STORAGE_PATH } from '../../../constants';
import { toImageUrl } from '../../../utils';

const getImageStorageUrl = (name) => {
    const productsVariantDirectory = toImageUrl(name);
    const directoryPath = `${ENDPOINT}/${VARIANTS_STORAGE_PATH}/${productsVariantDirectory}`;
    return directoryPath;
};

export default getImageStorageUrl;
