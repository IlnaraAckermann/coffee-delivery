import { Route, Routes } from "react-router-dom";
import PageComponents from "./pages/PageComponents";
import DefaultLayout from "./layouts/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route
				path="/"
				element={<DefaultLayout />}
			>
				<Route
					path="/"
					element={<PageComponents />}
				/>
			</Route>
		</Routes>
	);
}
