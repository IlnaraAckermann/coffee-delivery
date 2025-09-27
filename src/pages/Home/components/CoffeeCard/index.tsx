import { Flex } from "@components/Flex";
import { CoffeeLabel } from "./components/CoffeeLabel";
import { Text } from "@components/Text";
import { Form } from "./components/Form";
import type { Coffee } from "src/types/coffee.dto";

interface CoffeeCardProps {
	coffee: Coffee;
}

const getCoffeeImageUrl = (name: string) => {
	return `src/assets/images/${name}`;
};

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
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
				src={getCoffeeImageUrl(coffee.image)}
				alt="Coffee"
				className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-32"
			/>

			<CoffeeLabel list={coffee.tags} />
			<Flex
				flexDirection="column"
				alignItems="center"
				gap="sm"
			>
				<Text
					variant="title-s"
					className="text-base-subtitle"
				>
					{coffee.name}
				</Text>
				<Text
					variant="text-s"
					className="text-base-label 
				text-center w-48 line-clamp-2"
				>
					{coffee.description}
				</Text>
			</Flex>
			<Form price={coffee.price} />
		</Flex>
	);
};
