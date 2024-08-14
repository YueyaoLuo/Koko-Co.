import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import JewelleryPage from "../JewelleryPage/JewelleryPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import JewelleryDetailPage from "../JewelleryDetailPage/JewelleryDetailPage";
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {/* to make sure other components all displayed below navbar */}
      <div style={{ marginTop: "60px", marginBottom: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<AuthPage setUser={setUser} />}></Route>
          <Route path="/jewellery/:categoryName/:jewelleryId" element={<JewelleryDetailPage />} ></Route>
          <Route path="/jewellery/:categoryName" element={<CategoryPage />} ></Route>
          <Route path="/jewellery" element={<JewelleryPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      <Footer />
    </main>
  );
}
