import React from "react";
import type { VariantProps } from "tailwind-variants";
import { textVariants } from "./variants";

type TextProps<T extends React.ElementType = "span"> = {
	as?: T;
	children: React.ReactNode;
} & VariantProps<typeof textVariants> &
	React.ComponentPropsWithoutRef<T>;

export const Text = <T extends React.ElementType = "span">({
	as,
	variant,
	className,
	children,
	...props
}: TextProps<T>) => {
	const Component = (as || "span") as T;
	return React.createElement(
		Component,
		{
			className: textVariants({ variant, className }),
			...props,
		},
		children
	);
};
