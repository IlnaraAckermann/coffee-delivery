import { Flex } from "@components/Flex";
import { Tag } from "@components/Tag";
import { Text } from "@components/Text";
import { useCoffeeOrders } from "@contexts/CartContext";
import ManOnTheWay from "@images/man-on-the-way.png";

export const CheckoutSuccessMessage = () => {
	const { orderDetails } = useCoffeeOrders();
	const {
		address: { street, number, neighborhood, city, state } = {},
		paymentMethod,
	} = orderDetails ?? {};

	const paymentMethodMap: Record<string, string> = {
		credit_card: "Cartão de Crédito",
		debit_card: "Cartão de Débito",
		cash: "Dinheiro",
	};
	return (
		<Flex className="flex-col l:flex-row l:gap-24 items-center gap-8 mt-10 l:items-end">
			<div>
				<Text
					variant="title-l"
					as="h1"
					className="text-yellow-dark"
				>
					Uhu! Pedido confirmado
				</Text>
				<Text
					variant="text-l"
					className="text-base-subtitle"
				>
					Agora é só aguardar que logo o café chegará até você
				</Text>
				<Flex className="custom-border mt-4 min-w-xl">
					<div className="inner">
						<Tag
							color="purple"
							iconProps={{ name: "MapPinIcon", weight: "fill", size: 24 }}
							text={
								<Text className="ml-2">
									Entrega em{" "}
									<b>
										{street}, {number}
									</b>{" "}
									<br />
									{neighborhood} - {city}, {state}
								</Text>
							}
						/>
						<Tag
							color="yellow"
							iconProps={{ name: "Timer", weight: "fill", size: 24 }}
							text={
								<Text className="ml-2">
									Previsão de entrega
									<br />
									<b>20 min - 30 min</b>
								</Text>
							}
						/>
						<Tag
							color="yellow-dark"
							iconProps={{ name: "CurrencyDollarIcon", size: 24 }}
							text={
								<Text className="ml-2">
									Pagamento na entrega
									<br />
									<b>{paymentMethodMap[paymentMethod ?? "credit_card"]}</b>
								</Text>
							}
						/>
					</div>
				</Flex>
			</div>

			<div>
				<img
					src={ManOnTheWay as string}
					alt="Man on the way to deliver your order"
					className="w-full max-w-sm object-contain"
				/>
			</div>
		</Flex>
	);
};
