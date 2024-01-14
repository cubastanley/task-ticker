'use server'; // Always use server for Server Actions

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatesFields = RegisterSchema.safeParse(values);

	if (!validatesFields.success) {
		// The values submitted in the login are invalid
		return { error: 'Invalid Values Submitted!' };
	}

	return { success: 'Verify Email Sent!' };
};
