import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { useCoffeeOrders } from "../../../contexts/CartContext";

export const CartStatus = () => {
	const { getTotalItems } = useCoffeeOrders();
	return (
		<Flex className="bg-yellow-light p-2 rounded-md text-yellow relative">
			<Flex className="rounded-full bg-yellow absolute -right-2 -top-2 px-1.5">
				<Text
					className="text-yellow-light"
					variant="text-s"
				>
					{getTotalItems()}
				</Text>
			</Flex>
			<ShoppingCartSimpleIcon
				size={22}
				weight="fill"
			/>
		</Flex>
	);
};
