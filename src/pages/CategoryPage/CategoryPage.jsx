import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";
import JewelleryCard from "../../components/JewelleryCard/JewelleryCard";

export default function CategoryPage() {
  const { categoryName } = useParams();
  //   console.log(categoryName )
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    async function getCategoryProductsAll() {
      const products = await jewelleryAPI.getCategoryProducts(categoryName);
      //   console.log("products are:", products)
      setCategoryProducts(products);
    }
    getCategoryProductsAll();
  }, [categoryName]);

  return (
    <>
      <h3 className="category-title">{categoryName.toUpperCase()}</h3>
      <div className="row row-cols-1 row-cols-md-5 g-5 row-jewellery">
        {categoryProducts.map((item) => (
          <JewelleryCard item={item} categoryName={categoryName} key={item._id}></JewelleryCard>
        ))}
      </div>
    </>
  );
}
