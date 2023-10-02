import { BreadCrumb } from '../../components';
import { toUpperCaseFirst } from '../../utils';

const BreadCrumbs = (categoryParam) => {
    return (
        <>
            <BreadCrumb>
                <BreadCrumb.Item to="/">Home</BreadCrumb.Item>
                <BreadCrumb.Item to="/shop">Shop</BreadCrumb.Item>
                {categoryParam ? (
                    <BreadCrumb.Item to={`/shop?category=${categoryParam}`}>
                        {toUpperCaseFirst(categoryParam)}
                    </BreadCrumb.Item>
                ) : null}
            </BreadCrumb>
        </>
    );
};

export default BreadCrumbs;
