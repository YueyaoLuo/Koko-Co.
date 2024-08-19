import { useState } from "react";
import LoginForm from "../../components/LoginForn/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="container container-auth">
      <div className="row">
        <div className="col form-container form-container-login">
          <p></p>
          <h3 onClick={() => setShowLogin(!showLogin)} className="Auth-text">
            {showLogin
              ? "Don't have an account? Sign Up"
              : "Exisitng Customer? Log In"}
          </h3>

          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </div>
      </div>
    </div>
  );
}
