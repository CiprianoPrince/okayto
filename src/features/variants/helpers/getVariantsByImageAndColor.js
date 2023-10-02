function getVariantsByColorAndImage(data) {
    let resultMap = new Map();

    for (const item of data) {
        const { color, image, size } = item;
        const key = `${color.colorId}-${image.imageId}`; // Unique key based on color and image

        if (!resultMap.has(key)) {
            resultMap.set(key, {
                image: { ...image },
                color: { ...color },
                sizes: [],
            });
        }

        // Push the size object to the size array of the resultMap item
        // resultMap.get(key).size.push({
        //     sizeId: size.sizeId,
        //     name: size.name,
        // });

        resultMap.get(key).sizes.push(size.sizeId);
    }

    // Convert the map values to an array
    return Array.from(resultMap.values());
}

export default getVariantsByColorAndImage;
