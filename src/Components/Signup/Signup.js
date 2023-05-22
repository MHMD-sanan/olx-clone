import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../olx-logo.png";
import { FireBaseContext } from "../../store/FireBaseContext";

import "./Signup.css";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");
  const { auth, db } = useContext(FireBaseContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        }).then(() => {
          addDoc(collection(db, "users"), {
            id: res.user.uid,
            username: userName,
            phone: userPhone,
          })
            .then(() => {
              //user added to db
              navigate("/login");
            })
            .catch((err) => {
              console.log(err.message);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-div">
      <div className="signupParentDiv d-flex justify-content-between container ">
        <div className="col-lg-4">
          <img
            width="200px"
            height="200px"
            className="col-lg-none "
            src={Logo}
            alt="olx"
          ></img>
          <Link to="/login">Login</Link>
        </div>
        <div className=" form-div  ">
          <form onSubmit={handleSubmit} className="me-4">
            <label htmlFor="fname">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              className="input"
              type="number"
              id="lname"
              name="phone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="name"
              name="password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
            <br />
            <br />
            <button>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}
