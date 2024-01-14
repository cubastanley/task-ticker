'use server'; // Always use server for Server Actions

import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatesFields = LoginSchema.safeParse(values);

	if (!validatesFields.success) {
		// The values submitted in the login are invalid
		return { error: 'Invalid Values Submitted!' };
	}

	return { success: 'Verify Email Sent! ' };
};
