import { useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const value = inputRef.current?.value;

	return (
		<input
			ref={inputRef}
			className={`p-2 border border-base-button bg-base-input rounded placeholder-base-label focus:outline-none focus:ring-1 focus:ring-yellow
        ${value ? "ring-1 ring-yellow-dark" : ""} ${className}
        `}
			{...props}
		/>
	);
};
