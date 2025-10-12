import type { VariantProps } from "tailwind-variants";
import { tagsVariants } from "./variants";
import { Flex } from "@components/Flex";
import { Icon, type IconProps } from "@components/Icon";
import { Text } from "@components/Text";
import type { ReactNode } from "react";

interface TagProps extends VariantProps<typeof tagsVariants> {
	className?: string;
	iconProps: IconProps;
	text?: string | ReactNode;
}

export const Tag = ({ className, color, iconProps, text }: TagProps) => {
	return (
		<Flex alignItems="center">
			<Flex
				className={tagsVariants({ className, color })} 
				alignItems="center"
				justifyContent="center"
			>
				{iconProps.name && <Icon {...iconProps} />}
			</Flex>
			{text &&
				(typeof text === "string" ? (
					<Text
						variant="text-m"
					>
						{text}
					</Text>
				) : (
					text
				))}
		</Flex>
	);
};
