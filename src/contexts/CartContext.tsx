import type { Coffee } from "src/types/coffee.dto";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CoffeeItem {
	coffee: Coffee;
	quantity: number;
}

export interface CoffeeOrdersState {
	coffeeOrders: CoffeeItem[];
	addOrUpdateCoffeeOrder: (coffee: Coffee, quantity: number) => void;
	removeCoffeeOrder: (id: string) => void;
	totalPrice: number;
	totalItems: number;
	getTotalPrice: () => number;
	getTotalItems: () => number;
}

export const useCoffeeOrders = create<CoffeeOrdersState>()(
	persist(
		(set, get) => ({
			coffeeOrders: [] as CoffeeItem[],

			addOrUpdateCoffeeOrder: (coffee: Coffee, quantity: number) =>
				set((state) => {
					const exists = state.coffeeOrders.find(
						(order) => order.coffee.id === coffee.id
					);

					if (exists) {
						const updated = state.coffeeOrders.map((order) =>
							order.coffee.id === coffee.id ? { ...order, quantity } : order
						);
						return {
							coffeeOrders: updated,
							totalItems: get().getTotalItems(),
							totalPrice: get().getTotalPrice(),
						};
					}

					const newOrder: CoffeeItem = {
						coffee,
						quantity,
					};
					return {
						coffeeOrders: [...state.coffeeOrders, newOrder],
						totalItems: get().getTotalItems(),
						totalPrice: get().getTotalPrice(),
					};
				}),

			removeCoffeeOrder: (id: string) =>
				set((state) => ({
					coffeeOrders: state.coffeeOrders.filter(
						(order) => order.coffee.id !== id
					),
					totalItems: get().getTotalItems(),
					totalPrice: get().getTotalPrice(),
				})),
			totalItems: 0,
			totalPrice: 0,
			getTotalItems: () => {
				const state = get();
				return state.coffeeOrders.reduce(
					(total, order) => total + order.quantity,
					0
				);
			},

			getTotalPrice: () => {
				const state = get();
				return state.coffeeOrders.reduce((total, order) => {
					return total + order.coffee.price * order.quantity;
				}, 0);
			},
		}),
		{
			name: "coffee-orders",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
