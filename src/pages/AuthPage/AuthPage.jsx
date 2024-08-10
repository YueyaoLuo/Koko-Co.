import LoginForm from "../../components/LoginForn/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";
export default function AuthPage({ setUser }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col form-container form-container-login">
            <h5>Log In</h5>
          <LoginForm setUser={setUser} />
        </div>
        

        <div className="col">
            <h5>Sign Up</h5>
          <SignUpForm setUser={setUser} />
        </div>
      </div>
    </div>
  );
}
