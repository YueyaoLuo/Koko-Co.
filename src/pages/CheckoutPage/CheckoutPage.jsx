import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

// Publishable key
const stripePromise = loadStripe(
  "pk_test_51PoGp601fP1DApNTNDL9rrm4k6jMZCjlrRVbKsC2DKFeGqTBsSpG0wIp90O696kHx65GPDiJqzq2H2cFpRDe2Zlf00vujPVw0b"
);

export default function CheckoutPage({ order, setCart, setIsBagVisible }) {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   if (order !== null) {
  //     setIsLoading(false);
  //   }
  // }, [order]);

  return (
    <div className="checkout-form">
      {/* {isLoading ? ( */}
      {/* <div className="spinner-border text-dark justify-content-center" role="status">
          <span className="visually-hidden justify-content-center">Loading...</span>
        </div> */}
      {/* ) : ( */}

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Your Order Details</h5>
              </div>
              <div className="card-body">
                {order.items.map((item, index) => (
                  <div className="row mb-3" key={index}>
                    <div className="col-md-4">
                      <p className="mb-1">
                        <strong>Item:</strong> {item.jewellery.name}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-1">
                        <strong>Qty:</strong> {item.qty}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-1">
                        <strong>Unit Price:</strong> AU${item.jewellery.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-footer">
                <p className="mb-0">
                  <strong>Total amount:</strong> AU${order.orderTotal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
      {/* delivery address form to be added*/}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Delivery Address</h5>
              </div>
              <div className="card-body">
                <form className="form-group">
                <div className="row mb-2">
                  <label>First Name:</label>
                  <input type="text" name="first name" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>Last Name:</label>
                  <input type="text" name="last name" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>Phone number:</label>
                  <input type="text" name="phone number" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>Street Address:</label>
                  <input type="text" name="street address" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>Suburb:</label>
                  <input type="text" name="suburb" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>State:</label>
                  <input type="text" name="state" className="form-control" required></input>
                </div>
                <div className="row mb-2">
                  <label>Postcode:</label>
                  <input type="text" name="postcode" className="form-control" required></input>
                </div>
                <button className="btn btn-primary">Save your details</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* stripe element to collect card details securely */}
        <Elements stripe={stripePromise}>
          <PaymentForm
            order={order}
            setCart={setCart}
            setIsBagVisible={setIsBagVisible}
          />
        </Elements>
      </div>
    </div>
  );
}
