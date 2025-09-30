import { Text } from "@components/Text";
import { useRef, useState } from "react";
import { baseInputClass, containerVariants } from "./variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	isOptional?: boolean;
}

export const Input = ({
	className,
	value,
	onChange,
	isOptional = false,
	...props
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [internalValue, setInternalValue] = useState("");

	const currentValue = value ?? internalValue;

	const isFilled = !!currentValue;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		if (value === undefined) setInternalValue(e.target.value);
	};

	return (
		<div className={containerVariants({ className })}>
			<input
				ref={inputRef}
				className={baseInputClass({ isFilled })}
				onChange={handleChange}
				value={currentValue}
				{...props}
			/>
			{isOptional && (
				<Text
					variant="text-s"
					className=" text-base-label italic absolute right-2 translate-y-1/2"
				>
					Opcional
				</Text>
			)}
		</div>
	);
};
