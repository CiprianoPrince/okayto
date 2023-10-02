import { motion } from 'framer-motion';
import decodeHTMLEntities from '../../../utils/string/decodeHTMLEntities';

import { Card } from '../../../components';
import { useGetProductsQuery } from '../slices';

const ENDPOINT = 'http://localhost:8000';
const UPLOADS_STORAGE_PATH = 'storage/uploads/imgs/products';

const ProductCard = ({ productId }) => {
    const { product } = useGetProductsQuery('getProducts', {
        selectFromResult: ({ data }) => ({
            product: data.entities[productId],
        }),
    });

    const imageVariants = {
        hover: {
            scale: 0.9,
            transition: {
                ease: 'easeInOut',
            },
        },
        initial: {
            scale: 1,
        },
    };

    const decodeProductName = decodeHTMLEntities(product.name);

    return (
        <Card className="bg-[#efefef]" title={decodeProductName}>
            <Card.Link to={`/shop?product=${product.slug}`}>
                <motion.div initial="initial" whileHover="hover" variants={imageVariants}>
                    <Card.Img
                        src={`${ENDPOINT}/${UPLOADS_STORAGE_PATH}/${product?.image?.imagePath}`}
                        alt={product?.image?.altText}
                    />
                </motion.div>
            </Card.Link>

            <Card.Body className="space-y-4 bg-primary-50 p-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <Card.Text className="line-clamp-2 break-all text-base text-secondary-950/80 md:line-clamp-1">
                        {decodeProductName}
                    </Card.Text>

                    <Card.Text className="text-xl text-accent-300 lg:text-2xl">
                        &#8369;{product.price}
                    </Card.Text>
                </div>

                <div className="flex flex-row items-center justify-between  text-sm">
                    <Card.Text className="text-secondary-950/50">{product.colors} Colors</Card.Text>
                    <Card.Text className="text-secondary-950/50">&#8369;{product.price}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
