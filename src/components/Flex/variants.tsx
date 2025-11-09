import { tv } from "tailwind-variants";

export const flexVariants = tv({
	base: "flex",
	variants: {
		flexDirection: {
			row: "flex-row",
			column: "flex-col",
		},
		justifyContent: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
		},
		alignItems: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			between: "items-between",
			around: "items-around",
			evenly: "items-evenly",
			stretch: "items-stretch",
		},
		gap: {
			none: "gap-0",
			sm: "gap-1",
			md: "gap-2",
			lg: "gap-3",
		},
		wrap: {
			true: "flex-wrap",
			false: "flex-nowrap",
		},
		padding: {
			none: "p-0",
			sm: "p-1",
			md: "p-2",
			lg: "p-3",
		},
		margin: {
			none: "m-0",
			sm: "m-1",
			md: "m-2",
			lg: "m-3",
		},
		flexgrow: {
			grow: "flex-grow",
			none: "flex-none",
		},
	},
	defaultVariants: {
		flexDirection: "row",
		justifyContent: "start",
		alignItems: "start",
		gap: "none",
		wrap: false,
		padding: "none",
		margin: "none",
		flexgrow: "none",
	},
});
