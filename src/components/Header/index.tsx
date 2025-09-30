import CoffeDeliveryLogo from "@images/Logo.png";
import { Flex } from "@components/Flex";
import { CartStatus } from "./components/CartStatus";
import { Location } from "./components/Location";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="w-full py-8 flex items-center justify-between">
			<Link to="/">
				<img
					src={CoffeDeliveryLogo}
					alt="Coffee Delivery"
					className="h-12"
				/>
			</Link>

			<Flex gap="md">
				<Location />
				<Link to="/checkout">
					<CartStatus />
				</Link>
			</Flex>
		</header>
	);
};
