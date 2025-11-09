import { Input } from "@components/Input";
import { FieldSet } from "./components/FieldSet";
import { CurrencyDollarIcon, MapPinLineIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { TextValue } from "./components/TextValue";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import { GroupSelect } from "@components/SelectGroup";
import { Button } from "@components/Button";
import { useCoffeeOrders } from "@contexts/CartContext";
import { useForm, Controller } from "react-hook-form";

interface PaymentCheckoutFormProps {
	onSuccess: () => void;
}

interface CheckoutFormData {
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
	paymentMethod: "credit_card" | "debit_card" | "cash";
}

export const PaymentCheckoutForm = ({
	onSuccess,
}: PaymentCheckoutFormProps) => {
	const { coffeeOrders, getTotalPrice, getDeliveryFee, setOrderDetails } =
		useCoffeeOrders();

	const { register, handleSubmit, control } = useForm<CheckoutFormData>({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		defaultValues: { paymentMethod: "credit_card" },
	});

	const onSubmit = (data: CheckoutFormData) => {
		setOrderDetails({
			address: {
				zipCode: data.cep,
				street: data.street,
				number: data.number,
				complement: data.complement,
				neighborhood: data.neighborhood,
				city: data.city,
				state: data.state,
			},
			paymentMethod: data.paymentMethod,
		});
		onSuccess();
	};

	return (
		<form
			id="checkout-form"
			className="p-10 w-full gap-8 flex flex-col l:flex-row"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Flex
				flexDirection="column"
				gap="lg"
				className="h-fit grow"
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
						{...register("cep", { required: true })}
						placeholder="CEP"
						className="l:max-w-[200px]"
					/>
					<Input
						{...register("street", { required: true })}
						placeholder="Rua"
					/>
					<Flex
						flexDirection="column"
						className="sm:flex-row gap-4"
						flexgrow="grow"
					>
						<Input
							{...register("number", { required: true })}
							placeholder="Número"
						/>
						<Input
							{...register("complement")}
							placeholder="Complemento"
							className="sm:w-3/4"
							isOptional
						/>
					</Flex>
					<Flex
						flexDirection="column"
						className="sm:flex-row gap-4"
						flexgrow="grow"
						wrap
					>
						<Input
							{...register("neighborhood", { required: true })}
							placeholder="Bairro"
						/>
						<Input
							{...register("city", { required: true })}
							placeholder="Cidade"
						/>
						<Input
							{...register("state", { required: true })}
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
						<Controller
							name="paymentMethod"
							control={control}
							render={({ field }) => (
								<GroupSelect
									name="paymentMethod"
									value={field.value}
									onChange={(val) => field.onChange(val)}
									options={[
										{
											value: "credit_card",
											label: "Cartão de crédito",
											iconProps: { name: "CreditCard" },
										},
										{
											value: "debit_card",
											label: "Cartão de débito",
											iconProps: { name: "Bank" },
										},
										{
											value: "cash",
											label: "Dinheiro",
											iconProps: { name: "Money" },
										},
									]}
									className="mt-8 flex-wrap"
								/>
							)}
						/>
					</Flex>
				</FieldSet>
			</Flex>

			<FieldSet
				legend="Cafés selecionados"
				className="min-w-[450px] mt-4"
			>
				{coffeeOrders &&
					coffeeOrders.map((coffeeItem) => (
						<div key={coffeeItem.coffee.id}>
							<CheckoutCoffeeCard coffeeItem={coffeeItem} />
							<hr className="my-2 border-t border-base-button" />
						</div>
					))}

				<TextValue
					text="Total de itens"
					value={`R$ ${getTotalPrice().toFixed(2)}`}
					className="mt-4"
				/>
				<TextValue
					text="Entrega"
					value={`R$ ${getDeliveryFee().toFixed(2)}`}
				/>
				<TextValue
					text="Total"
					value={`R$ ${(getTotalPrice() + getDeliveryFee()).toFixed(2)}`}
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
