import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { InputNumber } from "@components/InputNumber";
import { Text } from "@components/Text";
import { TrashIcon } from "@phosphor-icons/react";

export const CheckoutCoffeeCard = () => {
	return (
		<Flex className="p-6 rounded-md gap-4 w-full contain-content">
			<img
				src="src/assets/images/arabe.png"
				alt="Café Arabe"
				className="w-16 h-16"
			/>
			<div className="w-full min-w-fit">
				<Flex className="justify-between w-full gap-2">
					<Text>Expresso Tradicional</Text>
					<Text className="font-bold">R$ 9,90</Text>
				</Flex>
				<Flex gap="md">
					<InputNumber />
					<Button
						variant="secondary"
						className="text-sm"
						icon={<TrashIcon size={16} />}
					>
						Remover
					</Button>
				</Flex>
			</div>
		</Flex>
	);
};
