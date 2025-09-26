import { Flex } from "../components/Flex";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Button } from "@components/Button";
import Cart from "@components/Cart";
import { Input } from "@components/Input";
import { InputNumber } from "@components/InputNumber";
import { GroupSelect } from "@components/SelectGroup";
import { Tag } from "@components/Tag";

export default function MyComponents() {
	document.title = "Componentes - Coffee Delivery";
	return (
		<Flex
			flexDirection="column"
			gap="lg"
			padding="lg"
			alignItems="center"
			justifyContent="center"
		>
			<InputNumber />
			<Input placeholder="Insira um texto" />
			<Cart numberOfItems={3} />
			<Flex
				gap="md"
				alignItems="center"
			>
				<GroupSelect
					options={[
						{
							value: "creditCard",
							label: "Credit Card",
							iconProps: { name: "CreditCard" },
						},
						{
							value: "paypal",
							label: "PayPal",
							iconProps: { name: "PaypalLogo" },
						},
					]}
					name="paymentMethod"
					onChange={(value) => console.log("Selected payment method:", value)}
				/>
			</Flex>

			<Flex
				gap="md"
				alignItems="center"
				wrap
			>
				<Tag
					color="yellow"
					iconProps={{ name: "Coffee" }}
				/>
				<Tag
					color="yellow-dark"
					iconProps={{ name: "Package" }}
				/>
				<Tag
					color="purple"
					iconProps={{ name: "ShoppingCart" }}
				/>
				<Tag
					color="base"
					iconProps={{ name: "MapPin" }}
				/>
			</Flex>
			<Flex
				gap="md"
				alignItems="center"
				wrap
			>
				<Button
					variant="primary"
					size="m"
				>
					Primary Button
				</Button>
				<Button
					variant="primary"
					size="g"
					disabled
				>
					Large Primary Button disabled
				</Button>
				<Button
					variant="secondary"
					size="m"
				>
					Secondary Button
				</Button>
				<Button
					variant="secondary"
					size="g"
					disabled
				>
					Disabled Secondary Button
				</Button>
				<Button
					variant="primary"
					size="g"
					loading
				>
					Loading Primary Button
				</Button>

				<Button
					icon={
						<ShoppingCartIcon
							size={16}
							weight="fill"
						/>
					}
					variant="primary"
					size="g"
				/>

				<Button
					icon={
						<ShoppingCartIcon
							size={16}
							weight="fill"
						/>
					}
					variant="primary"
					size="g"
				/>

				<Button
					icon={
						<ShoppingCartIcon
							size={16}
							weight="fill"
							className="text-white"
						/>
					}
					variant="tertiary"
					size="g"
				>
					Button G with icon
				</Button>
				<Button
					icon={
						<ShoppingCartIcon
							size={16}
							weight="fill"
							className="text-white"
						/>
					}
					variant="tertiary"
					size="m"
				>
					Button M with icon
				</Button>
			</Flex>
		</Flex>
	);
}
