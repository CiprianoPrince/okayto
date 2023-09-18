import FooterLink from './FooterLink';

const FooterLinkList = ({ links }) => {
    return (
        <>
            <ul>
                {links.map((link) => (
                    <FooterLink key={link.name} link={link} />
                ))}
            </ul>
        </>
    );
};

export default FooterLinkList;
