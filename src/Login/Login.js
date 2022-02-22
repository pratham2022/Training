import React, { useState } from "react";
import user from "../json/users.json";
import CryptoJS from "react";
import { AES, enc } from "crypto-js";
import { useNavigate } from "react-router-dom";
import "./Login.css";
//n, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();

    const u = user.users;

    for (var key in u) {
      if (u[key].email === email && u[key].password === password) {
        console.log("Login");
        setLogin(true);
        setId(u[key].user_id);
        // document.getElementById("link-button").style.display="none";
      }
    }
    if (login === true) {
      const encPassword = AES.encrypt(password, "PR@TH@M").toString();
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", encPassword);
      localStorage.setItem("Id", id);
      //console.log(localStorage.getItem("Id"));
      //   console.log(localStorage.getItem("Email"));
      //   console.log(localStorage.getItem("Password"));
      navigate("/invite");
      // <Redirect to="/invite"/>
      // return <Redirect to="/invite" />
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form onSubmit={loginHandler} className="login-form">
          <input
            type="text"
            placeholder="username"
            name={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type={"submit"}>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
