import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import React from "react";
import { tv } from "tailwind-variants";

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const InputNumber = ({
	className,
	value,
	onChange,
	...props
}: InputNumberProps) => {
	const handleDecrement = () => {
		const currentValue = Number(value) || 0;
		const step = Number(props.step) || 1;
		const newValue = Math.max(0, currentValue - step);
		const event = {
			target: { value: newValue.toString(), valueAsNumber: newValue },
			currentTarget: { value: newValue.toString(), valueAsNumber: newValue },
			type: "change",
		} as React.ChangeEvent<HTMLInputElement>;
		onChange?.(event);
	};

	const handleIncrement = () => {
		const currentValue = Number(value) || 0;
		const step = Number(props.step) || 1;
		const newValue = currentValue + step;
		const event = {
			target: { value: newValue.toString(), valueAsNumber: newValue },
			currentTarget: { value: newValue.toString(), valueAsNumber: newValue },
			type: "change",
		} as React.ChangeEvent<HTMLInputElement>;
		onChange?.(event);
	};

	const baseInputClass = tv({
		base: "no-spinner w-10 bg-base-input border-none outline-0 rounded-md py-2 text-base-text text-center",
	});
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
				value={value ?? 0}
				className={baseInputClass({ className })}
				onChange={onChange}
				{...props}
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
