import { footerConstant } from '../../../constants';

import FooterLogo from './FooterLogo';
import FooterText from './FooterText';
import FooterCopyright from './FooterCopyright';
import AllFooterLinkSection from './AllFooterLinkSection';

const Footer = () => {
    const { headerLogo, linkSections } = footerConstant;
    return (
        <footer className="bg-secondary-100">
            <div className="container mx-auto space-y-8 px-6 py-8">
                <div className="flex flex-wrap items-start justify-between gap-10 max-lg:flex-col">
                    <div className="flex w-full max-w-sm flex-col items-start">
                        <FooterLogo headerLogo={headerLogo} />

                        <FooterText>
                            Specializes in providing high-quality, stylish products for your
                            wardrobe.
                        </FooterText>
                    </div>

                    <div className="flex w-full flex-1 flex-wrap gap-10">
                        <AllFooterLinkSection linkSections={linkSections} />
                    </div>
                </div>

                <hr className="h-[2px] rounded-xl border-0 bg-secondary-900/30" />

                <div className="flex justify-center">
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
