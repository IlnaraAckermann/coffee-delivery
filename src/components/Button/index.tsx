import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./variants";
import { Text } from "../Text";

interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	variant?: "primary" | "secondary";
	size?: "g" | "m";
	loading?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
}

export const Button = ({
	variant,
	size = "m",
	children,
	loading,
	disabled,
}: ButtonProps) => {
	return (
		<button
			className={buttonVariants({ variant, size, loading, disabled })}
			disabled={disabled || loading}
		>
			<Text
				as="span"
				variant={size === "g" ? "button-g" : "button-m"}
			>
				{children}
			</Text>
		</button>
	);
};
