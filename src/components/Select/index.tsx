import { useRef } from "react";
import { Flex } from "../Flex";
import { Icon, type IconProps } from "../Icon";
import { Text } from "../Text";

interface SelectProps extends React.HTMLAttributes<HTMLInputElement> {
	iconProps: IconProps;
	className?: string;
	label?: string;
	checked?: boolean;
	value: string;
	name?: string;
}
export const Select = ({
	iconProps,
	label = "Select",
	className,
	checked,
	...props
}: SelectProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			onClick={() => inputRef.current?.click()}
			className={`border border-base-button bg-base-button hover:bg-base-hover hover:border-base-hover rounded-md px-3 py-2 gap-2 text-purple w-44 cursor-pointer ${
				checked ? "bg-purple-light! border-purple!" : ""
			} ${className}`}
		>
			<Icon {...iconProps} />
			<Text
				as="label"
				htmlFor={props.id}
				variant="button-m"
				className="select-none"
			>
				{label}
			</Text>
			<input
				type="radio"
				ref={inputRef}
				checked={checked}
				{...props}
				className="hidden"
			/>
		</Flex>
	);
};
