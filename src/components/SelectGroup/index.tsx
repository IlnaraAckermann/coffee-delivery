import { useState } from "react";
import { type IconProps } from "@components/Icon";
import { Flex } from "@components/Flex";
import { Select } from "@components/Select";

interface GroupSelectProps {
	options: { value: string; label: string; iconProps: IconProps }[];
	name: string;
	flexDirection?: "row" | "column";
	value?: string;
	onChange?: (value: string) => void;
	defaultValue?: string;
	classname?: string;
}

export const GroupSelect = ({
	options,
	name,
	flexDirection = "row",
	value,
	onChange,
	defaultValue,
	classname,
}: GroupSelectProps) => {
	const [internalValue, setInternalValue] = useState(defaultValue || "");

	const selectedValue = value !== undefined ? value : internalValue;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		if (value === undefined) {
			setInternalValue(newValue);
		}
		onChange?.(newValue);
	};

	return (
		<Flex
			flexDirection={flexDirection}
			gap="md"
			className={classname}
		>
			{options.map((option) => (
				<Select
					key={option.value}
					iconProps={option.iconProps}
					label={option.label}
					value={option.value}
					name={name}
					checked={selectedValue === option.value}
					onChange={handleChange}
				/>
			))}
		</Flex>
	);
};
