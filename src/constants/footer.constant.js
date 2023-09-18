import { headerlogo } from '../assets';

const data = {
    headerLogo: {
        url: headerlogo,
        alt: 'Okayto logo',
        width: 150,
        height: 50,
    },
    linkSections: [
        {
            title: 'Shop',
            links: [
                { name: 'All Collections', path: '/' },
                { name: 'Summer Edition', path: '/' },
                { name: 'Discount', path: '/' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About us', path: '/' },
                { name: 'Contacts', path: '/' },
                { name: 'Privacy policy', path: '/' },
                { name: 'Payment policy', path: '/' },
            ],
        },
        {
            title: 'Supports',
            links: [
                { name: 'FAQs', path: '/' },
                { name: 'Cookie policy', path: '/' },
                { name: 'Term of use', path: '/' },
                { name: 'customer@nike.com', path: '/' },
                { name: '+92554862354', path: '/' },
            ],
        },
    ],
};

export default data;
