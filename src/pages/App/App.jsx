import "./App.css";
import { useEffect, useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import JewelleryPage from "../JewelleryPage/JewelleryPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import JewelleryDetailPage from "../JewelleryDetailPage/JewelleryDetailPage";
import Shoppingbag from "../../components/Shoppingbag/Shoppingbag";
import * as ordersAPI from "../../utilities/orders-api";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import Account from "./AccountPage/Account";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const [isBagVisible, setIsBagVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
      
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await navigate("/orders/shoppingbag/checkout");
    setIsBagVisible(false);
  }

  async function handleRemoveItem(itemId) {
    const updatedCart = await ordersAPI.removeItemFromCart(itemId);
    setCart(updatedCart);
  }
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} setIsBagVisible={setIsBagVisible} />
      {/* to make sure other components all displayed below navbar */}
      <div style={{ marginTop: "60px", marginBottom: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/users" element={<Account user={user}/>}></Route>
          <Route path="/users/login" element={<AuthPage setUser={setUser} />}></Route>
          <Route
            path="/jewellery/:categoryName/:jewelleryId"
            element={
              <JewelleryDetailPage handleAddToOrder={handleAddToOrder} />
            }
          ></Route>
          <Route
            path="/jewellery/:categoryName"
            element={<CategoryPage />}
          ></Route>
          <Route path="/jewellery" element={<JewelleryPage />}></Route>
          <Route path="/orders/shoppingbag/checkout" element={<CheckoutPage order={cart} setCart={setCart} setIsBagVisible={setIsBagVisible}/>} />
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      <Shoppingbag
        user={user}
        order={cart}
        isVisible={isBagVisible}
        setIsBagVisible={setIsBagVisible}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
        handleRemoveItem={handleRemoveItem}
      />
      <Footer />
    </main>
  );
}
