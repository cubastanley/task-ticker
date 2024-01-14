import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button } from '../ui/button';

const socialLogins = [
	{
		icon: FaGoogle,
		href: '/',
	},
	{
		icon: FaGithub,
		href: '/',
	},
];

export default function Social() {
	return (
		<div className="flex items-center w-full gap-x-2">
			{socialLogins.map((social) => (
				<Button
					key={social.href}
					size="lg"
					className="w-full"
					variant="outline"
					onClick={() => {}}
				>
					<social.icon className="h-5 w-5" />
				</Button>
			))}
		</div>
	);
}
