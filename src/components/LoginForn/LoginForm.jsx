// src/components/LoginForm/LoginForm.jsx
import { useState  } from "react";
import {useNavigate} from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
const navigate = useNavigate()
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      // console.log("Login User: ", user);
      setUser(user);
      // console.log(user)
      navigate('/');
      // console.log('navigating...')
    } catch (err) {
      // console.error("Login Error: ", err.message);
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-auth">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
