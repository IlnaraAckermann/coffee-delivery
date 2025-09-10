import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { textVariants } from "./variants";

interface TextProps extends VariantProps<typeof textVariants> {
	as: keyof React.JSX.IntrinsicElements;
	className?: string;
	children: React.ReactNode;
}

export const Text = ({
	as: Component,
	variant,
	className,
	children,
	...props
}: TextProps) => {
	return (
		<Component
			className={textVariants({ variant, className })}
			{...props}
		>
			{children}
		</Component>
	);
};
