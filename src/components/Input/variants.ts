import { tv } from "tailwind-variants";

export const containerVariants = tv({
	base: "relative flex flex-grow w-full",
});

export const baseInputClass = tv({
	base: `w-full p-2 border border-base-button bg-base-input rounded placeholder-base-label focus:outline-none focus:ring-1 focus:ring-yellow`,
	variants: {
		isFilled: {
			true: "focus:ring-yellow-dark",
			false: "",
		},
	},
	defaultVariants: { isFilled: false },
});
