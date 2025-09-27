import { http, HttpResponse } from "msw";
import coffeeList from "./jsons/coffee-list.json";

const baseUrl = "https://api.example.com";

export const handlers = [
	http.get(`${baseUrl}/coffees`, () => {
		return HttpResponse.json(coffeeList);
	}),
];
