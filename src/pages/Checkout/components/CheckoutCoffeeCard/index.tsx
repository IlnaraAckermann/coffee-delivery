import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { InputNumber } from "@components/InputNumber";
import { Text } from "@components/Text";
import { useCoffeeOrders, type CoffeeItem } from "@contexts/CartContext";
import { TrashIcon } from "@phosphor-icons/react";

type CheckoutCoffeeCardProps = {
	coffeeItem: CoffeeItem;
};

export const CheckoutCoffeeCard = ({ coffeeItem }: CheckoutCoffeeCardProps) => {
	const { removeCoffeeOrder, addOrUpdateCoffeeOrder } = useCoffeeOrders();
	
const ImageUrl = new URL(`/src/assets/images/${coffeeItem.coffee.image}`, import.meta.url).href;
	return (
		<Flex className="p-6 rounded-md gap-4 w-full contain-content">
			<img
				src={ImageUrl}
				alt={coffeeItem.coffee.name}
				className="w-16 h-16"
			/>
			<div className="w-full min-w-fit">
				<Flex className="justify-between w-full gap-2">
					<Text>{coffeeItem.coffee.name}</Text>
					<Text className="font-bold">
						R$ {(coffeeItem.coffee.price * coffeeItem.quantity).toFixed(2)}
					</Text>
				</Flex>
				<Flex gap="md">
					<InputNumber
						value={coffeeItem.quantity}
						onChange={(value) =>
							addOrUpdateCoffeeOrder(
								coffeeItem.coffee,
								value.target.valueAsNumber
							)
						}
					/>
					<Button
						variant="secondary"
						className="text-sm"
						icon={<TrashIcon size={16} />}
						onClick={() => removeCoffeeOrder(coffeeItem.coffee.id)}
					>
						REMOVER
					</Button>
				</Flex>
			</div>
		</Flex>
	);
};
