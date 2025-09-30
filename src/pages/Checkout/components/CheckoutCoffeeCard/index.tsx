import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { InputNumber } from "@components/InputNumber";
import { Text } from "@components/Text";
import { TrashIcon } from "@phosphor-icons/react";

export const CheckoutCoffeeCard = () => {
	return (
		<Flex className="w-full p-6 bg-base-card rounded-md gap-4">
			<img
				src="src/assets/images/arabe.png"
        alt="Café Arabe"
        className="w-16 h-16"
			/>
			<Flex
				flexDirection="column"
				gap="sm"
        flexGrow
			>
				<Flex gap="md" justifyContent="between">
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
			</Flex>
		</Flex>
	);
};
