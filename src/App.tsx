import { ShoppingCartIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./components/Button";
import { Flex } from "./components/Flex";
import { Tag } from "./components/Tag";
import { Select } from "./components/Select";

function App() {
	return (
		<Flex
			flexDirection="column"
			gap="lg"
			padding="lg"
			alignItems="center"
			justifyContent="center"
		>
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

export default App;
