import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import "./JewelleryPage.css";
export default function JewelleryPage() {
  const [jewellery, setJewellery] = useState([]);

  useEffect(() => {
    async function getJewellery() {
      const jewellery = await jewelleryAPI.getAll();
      setJewellery(jewellery);
    }
    getJewellery();
  }, []);

  return (
    <>
      {/* categories */}
      <h3 className="category-title">All Jewellery</h3>
      <div className="container container-category">
        <div className="row row-cols-md-5 g-3 row-category">
          <div className="col card-category">
            <Link className="nav-link category-link" to="/jewellery/newrelease">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg"
                className="card-img-top category-img category-img "
                alt="new"
              ></img>

              <p className="card-title">New Release</p>
            </Link>
          </div>
          <div className="col card-category">
            <Link className="nav-link category-link" to="/jewellery/bracelets">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/Love+links+2.png"
                class="card-img-top category-img"
                alt="bracelet"
              ></img>

              <p class="card-title">Bracelets</p>
            </Link>
          </div>
          <div className="col card-category">
            <Link className="nav-link category-link" to="/jewellery/earrings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Curly+C+2.png"
                class="card-img-top category-img"
                alt="earing"
              ></img>

              <p class="card-title">Earrings</p>
            </Link>
          </div>

          <div className="col card-category">
            <Link className="nav-link category-link" to="/jewellery/necklaces">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue+1.jpg"
                class="card-img-top category-img"
                alt="necklace"
              ></img>

              <p className="card-title">Necklaces</p>
            </Link>
          </div>
          <div className="col card-category">
            <Link className="nav-link category-link" to="/jewellery/rings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/miss+u+2.jpg"
                class="card-img-top category-img"
                alt="ring"
              ></img>

              <p class="card-title">Rings</p>
            </Link>
          </div>
        </div>
      </div>
      {/* all jewellery */}
      <div className="row row-cols-1 row-cols-md-5 g-5 row-jewellery">
        {jewellery.map((item) => (
          <div className="col" key={item._id}>
            <div className="card h-100 card-all" key={item._id}>
              <img
                src={item.imageUrls[0]}
                className="card-img-top"
                alt="pic"
              ></img>
              <div className="card-body">
                <p className="card-title"><strong>{item.name}</strong></p>
                <p className="card-text">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
