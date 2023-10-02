const CardImg = ({ className, src, ...props }) => {
    return <img className={`block w-full ${className}`} src={src} {...props} />;
};

export default CardImg;
