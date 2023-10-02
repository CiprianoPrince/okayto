import CardHeader from './CardHeader';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardLink from './CardLink';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardImg from './CardImg';

const Card = ({ children, className, tag, ...props }) => {
    const Element = tag ?? 'div';
    return (
        <Element
            className={`w-full max-w-lg rounded-lg shadow-xl ring-1 ring-inset ring-secondary-900/5 ${className}`}
            {...props}
        >
            {children}
        </Element>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Img = CardImg;
Card.Footer = CardFooter;

export default Card;
