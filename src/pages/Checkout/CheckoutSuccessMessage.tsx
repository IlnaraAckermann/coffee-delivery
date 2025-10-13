import { Flex } from "@components/Flex";
import { Tag } from "@components/Tag";
import { Text } from "@components/Text";
import ManOnTheWay from "@images/man-on-the-way.png";

export const CheckoutSuccessMessage = () => {
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
									Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
									Farrapos - Porto Alegre, RS
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
									<b>Cartão de Crédito</b>
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
