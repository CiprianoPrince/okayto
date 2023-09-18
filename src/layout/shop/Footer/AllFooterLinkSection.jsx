import SingleFooterLinkSection from './SingleFooterLinkSection';

const AllFooterLinkSection = ({ linkSections }) => {
    return (
        <>
            {linkSections.map((linkSection) => (
                <div className="shrink-0 flex-grow" key={linkSection.title}>
                    <SingleFooterLinkSection linkSection={linkSection} />
                </div>
            ))}
        </>
    );
};

export default AllFooterLinkSection;
