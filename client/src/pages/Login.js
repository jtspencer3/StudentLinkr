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

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true; //send info to front end to backend to see session is there

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

  useEffect(()=> {                //Knows if you are logged in or not
    Axios.get("http://localhost:3001/login").then((response) => {
      if(response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].username);
      }
    })
  }, [])

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
