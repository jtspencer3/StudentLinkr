import React, { useState, useRef } from "react";
import Axios from "axios";
import bcrypt from "bcryptjs";
import "./../components/Register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [isVisible, setVisible] = useState(false);
  const [formsNotFilled, setFormsNotFilled] = useState(false);

  const login = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username.trim().length === 0 || password.trim().length === 0) {
      setFormsNotFilled(true);
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    Axios.post("http://localhost:3001/login", {
      username: username,
      password: hashedPassword,
    }).then((response) => {
      if (response.data.message === "Success") {
        console.log(response.data.result);
        navigate(response.data.redirect);
      } else {
        setVisible(true);
      }
    });
  };

  return (
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
      <br />
      <Link to="/register" className="register-link">
        Don't have an account?
      </Link>
      {isVisible ? (
        <p className="error">Username/password is incorrect</p>
      ) : null}
      {formsNotFilled ? (
        <p className="error">Please fill out all fields</p>
      ) : null}
    </div>
  );
}

export default Login;
