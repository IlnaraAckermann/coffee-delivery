import { useRef } from "react";
import { Flex } from "@components/Flex";
import { Icon, type IconProps } from "@components/Icon";
import { Text } from "@components/Text";
import { tv } from "tailwind-variants";

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

	const baseClass = tv({
		base: "border border-base-button bg-base-button hover:bg-base-hover hover:border-base-hover rounded-md px-3 py-2 gap-2 text-purple w-44 cursor-pointer h-14",
		variants: {
			isChecked: {
				true: "bg-purple-light! border-purple!",
				false: "",
			},
		},
	});

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			onClick={() => inputRef.current?.click()}
			className={baseClass({ isChecked: checked, className })}
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
