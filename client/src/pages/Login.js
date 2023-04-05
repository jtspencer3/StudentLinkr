import React, { useState, useRef } from "react";
import Axios from "axios";
import bcrypt from "bcryptjs";
import "./../components/Register.css";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const login = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);

    Axios.post("http://localhost:3001/login", {
      username: username,
      password: hashedPassword,
    }).then((response) => {
      console.log(response, " response goes here");
    });

    console.log(hashedPassword);
  };

  return (
    <div>
      <div className="login">
        <h1>Log In</h1>
        <label>
          Username:
          <input type="text" ref={usernameRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button type="submit" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
