import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./variants";
import { Text } from "@components/Text";

interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "g" | "m";
	loading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	icon?: React.ReactNode;
}

export const Button = ({
	variant,
	size = "m",
	children,
	loading,
	disabled,
	icon,
}: ButtonProps) => {
	return (
		<button
			className={buttonVariants({ variant, size, loading, disabled })}
			disabled={disabled || loading}
		>
			{icon}
			{children && (
				<Text
					as="span"
					variant={size === "g" ? "button-g" : "button-m"}
					className={
						variant === "secondary"
							? "text-base-text hover:text-base-subtitle"
							: "text-white"
					}
				>
					{children}
				</Text>
			)}
		</button>
	);
};
