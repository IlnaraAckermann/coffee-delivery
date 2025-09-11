import type { VariantProps } from "tailwind-variants";
import { tagsVariants } from "./variants";
import { Flex } from "../Flex";
import { Icon, type IconProps } from "../Icon";

interface TagProps extends VariantProps<typeof tagsVariants> {
	className?: string;
	iconProps: IconProps;
}

export const Tag = ({ className, color, iconProps }: TagProps) => {
	return (
		<Flex
			className={tagsVariants({ className, color })}
			alignItems="center"
			justifyContent="center"
		>
			{iconProps.name && <Icon {...iconProps} />}
		</Flex>
	);
};
