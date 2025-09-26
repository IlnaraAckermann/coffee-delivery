import { Flex } from "@components/Flex";
import { Text } from "@components/Text";

interface CoffeeLabelProps {
	list?: string[];
}
export const CoffeeLabel = ({ list }: CoffeeLabelProps) => {
	return (
		<Flex
			className="mt-28 w-full"
			gap="sm"
			alignItems="center"
			justifyContent="center"
		>
			{list?.map((item) => (
				<Flex
					key={item}
					className="bg-yellow-light rounded-[100px] py-1 px-2"
				>
					<Text
						variant="tag"
						className=" text-yellow-dark "
					>
						{item.toUpperCase()}
					</Text>
				</Flex>
			))}
		</Flex>
	);
};
