import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface BackButtonProps {
	label: string;
	href: string;
}

export default function BackButton({ label, href }: BackButtonProps) {
	return (
		<div>
			<Button variant="link" size="sm" asChild>
				<Link href={href}>{label}</Link>
			</Button>
		</div>
	);
}
