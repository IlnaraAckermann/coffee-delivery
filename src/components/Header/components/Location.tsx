import { MapPinIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";

export const Location = () => {
	return (
		<Flex className="bg-purple-light text-purple px-3 py-2 rounded-md gap-1 items-center">
			<MapPinIcon
				size={22}
				weight="fill"
			/>
			<Text
				variant="text-m"
				className="text-purple-dark"
			>
				Porto Alegre, RS
			</Text>
		</Flex>
	);
};
