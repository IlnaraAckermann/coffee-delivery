import { Outlet } from "react-router-dom";
import { Flex } from "@components/Flex";
import { Header } from "@components/Header";

export default function DefaultLayout() {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			margin="none"
			className="min-h-screen max-w-[100rem] p-8 mx-auto "
		>
			<Header />
			<Outlet />
		</Flex>
	);
}
