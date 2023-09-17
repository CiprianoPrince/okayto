import { z } from 'zod';

const labelClass = '';
const inputClass = '';
const spanClass = 'absolute bottom-0 left-0 translate-y-[105%] text-xs text-red-500';

const passwordMatches = (val) => {
    const { password, confirmPassword } = val;
    return password === confirmPassword;
};

export default {
    schema: z
        .object({
            email: z.string().trim().email('Please enter a valid email address.'),

            firstName: z.string().trim().min(1, 'First name should not be empty.'),
            lastName: z.string().trim().min(1, 'Last name should not be empty.'),
            password: z
                .string()
                .trim()
                .min(8, 'Password should be at least 8 characters long.')
                .refine(
                    (password) => /[A-Z]/.test(password),
                    'Password should contain at least one uppercase letter.'
                )
                .refine(
                    (password) => /[a-z]/.test(password),
                    'Password should contain at least one lowercase letter.'
                )
                .refine(
                    (password) => /[0-9]/.test(password),
                    'Password should contain at least one number.'
                ),

            confirmPassword: z
                .string()
                .trim()
                .min(8, 'Confirm password should be at least 8 characters long.')
                .refine(
                    (password) => /[A-Z]/.test(password),
                    'Password should contain at least one uppercase letter.'
                )
                .refine(
                    (password) => /[a-z]/.test(password),
                    'Password should contain at least one lowercase letter.'
                )
                .refine(
                    (password) => /[0-9]/.test(password),
                    'Password should contain at least one number.'
                ),
        })
        .refine(passwordMatches, {
            message: 'Password and Confirm Password should be the same.',
            path: ['confirmPassword'],
        }),
    fields: [
        {
            label: {
                className: labelClass,
                children: 'First name',
                htmlFor: 'text',
            },
            input: {
                name: 'firstName',
                className: inputClass,
                type: 'text',
                id: 'text',
                placeholder: 'Your first name',
                value: 'Prince',
            },
            error: {
                className: spanClass,
            },
        },
        {
            label: {
                className: labelClass,
                children: 'Last name',
                htmlFor: 'lastName',
            },
            input: {
                name: 'lastName',
                className: inputClass,
                type: 'text',
                id: 'text',
                placeholder: 'Your last name',
                value: 'Cipriano',
            },
            error: {
                className: spanClass,
            },
        },
        {
            label: {
                className: labelClass,
                children: 'Email address',
                htmlFor: 'email',
            },
            input: {
                name: 'email',
                className: inputClass,
                type: 'email',
                id: 'email',
                placeholder: 'Your email address',
                value: 'prince@gmail.com',
            },
            error: {
                className: spanClass,
            },
        },
        {
            label: {
                className: labelClass,
                children: 'Password',
                htmlFor: 'password',
            },
            input: {
                name: 'password',
                className: inputClass,
                type: 'password',
                id: 'password',
                placeholder: 'Create your password',
                value: 'Password69',
            },
            error: {
                className: spanClass,
            },
        },
        {
            label: {
                className: labelClass,
                children: 'Confirm password',
                htmlFor: 'confirmPassword',
            },
            input: {
                name: 'confirmPassword',
                className: inputClass,
                type: 'password',
                id: 'password',
                placeholder: 'Confirm your password',
                value: 'Password69',
            },
            error: {
                className: spanClass,
            },
        },
    ],
};
