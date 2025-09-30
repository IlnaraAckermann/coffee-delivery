import { Flex } from "@components/Flex";
import { Text } from "@components/Text";

export const TextValue = ({
	text,
	value,
	className,
}: {
	text: string;
	value: string;
	className?: string;
}) => {
	return (
		<Flex justifyContent="between" margin="none">
			<Text
				variant="text-s"
				className={className}
			>
				{text}
			</Text>
			<Text
				variant="text-s"
				className={className}
			>
				{value}
			</Text>
		</Flex>
	);
};
