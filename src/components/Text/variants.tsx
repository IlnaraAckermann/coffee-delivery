import { tv } from "tailwind-variants";

export const textVariants = tv({
	base: "text-base-text",
	variants: {
		variant: {
			"text-l": "text-xl font-roboto",
			"text-m": "text-base font-roboto",
			"text-s": "text-sm font-roboto",
			"text-xs": "text-xs font-bold font-roboto",
			"title-xl": "text-5xl font-extrabold font-baloo",
			"title-l": "text-3xl font-extrabold font-baloo",
			"title-m": "text-2xl font-extrabold font-baloo",
			"title-s": "text-xl font-bold font-baloo",
			"title-xs": "text-lg font-bold font-baloo",
			"button-g": "text-sm font-bold leading-5 font-roboto",
			"button-m": "text-xs leading-4 font-roboto",
			tag: "text-[10px] font-bold font-roboto",
		},
	},
	defaultVariants: {
		variant: "text-m",
	},
});
