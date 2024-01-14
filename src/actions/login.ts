'use server'; // Always use server for Server Actions

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatesFields = LoginSchema.safeParse(values);

	if (!validatesFields.success) {
		// The values submitted in the login are invalid
		return { error: 'Invalid Values Submitted!' };
	}

	const { email, password } = validatesFields.data;
	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid Credentials' };
				default:
					return { error: 'Something went wrong, please try again' };
			}
		}

		throw error; // Required to redirect back to the login page on error
	}
};
