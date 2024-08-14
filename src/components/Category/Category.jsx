import {Link} from "react-router-dom";
import "./Category.css"

export default function Category(){
    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 row-category">
        <div className="col">
          <div className="card h-100 card-category">
            <Link className="nav-link category-link " to="/jewellery/newrelease">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Butterfly+vintage+2.jpg"
                className="card-img-top category-img"
                alt="new"
              ></img>
              <div className="card-body card-body-title">
                <h5 className="card-title category-title-smaller">New Release</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 card-category">
            <Link className="nav-link category-link " to="/jewellery/bracelets">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/bracelets/Love+links+2.png"
                className="card-img-top category-img"
                alt="bracelet"
              ></img>
              <div className="card-body card-body-title">
                <h5 className="card-title category-title-smaller">Bracelets</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 card-category">
            <Link className="nav-link category-link " to="/jewellery/earrings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/earrings/Curly+C+2.png"
                className="card-img-top category-img"
                alt="earing"
              ></img>
              <div className="card-body card-body-title">
                <h5 className="card-title category-title-smaller">Earrings</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 card-category">
            <Link className="nav-link category-link " to="/jewellery/necklaces">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/necklace/Rose+avenue+1.jpg"
                className="card-img-top category-img"
                alt="necklace"
              ></img>
              <div className="card-body card-body-title">
                <h5 className="card-title category-title-smaller">Necklaces</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 card-category">
            <Link className="nav-link category-link " to="/jewellery/rings">
              <img
                src="https://kokoandco.s3.ap-southeast-2.amazonaws.com/rings/miss+u+2.jpg"
                className="card-img-top category-img"
                alt="ring"
              ></img>
              <div className="card-body card-body-title">
                <h5 className="card-title category-title-smaller">Rings</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
}