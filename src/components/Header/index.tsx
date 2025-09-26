import CoffeDeliveryLogo from "@images/Logo.png";
import { Flex } from "@components/Flex";
import { CartStatus } from "./components/CartStatus";
import { Location } from "./components/Location";

export const Header = () => {
	return (
		<header className="w-full py-8 flex items-center justify-between">
			<img
				src={CoffeDeliveryLogo}
				alt="Coffee Delivery"
				className="h-12"
			/>
			<Flex gap="md">
				<Location />
				<CartStatus />
			</Flex>
		</header>
	);
};
