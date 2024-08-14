import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import "./JewelleryDetailPage.css";
export default function JewelleryDetailPage() {
  const { categoryName, jewelleryId } = useParams();
  //   console.log({categoryName, jewelleryId})
  const [oneJewellery, setOneJewellery] = useState(null);
  useEffect(() => {
    async function getSpecificJewellery() {
      const jewellery = await jewelleryAPI.getOneJewellery(
        categoryName,
        jewelleryId
      );
      //   console.log("jewellery are:", jewellery)
      setOneJewellery(jewellery);
    }
    getSpecificJewellery();
  }, [categoryName, jewelleryId]);

  if (!oneJewellery) return <div>Loading...</div>;
  return (
    <>
      <div className="container-fluid">
        <div className="card card-jewellery-detail mb-3">
          <div className="row row-detail-page">
            <div className="col-md-4">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {oneJewellery.imageUrls.map((url, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img src={url} className="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
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
                  data-bs-target="#carouselExampleControls"
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
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">{oneJewellery.name}</h5>
                <p className="card-text">{oneJewellery.description}</p>
                <p className="material-title">
                  <strong>Material</strong>
                </p>
                <ul className="card-text">
                  {oneJewellery.materials.map((material) => (
                    <li>{material}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary btn-add-to-bag"
                  type="submit"
                >
                  <span className="left-text">AU${oneJewellery.price}</span>
                  <span className="right-text">Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
