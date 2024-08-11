import { Link } from "react-router-dom";
import "./Footer.css";
export default function footer() {
  return (
    <>
<footer className="navbar sticky-bottom navbar-light bg-light">
      <div className="container-fluid footer-container w-100">
        <div className="row row-footer row justify-content-between">
          {/* Left Column */}
          <div className="col-md-5">
            <div className="newsletter">
              <h6>Latest from Koko</h6>
              <p className="text-footer">
                Be the first to know about exciting new designs, special events,
                store openings, and much more.
              </p>
              <form className="d-flex mb-3">
                <input
                  type="text"
                  name="input"
                  placeholder="Your email goes here..."
                  className="form-control"
                />
                <button className="btn btn-subscribe" type="submit">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="social">
              <p className="text-social">Get social with us</p>
              <Link
                className="nav-link"
                to="https://www.instagram.com/koko_andco"
              >
                <ion-icon name="logo-instagram" style={{ fontSize: "24px" }}></ion-icon>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5">
            <div className="text-footer">
              <h6>Returns</h6>
              <p className="text-footer">
                We offer a hassle-free refund policy for your peace of mind. If
                you are not completely satisfied with your purchase, you can
                return it within 14 days of the delivery.
              </p>
              <h6>Fast Delivery</h6>
              <p className="text-footer">
                At KoKo & Co., we understand the importance of timely delivery.
                We strive to provide fast and reliable shipping services for all
                our customers. Your jewelry will be carefully packaged and
                shipped to your doorstep in a timely manner. Shop with
                confidence knowing that your order will arrive on time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100">
        <p className="text-center m-0">&copy; Koko & Co. 2024</p>
      </div>
    </footer>
    </>
  );
}
