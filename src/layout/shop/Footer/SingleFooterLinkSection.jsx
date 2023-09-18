import FooterLinkList from './FooterLinkList';
import FooterLinkTitle from './FooterLinkTitle';

const SingleFooterLinkSection = ({ linkSection }) => {
    const { title, links } = linkSection;
    return (
        <>
            <div className="flex-1">
                <FooterLinkTitle title={title} />
                <FooterLinkList links={links} />
            </div>
        </>
    );
};

export default SingleFooterLinkSection;
