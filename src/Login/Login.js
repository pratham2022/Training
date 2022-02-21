import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import user from "../json/users.json";
import CryptoJS from "react";
import { AES, enc } from "crypto-js";
//n, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [login, setLogin] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();

    const u = user.users;

    for (var key in u) {
      if (u[key].email === email && u[key].password === password) {
        console.log("Login");
        setLogin(true);
        setId(u[key].user_id);
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
    }
  };

  return (
    <div>
      <Form onSubmit={loginHandler}>
        <table>
          <tr>
            <td>
              <h2>Login</h2>
            </td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input
                type={"text"}
                name={"email"}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input
                type={"password"}
                name={"password"}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <Button type={"submit"}>Login</Button>
            </td>
          </tr>
        </table>
      </Form>
    </div>
  );
};

export default Login;
