

export default function GiftSeason(){
    return(
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
    )
}