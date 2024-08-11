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
      <h3 className="category-title">Shop By Category</h3>
      <div className="row row-cols-1 row-cols-md-5 g-4 row-category">
        <div className="col">
          <div className="card h-100">
            <Link className="nav-link" to="/jewellery/newrelease">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg"
                className="card-img-top"
                alt="new"
              ></img>
              <div className="card-body">
                <h5 className="card-title">New Release</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Link className="nav-link" to="/jewellery/bracelets">
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
        <div className="col">
          <div className="card h-100">
            <Link className="nav-link" to="/jewellery/earrings">
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
        <div className="col">
          <div className="card h-100">
            <Link className="nav-link" to="/jewellery/necklaces">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue+1.jpg"
                class="card-img-top"
                alt="necklace"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Necklaces</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Link className="nav-link" to="/jewellery/rings">
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
      <div className="card mb-3 card-carousel">
      <div className="row g-0">
        <div className="col-md-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/Home+page/gitf+season1.jpg"
                  className="d-block w-100"
                  alt="giftseason"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/Home+page/gitf+season2.jpg"
                  className="d-block w-100"
                  alt="giftseason"
                ></img>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h3 className="card-title">Perfect Spring Gifts</h3>
            <p className="card-text">
              Embrace the freshness of spring with our stunning jewelry
              collection, designed to celebrate the season of renewal and
              growth. Each piece captures the vibrant colors and delicate beauty
              of spring, making them the perfect gift for any occasion. Whether
              you're honoring a loved one or treating yourself, our jewelry adds
              a touch of elegance and joy to this blossoming season. Discover
              the perfect springtime gift that sparkles with the promise of new
              beginnings.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
