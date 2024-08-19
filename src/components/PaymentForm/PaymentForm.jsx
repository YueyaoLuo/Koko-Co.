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


export default function PaymentForm({order, setCart, setIsBagVisible}) {
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
        console.log("order amount is: ", order.orderTotal)
        const amount = order.orderTotal;
        
        const response = await ordersAPI.payment(amount,id)
        console.log("response is: ", response)
        if (response.success) {
          console.log("Successful payment");
          setSuccess(true);
          setIsBagVisible(false);
          setCart(null);
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
        <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Payment Information</h5>
          </div>
          <div className="card-body">
          <form
            onSubmit={handleSubmit}
            className="p-4 payment-container"
          >
            <fieldset className="form-control">
              <div className="filedset">
                <CardElement options={CARD_OPTIONS} className="input" />
              </div>
            </fieldset>
            <button className="btn btn-primary btn-block">Pay</button>
          </form>
          </div>
          </div>
        </div>
        </div>
      ) : (
        <div className="text-center">
          <h2>Thank you! Your order is confirmed!</h2>
        </div>
      )}
    </div>
  );
}
