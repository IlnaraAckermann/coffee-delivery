import { Input } from "@components/Input";
import { FieldSet } from "./components/FieldSet";
import { MapPinLineIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { TextValue } from "./components/TextValue";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";

export const Checkout = () => {
	return (
		<form
			id="checkout-form"
			className="p-10 w-full gap-8 flex flex-col l:flex-row"
		>
			<FieldSet
				legend="Complete seu pedido"
				className="flex-3 h-fit"
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
					className="xl:max-w-[200px]"
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

			<FieldSet
				legend="Cafés selecionados"
				className="flex-2 h-fit gap-1"
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
			</FieldSet>
		</form>
	);
};
