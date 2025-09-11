import type { VariantProps } from "tailwind-variants";
import { tagsVariants } from "./variants";
import { Flex } from "../Flex";
import * as Icon from "@phosphor-icons/react";
import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";

type IconProps = keyof typeof Icon;

interface TagProps extends VariantProps<typeof tagsVariants> {
	className?: string;
	iconName: IconProps;
}

export const Tag = ({ className, color, iconName }: TagProps) => {
	const IconComponent = Icon[
		iconName
	] as React.ComponentType<PhosphorIconProps>;
	return (
		<Flex
			className={tagsVariants({ className, color })}
			alignItems="center"
			justifyContent="center"
		>
			{IconComponent && <IconComponent weight="fill" />}
		</Flex>
	);
};
