const getProductBySlug = (products, slug) => {
    for (const id in products) {
        if (products[id].slug === slug) {
            return products[id];
        }
    }
    return null; // or return undefined, depending on your preference
};

export default getProductBySlug;
