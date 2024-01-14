import { ThumbsUpIcon } from 'lucide-react';
import React from 'react';

interface FormErrorProps {
	message?: string;
}

export default function FormSuccess({ message }: FormErrorProps) {
	if (!message) return null;

	return (
		<div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
			<ThumbsUpIcon className="w-4 h-4" />
			<p>{message}</p>
		</div>
	);
}
