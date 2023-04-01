import React, { useState, useRef } from "react";
import Axios from "axios";
import bcrypt from "bcryptjs";
import "./../components/Register.css";

function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const graduationYearRef = useRef();

  const register = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const graduationYear = graduationYearRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);

    Axios.post("http://localhost:3001/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      graduationYear: graduationYear,
      username: username,
      password: hashedPassword,
    }).then((response) => {
      console.log(response, " response goes here");
    });

    console.log(hashedPassword);
  };

  return (
    <div className="registration">
      <h1>Create an account</h1>
      <label>
        First Name:
        <input type="text" ref={firstNameRef} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" ref={lastNameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <label>
        Graduation Year:
        <input type="number" ref={graduationYearRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <label>
        Repeat Password:
        <input type="password" />
      </label>
      <br />
      <button type="submit" onClick={register}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
