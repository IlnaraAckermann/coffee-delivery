import { Input } from "@components/Input";
import { FieldSet } from "./components/FieldSet";
import { MapPinLineIcon } from "@phosphor-icons/react";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";

export const Checkout = () => {
	return (
		<form
			id="checkout-form"
			className="p-10 w-full max-w-3xl gap-8 flex flex-col lg:flex-row"
		>
			<FieldSet legend="Complete seu pedido">
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

			<FieldSet legend="Cafés selecionados"></FieldSet>
		</form>
	);
};
