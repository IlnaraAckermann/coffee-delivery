import type { VariantProps } from "tailwind-variants";
import { flexVariants } from "./variants";
import { createElement } from "react";

interface FlexProps<T extends React.ElementType = "div">
	extends React.HTMLAttributes<T>,
		VariantProps<typeof flexVariants> {
	as?: T;
	children?: React.ReactNode;
	className?: string;
}

export const Flex = <T extends React.ElementType = "div">({
	as,
	children,
	flexDirection,
	justifyContent,
	alignItems,
	gap,
	wrap,
	padding,
	margin,
	className,
	...props
}: FlexProps<T>) => {
	return createElement(
		as || "div",
		{
			className: flexVariants({
				flexDirection,
				justifyContent,
				alignItems,
				gap,
				wrap,
				padding,
				margin,
				className,
			}),
			...props,
		},
		children
	);
};
