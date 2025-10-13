import { Input } from "@components/Input";
import { FieldSet } from "./components/FieldSet";
import { CurrencyDollarIcon, MapPinLineIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { TextValue } from "./components/TextValue";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import { GroupSelect } from "@components/SelectGroup";
import { Button } from "@components/Button";

export const PaymentCheckoutForm = ({
	onSuccess,
}: {
	onSuccess: () => void;
}) => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSuccess();
	};
	return (
		<form
			id="checkout-form"
			className="p-10 w-full gap-8 flex flex-col l:flex-row"
			onSubmit={handleSubmit}
		>
			<Flex
				flexDirection="column"
				gap="lg"
				className="h-fit grow order-2 l:order-1"
			>
				<FieldSet
					className="h-fit w-full mt-4 "
					legend="Complete seu pedido"
				>
					<Flex
						flexDirection="column"
						gap="sm"
					>
						<Flex alignItems="center">
							<MapPinLineIcon className="text-yellow-dark" />
							<Text
								variant="text-m"
								className="ml-2 text-base-subtitle"
							>
								Endereço de entrega
							</Text>
						</Flex>
						<Text
							variant="text-s"
							className="text-base-subtitle ml-6"
						>
							Informe o endereço onde deseja receber seu pedido
						</Text>
					</Flex>
					<Input
						name="cep"
						placeholder="CEP"
						className="l:max-w-[200px]"
					/>
					<Input
						name="street"
						placeholder="Rua"
					/>
					<Flex
						flexDirection="column"
						className="sm:flex-row gap-4"
						flexGrow
					>
						<Input
							name="number"
							placeholder="Número"
						/>
						<Input
							name="complement"
							placeholder="Complemento"
							className="sm:w-3/4"
							isOptional
						/>
					</Flex>
					<Flex
						flexDirection="column"
						className="sm:flex-row gap-4"
						flexGrow
						wrap
					>
						<Input
							name="neighborhood"
							placeholder="Bairro"
						/>
						<Input
							name="city"
							placeholder="Cidade"
						/>
						<Input
							name="state"
							placeholder="UF"
						/>
					</Flex>
				</FieldSet>

				<FieldSet className="h-fit w-full mt-4">
					<Flex
						flexDirection="column"
						gap="sm"
					>
						<Flex alignItems="center">
							<CurrencyDollarIcon className="text-purple" />
							<Text
								variant="text-m"
								className="ml-2 text-base-subtitle"
							>
								Pagamento
							</Text>
						</Flex>
						<Text
							variant="text-s"
							className="text-base-subtitle ml-6"
						>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</Text>

						<GroupSelect
							options={[
								{
									value: "creditCard",
									label: "Cartão de crédito",
									iconProps: { name: "CreditCard" },
								},
								{
									value: "debitCard",
									label: "Cartão de débito",
									iconProps: { name: "Bank" },
								},
								{
									value: "cash",
									label: "Dinheiro",
									iconProps: { name: "Money" },
								},
							]}
							name="paymentMethod"
							onChange={(value) =>
								console.log("Selected payment method:", value)
							}
							classname="mt-8"
						/>
					</Flex>
				</FieldSet>
			</Flex>

			<FieldSet
				legend="Cafés selecionados"
				className="min-w-[450px] mt-4 order-1 l:order-2"
			>
				<CheckoutCoffeeCard />
				<hr className="my-2 border-t border-base-button" />
				<CheckoutCoffeeCard />
				<hr className="my-2 border-t border-base-button" />
				<CheckoutCoffeeCard />
				<hr className="my-2 border-t border-base-button" />
				<TextValue
					text="Total de itens"
					value="R$ 29,70"
					className="mt-4"
				/>
				<TextValue
					text="Entrega"
					value="R$ 3,50"
				/>
				<TextValue
					text="Total"
					value="R$ 33,20"
					className="font-bold text-xl"
				/>

				<Button
					type="submit"
					size="g"
					form="checkout-form"
					className="text-center mt-6"
				>
					CONFIRMAR PEDIDO
				</Button>
			</FieldSet>
		</form>
	);
};
