'use server'; // Always use server for Server Actions

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatesFields = RegisterSchema.safeParse(values);

	if (!validatesFields.success) {
		// The values submitted in the login are invalid
		return { error: 'Invalid Values Submitted!' };
	}

	const { email, password, name } = validatesFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = getUserByEmail(email);

	if (existingUser !== null) {
		return {
			error: 'The provided email already has an associated account',
		};
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	// TODO: Send a verification email

	return { success: 'User Registered!' };
};
