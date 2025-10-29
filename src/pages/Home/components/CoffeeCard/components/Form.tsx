import { InputNumber } from "@components/InputNumber";
import { Text } from "@components/Text";
import { Flex } from "@components/Flex";
import { Button } from "@components/Button";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface FormProps {
	price?: string | number;
	addToCart?: (quantity: number) => void;
	currentOrderQuantity?: number;
}
export const Form = ({ price, addToCart, currentOrderQuantity }: FormProps) => {
	const navigate = useNavigate();

	const handleQuantityChange = (value: number) => {
		if (value < 0) {
			addToCart?.(0);
		} else {
			addToCart?.(value);
		}
	};
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
			<InputNumber
				value={currentOrderQuantity}
				onChange={(value) => {
					handleQuantityChange(value.target.valueAsNumber);
				}}
			/>
			<Button
				//a clicar vai para o carrinho link /checkout
				onClick={() => navigate("/checkout")}
				variant="tertiary"
				className="ml-2"
				icon={
					<ShoppingCartIcon
						size={16}
						weight="fill"
					/>
				}
			/>
		</Flex>
	);
};
