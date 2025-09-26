import { CoffeeCard } from "./components/CoffeeCard";
import { Hero } from "./components/Hero";

export const Home = () => {
	return (
		<>
			<Hero />
			{/* <CoffeeList /> */}
			<CoffeeCard />
		</>
	);
};
