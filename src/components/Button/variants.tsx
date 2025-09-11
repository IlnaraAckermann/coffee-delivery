import { tv } from "tailwind-variants";

export const buttonVariants = tv({
	base: "inline-flex items-center gap-2 rounded-md",
	variants: {
		variant: {
			primary: "bg-yellow hover:bg-yellow-dark text-white",
			secondary:
				"bg-base-button hover:bg-base-hover text-purple hover:text-purple-dark",
			tertiary: "bg-purple-dark hover:bg-purple text-white",
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
