import { useRef, useState } from "react";
import { tv } from "tailwind-variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input = ({ className, value, onChange, ...props }: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [internalValue, setInternalValue] = useState("");

	const currentValue = value ?? internalValue;

	const isFilled = !!currentValue;

	const baseClass = tv({
		base: `p-2 border border-base-button bg-base-input rounded placeholder-base-label focus:outline-none focus:ring-1 focus:ring-yellow `,
		variants: {
			isFilled: {
				true: "focus:ring-yellow-dark",
				false: "",
			},
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		if (value === undefined) setInternalValue(e.target.value);
	};

	return (
		<input
			ref={inputRef}
			className={baseClass({ className, isFilled })}
			onChange={handleChange}
			value={currentValue}
			{...props}
		/>
	);
};
