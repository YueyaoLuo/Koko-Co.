import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

// Publishable key
const stripePromise = loadStripe('pk_test_51PoGp601fP1DApNTNDL9rrm4k6jMZCjlrRVbKsC2DKFeGqTBsSpG0wIp90O696kHx65GPDiJqzq2H2cFpRDe2Zlf00vujPVw0b');

export default function CheckoutPage({order}){



  return (
		<Elements stripe={stripePromise}>
      {/* delivery form */}
			<PaymentForm order={order}/>
		</Elements>
	)
}
