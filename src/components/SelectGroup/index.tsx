import { useState } from "react";
import { type IconProps } from "../Icon";
import { Flex } from "../Flex";
import { Select } from "../Select";

interface GroupSelectProps {
	options: { value: string; label: string; iconProps: IconProps }[];
	name: string;
	flexDirection?: "row" | "column";
	onChange?: (value: string) => void;
	defaultValue?: string;
}

export const GroupSelect = ({
	options,
	name,
	flexDirection = "row",
	onChange,
	defaultValue,
}: GroupSelectProps) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue || "");

	const handleChange = (value: string) => {
		setSelectedValue(value);
		onChange?.(value);
	};

	return (
		<Flex
			flexDirection={flexDirection}
			gap="md"
		>
			{options.map((option) => (
				<Select
					key={option.value}
					iconProps={option.iconProps}
					label={option.label}
					value={option.value}
					name={name}
					checked={selectedValue === option.value}
					onChange={() => handleChange(option.value)}
				/>
			))}
		</Flex>
	);
};
