import { headerlogo } from '../assets';

const data = {
    headerLogo: {
        url: headerlogo,
        alt: 'Okayto logo',
    },
    navLinks: [
        {
            name: 'Shop',
            path: 'shop',
        },
        {
            name: 'Most Wanted',
            path: 'most-wanted',
        },
        {
            name: 'New Arrival',
            path: 'new-arrival',
        },
    ],
    authLinks: [
        {
            name: 'Sign in',
            path: 'signin',
        },
        {
            name: 'Sign up',
            path: 'signup',
        },
        {
            name: 'Account',
            path: 'account',
        },
        {
            name: 'Logout',
            path: 'signout',
        },
    ],
};

export default data;
