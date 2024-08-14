import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import Category from "../../components/Category/Category";
import "./JewelleryPage.css";
import JewelleryCard from "../../components/JewelleryCard/JewelleryCard";




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
          <JewelleryCard item={item} key={item._id}/>
        ))}
      </div>
    </>
  );
}
