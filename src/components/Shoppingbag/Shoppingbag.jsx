import { Link } from "react-router-dom";
import "./Shoppingbag.css";
import LineItem from "../LineItem/LineItem";

export default function Shoppingbag({
  user,
  cart,
  isVisible,
  handleChangeQty,
  handleCheckout,
}) {
  return (
    <div
      className={`offcanvas offcanvas-end ${isVisible ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: isVisible ? "visible" : "hidden", zIndex: 1050 }}
      aria-labelledby="shoppingBagLabel"
      id="shoppingBagOffcanvas"
    >
      <div className="offcanvas-header">
        <h5 id="shoppingBagLabel">Shopping Bag</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        {/* check if user loggin in */}
        {user ? (
          <>
            <LineItem cart={cart} handleChangeQty={handleChangeQty} />
            <button className="btn btn-primary">TOTAL</button>
          </>
        ) : (
          <Link
            className="btn btn-primary"
            data-bs-dismiss="offcanvas"
            to="/login"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
