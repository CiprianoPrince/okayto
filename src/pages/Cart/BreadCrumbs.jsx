const BreadCrumbs = () => {
    return (
        <div className="">
            <BreadCrumb>
                <BreadCrumb.Item to="/">Home</BreadCrumb.Item>
                <BreadCrumb.Item to="/cart">Cart</BreadCrumb.Item>
                <BreadCrumb.Item to="/checkout" isDisabled>
                    Checkout
                </BreadCrumb.Item>
                <BreadCrumb.Item to="/payment" isDisabled>
                    Payment
                </BreadCrumb.Item>
            </BreadCrumb>
        </div>
    );
};

export default BreadCrumbs;
