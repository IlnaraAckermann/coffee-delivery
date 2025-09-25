import type { VariantProps } from "tailwind-variants";
import { tagsVariants } from "./variants";
import { Flex } from "../Flex";
import { Icon, type IconProps } from "../Icon";
import { Text } from "../Text";

interface TagProps extends VariantProps<typeof tagsVariants> {
	className?: string;
	iconProps: IconProps;
	text?: string;
}

export const Tag = ({ className, color, iconProps, text }: TagProps) => {
	return (
		<div>
			<Flex
				className={tagsVariants({ className, color })}
				alignItems="center"
				justifyContent="center"
			>
				{iconProps.name && <Icon {...iconProps} />}
			</Flex>
			{text && (
				<Text
					variant="text-m"
					className="ml-2"
				>
					{text}
				</Text>
			)}
		</div>
	);
};
