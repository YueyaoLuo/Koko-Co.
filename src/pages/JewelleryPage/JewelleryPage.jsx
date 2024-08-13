import { useState, useEffect } from "react";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import "./JewelleryPage.css";
import Category from "../../components/Category/Category";
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
      <JewelleryCard jewellery={jewellery} />
    </>
  );
}
