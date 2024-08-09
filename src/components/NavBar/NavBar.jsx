import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
export default function NavBar() {
  // function handleLogOut(){
  //   userService.logOut()
  //   setUser(null)
  // }
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        {/* left nav link to products */}
        <div class="d-flex flex-row">
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

          <Link className="nav-link" to="/NewRelease" >New Release</Link>
          <Link className="nav-link" to="/Workshop">Workshop</Link>
        </div>
        {/* logo  */}
        <Link to="/">
          <img className="navbar-img" src="/logo_nobg.png" alt="logo" />
        </Link>
        {/* right side icons and search bar */}
        <div class="d-flex flex-row-reverse bd-highlight">
          <Link className="nav-link" to="/Wishlist">
            <ion-icon name="heart-outline"></ion-icon>
          </Link>
          <Link className="nav-link" to="/Shoppingcart">
            <ion-icon name="cart-outline">shop</ion-icon>
          </Link>
          <Link className="nav-link" to="/Account">
            <ion-icon name="person-outline"></ion-icon>
          </Link>
          <form className="d-flex">
            <input
              type="text" name="search" placeholder="Search"
            />
            <button className="btn btn-search" type="submit">
            <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
