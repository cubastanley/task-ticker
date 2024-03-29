import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import React from 'react';

export default async function SettingsPage() {
	const session = await auth();

	return (
		<div>
			<p>Signed In As: {session?.user?.name}</p>
			<form
				action={async () => {
					'use server';

					await signOut();
				}}
			>
				<Button type="submit">Sign Out</Button>
			</form>
		</div>
	);
}
