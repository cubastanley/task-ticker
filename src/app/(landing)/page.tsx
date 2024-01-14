import LoginButton from '@/components/auth/login-button';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { Button } from 'react-aria-components';

export default function Home() {
	return (
		<div className="space-y-6 flex flex-col items-center justify-center">
			<h1 className="text-6xl font-semibold drop-shadow-md tracking-wider">
				📝 Task Ticker
			</h1>
			<p className="text-lg italic">
				A simple and affective AI assisted task-management platform
			</p>
			<LoginButton>Sign In</LoginButton>
		</div>
	);
}
