import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
export default function NavBar({ user, setUser, setIsBagVisible }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          {/* left nav link to products */}
          <div className="d-flex flex-row">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
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
                  <Link className="dropdown-item" to="/jewellery">
                    All Jewellery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jewellery/bracelets">
                    Bracelets
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jewellery/earrings">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jewellery/necklaces">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jewellery/rings">
                    Rings
                  </Link>
                </li>
              </ul>
            </li>

            <Link className="nav-link" to="/jewellery/newrelease">
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
            <Link className="nav-link" onClick={() => setIsBagVisible(true)}>
              <ion-icon name="cart-outline">shop</ion-icon>
            </Link>

            {/* check if user has an account or not, if yes, show account, if no show AuthPage */}

            {user ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/users">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/users/login"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <Link className="nav-link" to="/users/login">
                <ion-icon name="person-outline"></ion-icon>
              </Link>
            )}

            {/* search bar */}
            <form className="d-flex">
              <input type="text" name="search" placeholder="Search" />
              <button className="btn btn-search" type="submit">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
