import { tv } from "tailwind-variants";

export const tagsVariants = tv({
	base: "inline-flex items-center rounded-full text-white text-base p-2 mr-2",
	variants: {
		color: {
			yellow: "bg-yellow",
			"yellow-dark": "bg-yellow-dark",
			purple: "bg-purple",
			base: "bg-base-text",
		},
	},
});
