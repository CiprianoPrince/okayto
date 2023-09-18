import DropDownMenuLink from './DropDownMenuLink';

/// redux
const DropDownMenuLinkList = ({ links }) => {
    return (
        <>
            <ul className="flex flex-col gap-y-4 p-4">
                {links.map((link) => (
                    <DropDownMenuLink key={link.name} link={link} />
                ))}
            </ul>
        </>
    );
};

export default DropDownMenuLinkList;
