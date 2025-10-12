import { Flex } from "@components/Flex";
import useCoffeeList from "./hooks/useCoffeeList";
import { CoffeeCard } from "../CoffeeCard";

export default function CoffeeList() {
	const { data: coffeeList, isLoading, isError } = useCoffeeList();

	if (isLoading) {
		return (
			<Flex
				justifyContent="center"
				alignItems="center"
				className="h-full w-full"
			>
				Loading...
			</Flex>
		);
	}

	if (isError || !coffeeList) {
		return (
			<Flex
				justifyContent="center"
				alignItems="center"
				className="h-full w-full"
			>
				Error loading coffee list.
			</Flex>
		);
	}

	return (
		<div className="mt-20 mb-20 grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 l:grid-cols-4 ">
			{coffeeList?.map((coffee) => (
				<CoffeeCard
					key={coffee.id}
					coffee={coffee}
				/>
			))}
		</div>
	);
}
