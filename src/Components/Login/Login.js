import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import Logo from "../../olx-logo.png";
import "./Login.css";
import { FireBaseContext } from "../../store/FireBaseContext";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { auth } = useContext(FireBaseContext);
  const navigate = useNavigate();
  const userValidation = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        //user redirected to homepage
        navigate("/");
      })
      .catch((error) => {
        alert(error.message); 
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="olx-logo"></img>
        <form onSubmit={userValidation}>
          <label htmlFor="f    name">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
