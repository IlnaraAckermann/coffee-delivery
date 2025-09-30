import { Text } from "@components/Text";
import { useRef, useState } from "react";
import { baseInputClass, containerVariants } from "./variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	isMandatory?: boolean;
	width?:
		| "w-full"
		| "w-fit"
		| "w-1/2"
		| "w-1/3"
		| "w-2/3"
		| "w-3/4"
		| "w-1/4"
		| "w-auto";
}

export const Input = ({
	className,
	value,
	onChange,
	isMandatory,
	width = "w-auto",
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
		<div className={containerVariants({ width })}>
			<input
				ref={inputRef}
				className={baseInputClass({ className, isFilled })}
				onChange={handleChange}
				value={currentValue}
				{...props}
			/>
			{!isMandatory && (
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
