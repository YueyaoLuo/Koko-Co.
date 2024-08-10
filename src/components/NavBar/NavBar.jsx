import { Link, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import "./NavBar.css";
import AuthPage from "../../pages/AuthPage/AuthPage";
import * as userService from "../../utilities/users-service";
export default function NavBar({user, setUser}) {


  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          {/* left nav link to products */}
          <div className="d-flex flex-row">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Jewellery
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="">
                    Bracelets
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Rings
                  </Link>
                </li>
              </ul>
            </li>

            <Link className="nav-link" to="/newRelease">
              New Release
            </Link>
            <Link className="nav-link" to="/workshop">
              Workshop
            </Link>
          </div>
          {/* logo  */}
          <Link to="/">
            <img className="navbar-img" src="/logo_nobg.png" alt="logo" />
          </Link>
          {/* right side icons and search bar */}
          <div className="d-flex flex-row-reverse bd-highlight">
            <Link className="nav-link" to="/wishlist">
              <ion-icon name="heart-outline"></ion-icon>
            </Link>
            <Link className="nav-link" to="/shoppingcart">
              <ion-icon name="cart-outline">shop</ion-icon>
            </Link>

            {/* check if user has an account or not, if yes, show account, if no show AuthPage */}
            
            {user ? (
              <Link className="nav-link" to="/account">
                <ion-icon name="person-outline"></ion-icon>
            
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                <ion-icon name="person-outline"></ion-icon>
              </Link>
            )}

            <form className="d-flex">
              <input type="text" name="search" placeholder="Search" />
              <button className="btn btn-search" type="submit">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<AuthPage setUser={setUser} />}>
        </Route>
      </Routes>
    </>
  );
}
