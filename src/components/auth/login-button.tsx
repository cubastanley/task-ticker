'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from 'react-aria-components';
import { buttonVariants } from '../ui/button';

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: 'modal' | 'redirect';
	asChild?: boolean;
	className?: string;
}

export default function LoginButton({
	children,
	mode = 'redirect',
	asChild,
	className,
}: LoginButtonProps) {
	const router = useRouter();
	const handleOnPress = () => {
		router.push('/auth/login');
	};

	if (mode === 'modal') {
		return <span>TODO: Implement Modal Mode</span>;
	}

	return (
		<Button
			className={cn(buttonVariants(), className, 'cursor-pointer')}
			onPress={handleOnPress}
		>
			{children}
		</Button>
	);
}
