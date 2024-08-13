import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import Category from "../../components/Category/Category";
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
        <Category />
      </div>
      {/* all jewellery */}
      <div className="row row-cols-1 row-cols-md-5 g-5 row-jewellery">
        {jewellery.map((item) => (
          <div className="col" key={item._id}>
            <div className="card h-100 card-all" key={item._id}>
            <Link className="card h-100 card-all" to={`/jewellery/${item.category.name}/${item._id}`}><img
                src={item.imageUrls[0]}
                className="card-img-top"
                alt="pic"
              ></img></Link>
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
