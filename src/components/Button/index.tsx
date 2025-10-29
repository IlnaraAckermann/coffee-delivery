import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./variants";
import { Text } from "@components/Text";

interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		Omit<
			React.ComponentProps<"button">,
			"size" | "disabled" | "children" | "icon" | "className" | "variant"
		> {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "g" | "m";
	loading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	icon?: React.ReactNode;
}

export const Button = ({
	variant,
	size = "m",
	children,
	loading,
	disabled,
	icon,
	className,
	...props
}: ButtonProps) => {
	const finalClassName = `${buttonVariants({
		variant,
		size,
		loading,
		disabled,
	})}${className ? ` ${className}` : ""}`.trim();

	return (
		<button
			className={finalClassName}
			disabled={disabled || loading}
			{...props}
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
