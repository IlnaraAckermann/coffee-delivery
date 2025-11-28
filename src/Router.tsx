import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout/components"));
const PageComponents = lazy(() => import("./pages/PageComponents"));

const queryClient = new QueryClient();
export function Router() {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<div>Loading...</div>}>
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
			</Suspense>
		</QueryClientProvider>
	);
}
