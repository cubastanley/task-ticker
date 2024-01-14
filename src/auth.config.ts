import type { NextAuthConfig } from 'next-auth';

import credentials from 'next-auth/providers/credentials';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';

import { getUserByEmail } from './data/user';
import { db } from './lib/db';
import { LoginSchema } from './schemas';

import bcrypt from 'bcryptjs';

export default {
	providers: [
		github,
		google,
		credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);
				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);
					if (!user || !user.password) return null;

					const passwordMatch = await bcrypt.compare(password, user.password);
					if (passwordMatch) return user;
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
