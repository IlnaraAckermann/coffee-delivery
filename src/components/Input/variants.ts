import { tv } from "tailwind-variants";

export const containerVariants = tv({
	base: "relative flex flex-grow",
	variants: {
		width: {
			"w-full": "w-full",
			"w-fit": "w-fit",
			"w-1/2": "w-1/2",
			"w-1/3": "w-1/3",
			"w-2/3": "w-2/3",
			"w-3/4": "w-3/4",
			"w-1/4": "w-1/4",
			"w-auto": "w-auto",
		},
	},
	defaultVariants: { width: "w-auto" },
});

export const baseInputClass = tv({
	base: `p-2 border border-base-button bg-base-input rounded placeholder-base-label focus:outline-none focus:ring-1 focus:ring-yellow  w-full`,
	variants: {
		isFilled: {
			true: "focus:ring-yellow-dark",
			false: "",
		},
	},
});
