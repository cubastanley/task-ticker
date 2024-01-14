import ThemeProvider from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Sarabun } from 'next/font/google';
import './globals.css';

const sarabun = Sarabun({ subsets: ['latin'], weight: ['300'] });

export const metadata: Metadata = {
	title: "Cuba's Webapp",
	description:
		'A little webapp for testing out different features of NextJS and React',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-screen">
			<body
				className={cn(
					sarabun.className,
					'flex flex-col justify-center items-center min-h-full'
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="w-full h-full">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
