import { tv } from "tailwind-variants";

export const buttonVariants = tv({
	variants: {
		variant: {
			primary: "bg-yellow rounded-md hover:bg-yellow-dark",
			secondary: "bg-base-button rounded-md hover:bg-base-hover",
		},
		size: {
			g: "px-3 py-2",
			m: "p-2",
		},
		disabled: {
			true: "opacity-50 pointer-events-none",
		},
		loading: {
			true: "pointer-events-none",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "g",
		disabled: false,
		loading: false,
	},
});
