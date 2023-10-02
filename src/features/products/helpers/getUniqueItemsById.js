const getUniqueItemsById = (items, id) => {
    return items.filter((item, index, self) => {
        return (
            index ===
            self.findIndex((t) => {
                return t[id] === item[id];
            })
        );
    });
};

export default getUniqueItemsById;
