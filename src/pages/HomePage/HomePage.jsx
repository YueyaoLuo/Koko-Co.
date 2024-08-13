import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import GiftSeason from "../../components/GiftSeason/GiftSeason";

export default function HomePage() {
  return (
    <>
      <div className="small-banner">
        <p>
          <strong>Free standard shipping over $100</strong>
        </p>
      </div>
      {/* banner */}
      <Banner />

      {/* shop by category */}
      <h3 className="category-title">Shop By Category</h3>
      <Category />

      {/* gift season */}
      <GiftSeason />
    </>
  );
}
