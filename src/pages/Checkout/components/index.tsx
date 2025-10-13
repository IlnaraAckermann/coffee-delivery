import { useState } from "react";
import { CheckoutSuccessMessage } from "../CheckoutSuccessMessage";
import { PaymentCheckoutForm } from "../PaymentCheckoutForm";

export const Checkout = () => {
	const [isSuccess, setIsSuccess] = useState(false);

	if (isSuccess) return <CheckoutSuccessMessage />;

	return <PaymentCheckoutForm onSuccess={() => setIsSuccess(true)} />;
};
