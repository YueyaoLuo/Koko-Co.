import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import AuthPage from "../../pages/AuthPage/AuthPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {/* to make sure other components all displayed below navbar */}
      <div style={{ marginTop: "51px" }}>
        <HomePage />
      </div>



      <Routes>
        <Route path="/login" element={<AuthPage setUser={setUser} />}>
        </Route>
        <Route path='/' element={<HomePage />}>
        </Route>
      </Routes>
    </main>
  );
}
