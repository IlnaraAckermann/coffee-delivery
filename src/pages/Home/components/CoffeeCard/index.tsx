import { Flex } from "@components/Flex";
import Coffee from "@images/arabe.png";
import { CoffeeLabel } from "./components/CoffeeLabel";
import { Text } from "@components/Text";
import { Form } from "./components/Form";

const list = ["Arabica", "Robusta", "Liberica"];
const title = "Expresso Tradicional";
const description =
	"É um café feito com grãos moídos e água quente, sem adição de leite ou outros ingredientes.";
const price = 9.9;
export const CoffeeCard = () => {
	return (
		<Flex
			className="bg-base-card rounded-bl-4xl rounded-br-md rounded-tr-4xl rounded-tl-md  shadow-md w-3xs h-80 relative mt-16"
			padding="lg"
			flexDirection="column"
			gap="md"
			alignItems="center"
			justifyContent="between"
		>
			<img
				src={Coffee as string}
				alt="Coffee"
				className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-32"
			/>

			<CoffeeLabel list={list} />
			<Flex flexDirection="column" alignItems="center" gap="sm">
			<Text
				variant="title-s"
				className="text-base-subtitle"
				>
				{title}
			</Text>
			<Text
				variant="text-s"
				className="text-base-label 
				text-center w-48 line-clamp-2"
				>
				{description}
			</Text>
				</Flex>
			<Form price={price} />
		</Flex>
	);
};
