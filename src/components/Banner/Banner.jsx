import { Link } from "react-router-dom";
import "./Banner.css"

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-8 col-12 banner-text">
              <h1 className="display-4">Koko & Co.</h1>
              <p className="lead">
                At KoKo & Co., we curate a collection of exquisite jewelry to
                help you showcase your unique style. Whether you're looking for
                a statement necklace, elegant earrings, or a delicate bracelet,
                we have the perfect piece to elevate your look.
              </p>
              <Link to="/jewellery" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
