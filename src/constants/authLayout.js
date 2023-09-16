import { logo } from '../assets';

const data = {
    headerLogo: {
        url: logo,
        alt: 'Okayto logo',
    },
    navLinks: [
        {
            name: 'Sign in',
            to: 'signin',
            class: 'rounded-full px-3 py-2 font-semibold text-accent-500',
        },
        {
            name: 'Sign up',
            to: 'signup',
            class: 'rounded-full bg-accent-100 px-3 py-2 font-semibold text-accent-500',
        },
    ],
};

export default data;
