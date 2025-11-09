import type { Coffee } from "src/types/coffee.dto";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CoffeeItem {
	coffee: Coffee;
	quantity: number;
}

interface Address {
	zipCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
}

interface OrderDetails {
	address: Address;
	paymentMethod: "credit_card" | "debit_card" | "cash";
}

export interface CoffeeOrdersState {
	coffeeOrders: CoffeeItem[];
	addOrUpdateCoffeeOrder: (coffee: Coffee, quantity: number) => void;
	removeCoffeeOrder: (id: string) => void;
	getTotalPrice: () => number;
	getTotalItems: () => number;
	getDeliveryFee: () => number;
	orderDetails?: OrderDetails;
	setOrderDetails: (details: OrderDetails) => void;
}

export const useCoffeeOrders = create<CoffeeOrdersState>()(
	persist(
		(set, get) => ({
			orderDetails: undefined,

			setOrderDetails: (details: OrderDetails) =>
				set(() => ({ orderDetails: details })),

			coffeeOrders: [] as CoffeeItem[],

			getDeliveryFee: () => 3.5,

			addOrUpdateCoffeeOrder: (coffee: Coffee, quantity: number) => {
				console.log(
					`Adding or updating coffee order. coffee: ${coffee.name}, quantity: ${quantity}`
				);
				return set((state) => {
					console.log(coffee, quantity);
					const exists = state.coffeeOrders.find(
						(order) => order.coffee.id === coffee.id
					);

					if (quantity <= 0) {
						const filteredOrders = state.coffeeOrders.filter(
							(order) => order.coffee.id !== coffee.id
						);
						return {
							coffeeOrders: filteredOrders,
							totalItems: get().getTotalItems(),
							totalPrice: get().getTotalPrice(),
						};
					}

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
				});
			},

			removeCoffeeOrder: (id: string) =>
				set((state) => ({
					coffeeOrders: state.coffeeOrders.filter(
						(order) => order.coffee.id !== id
					),
					totalItems: get().getTotalItems(),
					totalPrice: get().getTotalPrice(),
				})),
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
