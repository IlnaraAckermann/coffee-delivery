import { Route, Routes } from "react-router-dom";
import PageComponents from "./pages/PageComponents";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Checkout } from "./pages/Checkout";

const queryClient = new QueryClient();
export function Router() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route
					path="/"
					element={<DefaultLayout />}
				>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/components"
						element={<PageComponents />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
				</Route>
			</Routes>
		</QueryClientProvider>
	);
}
