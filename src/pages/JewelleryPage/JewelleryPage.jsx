import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
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
      <div className="row row-cols-1 row-cols-md-5 g-8 row-category">
        <div className="col">
          <div className="card h-50">
            <Link className="nav-link" to="/jewellery/newrelease">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg"
                className="card-img-top category-img "
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
      {/* all jewellery */}
        <div className="row row-cols-1 row-cols-md-5 g-5 row-jewellery">
          {jewellery.map((item) => (
            <div className="col" key={item._id}>
              <div className="card h-100" key={item._id}>
                <img
                  src={item.imageUrls[0]}
                  className="card-img-top"
                  alt="pic"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
}
