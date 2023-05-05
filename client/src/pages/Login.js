import React, { useState, useRef, useEffect } from "react";
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

  Axios.defaults.withCredentials = true; //send info to front end to backend to see session is there

  useEffect(() => {
    Axios.post("http://localhost:3001/checkSession").then((response) => {
      if (response.data.message === "loggedIn") {
        navigate("/");
      }
    });
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  const login = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    //const hashedPassword = bcrypt.hashSync(password, 10);
    if (username.trim().length === 0 || password.trim().length === 0) {
      setFormsNotFilled(true);
      return;
    }

    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message === "Success") {
        console.log(response.data.result);
        navigate(response.data.redirect);
      } else {
        setVisible(true);
        console.log(response.data.message);
      }
    });
  };

  useEffect(() => {
    // Submits form when user presses enter and prevents input fields from being blank
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        login();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="login">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
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
      </form>
    </div>
  );
}

export default Login;
