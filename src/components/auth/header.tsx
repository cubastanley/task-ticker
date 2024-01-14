import React from 'react';

interface HeaderProps {
	label: string;
}

export default function Header({ label }: HeaderProps) {
	return (
		<div className="w-full flex flex-col gap-y-2 items-center justify-center">
			<h1 className="text-3xl font-semibold tracking-wider">Task Ticker 📝</h1>
			<h2 className="text-muted-foreground text-md tracking-widest">{label}</h2>
		</div>
	);
}
