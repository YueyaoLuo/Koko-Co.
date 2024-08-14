import { Link } from "react-router-dom";
import "./JewelleryCard.css"

export default function JewelleryCard({ item, categoryName }) {
  
  return (
    <div className="col" key={item._id}>
      <div className="card h-100 card-all" key={item._id}>
      <Link className="card h-100 card-all" to={`/jewellery/${categoryName}/${item._id}`}>
      <img
                src={item.imageUrls[0]}
                className="card-img-top"
                alt="pic"
              ></img>
              </Link>
        <button className="btn-price card-body" type="submit">
          <p className="card-title product-card-text">
            <strong>{item.name}</strong>
          </p>
          <p className="card-text product-card-text">${item.price}</p>
        </button>
      </div>
    </div>
  );
}
