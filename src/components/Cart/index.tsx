import { Flex } from "@components/Flex";
import { Icon } from "@components/Icon";
import { Text } from "@components/Text";

interface CartProps {
	numberOfItems?: number;
}

export default function Cart({ numberOfItems }: CartProps) {
	return (
		<Flex
			className="bg-yellow-light rounded-sm relative"
			padding="md"
			alignItems="center"
			justifyContent="center"
		>
			<Icon
				name="ShoppingCart"
				size={22}
				className="text-yellow-dark"
				weight="fill"
			/>
			{numberOfItems && (
				<Text
					variant="text-xs"
					className="text-white absolute -top-2 -right-2 bg-yellow-dark px-1.5 py-0.5 rounded-full font-bold"
				>
					{numberOfItems}
				</Text>
			)}
		</Flex>
	);
}
