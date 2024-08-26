import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import * as ordersAPI from "../../utilities/orders-api";
// Publishable key
const stripePromise = loadStripe(
  "pk_test_51PoGp601fP1DApNTNDL9rrm4k6jMZCjlrRVbKsC2DKFeGqTBsSpG0wIp90O696kHx65GPDiJqzq2H2cFpRDe2Zlf00vujPVw0b"
);

export default function CheckoutPage({ order, setCart, setIsBagVisible }) {
  const userId = order.user;
  // console.log(userId);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(null);
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState(null);
  const [createSuccess, setCreateSuccess] = useState(false);
  async function createOrder(evt) {
    evt.preventDefault();
    try {
      const newOrder = {
        user: userId,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        street: street,
        suburb: suburb,
        state: state,
        postcode: postcode,
        items: order.items,
        isPaid: false,
      };
      const response = await ordersAPI.createDeliveryDetail(newOrder);
      console.log("Order created successfully:", response);
      if (response.success) {
        console.log("Successful save delivery details");
        setCreateSuccess(true);
      }
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  return (
    <div className="checkout-form">
      {/* order details */}
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
      {/* delivery details */}
      {!createSuccess ? (
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Delivery Address</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-address"
                    autoComplete="off"
                    onSubmit={createOrder}
                  >
                    <div className="row mb-1">
                      <label>First Name:</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>Last Name:</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>Phone number:</label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>Street Address:</label>
                      <input
                        type="text"
                        name="street"
                        className="form-control"
                        onChange={(e) => setStreet(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>Suburb:</label>
                      <input
                        type="text"
                        name="suburb"
                        className="form-control"
                        onChange={(e) => setSuburb(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>State:</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        onChange={(e) => setState(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="row mb-1">
                      <label>Postcode:</label>
                      <input
                        type="number"
                        name="postcode"
                        className="form-control"
                        onChange={(e) => setPostcode(e.target.value)}
                        required
                      ></input>
                    </div>
                    <button className="btn btn-primary">
                      Save your delivery details
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-4">
          <Elements stripe={stripePromise}>
            <PaymentForm
              order={order}
              setCart={setCart}
              setIsBagVisible={setIsBagVisible}
            />
          </Elements>
        </div>
      )}
    </div>
  );
}
