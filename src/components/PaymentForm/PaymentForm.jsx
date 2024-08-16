import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import "./PaymentForm.css";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000" },
      "::placeholder": { color: "#555" },
    },
    invalid: {
      iconColor: "#ff0000",
      color: "#ff0000",
    },
  },
};


export default function PaymentForm({order}) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        
        const { id } = paymentMethod;
        console.log(order.orderTotal)
        const amount = order.orderTotal;
        const response = await ordersAPI.payment(amount,id)
        console.log(response)
        if (response.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="container payment-container mt-5">
      {!success ? (
        <div className="col-md-8">
          <h3 className="text-center mb-4">Payment Information</h3>
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded bg-light payment-container"
          >
            <fieldset className="form-control">
              <div className="filedset">
                <CardElement options={CARD_OPTIONS} className="input" />
              </div>
            </fieldset>
            <button className="btn btn-primary btn-block">Pay</button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h2>Thank you! Your order is confirmed!</h2>
        </div>
      )}
    </div>
  );
}
