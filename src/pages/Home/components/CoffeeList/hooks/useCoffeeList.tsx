import { useQuery } from "@tanstack/react-query";
import type { Coffee } from "src/types/coffee.dto";

export default function useCoffeeList() {
	return useQuery<Coffee[]>({
		queryKey: ["coffee-list"],
		queryFn: async () => {
			const response = await fetch("https://api.example.com/coffees");
			if (!response.ok) {
				throw new Error("Failed to fetch coffee list");
			}
			return response.json();
		},
	});
}
