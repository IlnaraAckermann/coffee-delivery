import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import React from "react";

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const InputNumber = ({ className, ...props }: InputNumberProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleDecrement = () => {
		const input = inputRef.current;
		if (input) {
			const currentValue = parseInt(input.value) || 0;
			const step = parseInt(input.step) || 1;
			input.value = Math.max(0, currentValue - step).toString();
			input.dispatchEvent(new Event("input", { bubbles: true })); // To trigger any onChange handlers
		}
	};

	const handleIncrement = () => {
		const input = inputRef.current;
		if (input) {
			const currentValue = parseInt(input.value) || 0;
			const step = parseInt(input.step) || 1;
			input.value = (currentValue + step).toString();
			input.dispatchEvent(new Event("input", { bubbles: true }));
		}
	};

	return (
		<Flex
			alignItems="center"
			className="bg-base-input rounded-md  px-2"
		>
			<MinusIcon
				size={16}
				weight="bold"
				className="text-purple cursor-pointer hover:text-purple-dark"
				onClick={handleDecrement}
			/>
			<input
				type="number"
				defaultValue={0}
				className={`no-spinner  w-10 bg-base-input border-none outline-0 rounded-md py-2 text-base-text  text-center ${
					className ? className : ""
				} `}
				{...props}
				ref={inputRef}
			/>
			<PlusIcon
				size={16}
				weight="bold"
				className="text-purple cursor-pointer hover:text-purple-dark"
				onClick={handleIncrement}
			/>
		</Flex>
	);
};
