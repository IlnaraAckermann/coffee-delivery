import { Text } from "@components/Text";
import type React from "react";
import { tv } from "tailwind-variants";

interface FieldSetProps
	extends React.DetailedHTMLProps<
		React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
		HTMLFieldSetElement
	> {
	legend?: string;
	children?: React.ReactNode;
	className?: string;
}

export const FieldSet = ({
	legend,
	children,
	className,
	...props
}: FieldSetProps) => {
	const baseClass = tv({
		base: "bg-base-card p-10 rounded-md flex flex-col gap-4 relative m-0",
	});
	return (
		<fieldset
			className={baseClass({ className })}
			{...props}
		>
			{legend && (
				<legend>
					<Text
						variant="title-xs"
						className="text-base-subtitle  absolute left-0
                -top-8"
					>
						{legend}
					</Text>
				</legend>
			)}
			{children}
		</fieldset>
	);
};
