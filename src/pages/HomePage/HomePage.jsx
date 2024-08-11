import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      {/* banner */}
      <div className="banner-container">
        <div className="banner d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-8 col-12 banner-text">
                <h1 className="display-4">Koko & Co.</h1>
                <p className="lead">
                  At KoKo & Co., we curate a collection of exquisite jewelry to
                  help you showcase your unique style. Whether you're looking
                  for a statement necklace, elegant earrings, or a delicate
                  bracelet, we have the perfect piece to elevate your look.
                </p>
                <Link path="#" className="btn btn-primary btn-lg">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* shop by category */}
      <h1>Shop By Category</h1>
      <div class="row row-cols-1 row-cols-md-5 g-4">
        <div class="col">
          <div class="card h-100">
            <Link to="/jewellery/newrelease">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg"
                class="card-img-top"
                alt="new"
              ></img>
              <div class="card-body">
                <h5 class="card-title">New Release</h5>
              </div>
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Link to="/jewellery/bracelets">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/Love+links+2.png"
                class="card-img-top"
                alt="bracelet"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Bracelets</h5>
              </div>
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Link to="/jewellery/earrings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Curly+C+2.png"
                class="card-img-top"
                alt="earing"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Earrings</h5>
              </div>
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Link to="/jewellery/necklaces">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue+1.jpg"
                class="card-img-top"
                alt="necklace"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Necklaces</h5>
              </div>
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Link to="/jewellery/rings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/miss+u+2.jpg"
                class="card-img-top"
                alt="ring"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Rings</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* gift season */}
    </>
  );
}
