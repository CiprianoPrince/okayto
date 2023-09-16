import { z } from 'zod';

const labelClass = '';
const inputClass = '';
const spanClass = 'absolute bottom-0 left-0 translate-y-[105%] text-xs text-red-500';

export default {
    schema: z.object({
        email: z
            .string()
            .email('Please enter a valid email address.')
            .transform((val) => val.trim()),

        password: z
            .string()
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
            )
            .transform((val) => val.trim()),
    }),
    fields: [
        {
            label: {
                className: labelClass,
                children: 'Email Address',
                htmlFor: 'email',
            },
            input: {
                name: 'email',
                className: inputClass,
                id: 'email',
                type: 'email',
                placeholder: 'Enter your registered email',
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
                id: 'password',
                type: 'password',
                placeholder: 'Enter your password',
                value: 'Password69',
            },
            error: {
                className: spanClass,
            },
        },
    ],
};
