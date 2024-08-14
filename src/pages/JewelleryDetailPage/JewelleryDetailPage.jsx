import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as jewelleryAPI from "../../utilities/jewellery-api";

export default function JewelleryDetailPage() {
  const { categoryName, jewelleryId} = useParams();
  console.log({categoryName, jewelleryId})
  const [oneJewellery, setOneJewellery] = useState([]);
  useEffect(() => {
    async function getSpecificJewellery() {
      const jewellery = await jewelleryAPI.getOneJewellery(categoryName, jewelleryId);
      //   console.log("jewellery are:", jewellery)
      setOneJewellery(jewellery);
    }
    getSpecificJewellery();
  }, [ categoryName, jewelleryId]);

  return (
    <>
      <h3>JewelleryDetailPage</h3>
      <p>{oneJewellery.name}</p>
      <p>${oneJewellery.price}</p>
      
    </>
  );
}
