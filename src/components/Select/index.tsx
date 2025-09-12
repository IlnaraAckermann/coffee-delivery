import { Icon, type IconProps } from "../Icon";
import { Flex } from "../Flex";
import { Text } from "../Text";

interface SelectProps extends React.HTMLAttributes<HTMLInputElement> {
	iconProps: IconProps;
	className?: string;
}
export const Select = ({ iconProps, ...props }: SelectProps) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			className="border border-base-button bg-base-button hover:bg-base-hover active:bg-purple-light active:border-purple hover:border-base-hover rounded-md px-3 py-2 gap-2 text-purple w-44 cursor-pointer"
		>
			<Icon {...iconProps} />
			<Text
				as="label"
				htmlFor={props.id}
				variant="button-m"
				className="select-none"
			>
				Delivery
			</Text>
			<input
				type="radio"
				{...props}
				className="hidden"
			/>
		</Flex>
	);
};
