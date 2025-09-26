import { InputNumber } from "@components/InputNumber";
import { Text } from "@components/Text";
import { Flex } from "@components/Flex";
import { Button } from "@components/Button";
import { ShoppingCartIcon } from "@phosphor-icons/react";

interface FormProps {
	price?: string | number;
}
export const Form = ({ price }: FormProps) => {
	return (
		<Flex
			alignItems="center"
			gap="sm"
		>
			<Text
				variant="text-s"
				className="text-base-text mr-1"
			>
				R$
			</Text>
			<Text
				variant="title-m"
				className="text-base-text"
			>
				{Number(price ?? 0)
					.toFixed(2)
					.replace(".", ",")}
			</Text>
			<InputNumber />
			<Button
				variant="tertiary"
				className="ml-2"
				icon={
					<ShoppingCartIcon
						size={16}
						weight="fill"
					/>
				}
			></Button>
		</Flex>
	);
};
