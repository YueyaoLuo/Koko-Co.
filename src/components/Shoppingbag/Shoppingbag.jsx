import { Link } from "react-router-dom";
import "./Shoppingbag.css";
import LineItem from "../LineItem/LineItem";

export default function Shoppingbag({
  user,
  order,
  isVisible,
  setIsBagVisible,
  handleChangeQty,
  handleCheckout,
  handleRemoveItem,
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
        <h5 id="shoppingBagLabel">SHOPPING BAG </h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-dismiss="offcanvas"
          onClick={() => setIsBagVisible(false)}
        ></button>
      </div>
      <div className="offcanvas-body">
        {/* check if user loggin in */}
        {user ? (
          <>
            
            {!order || order.isPaid || order.items.length <= 0? (
              <p className="empty-bag-text">Your shopping bag is empty.</p>
            ) : (
              <>
              <LineItem order={order} handleChangeQty={handleChangeQty} handleRemoveItem={handleRemoveItem}/>
                <div className="subtotal-text">
                  <p className="">SUBTOTAL</p>
                  <p className="">AU${order.orderTotal.toFixed(2)}</p>
                </div>
                <div className="btn-checkout">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <Link
            className="btn btn-primary"
            data-bs-dismiss="offcanvas"
            to="/users/login"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
