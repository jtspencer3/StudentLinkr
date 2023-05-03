import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import bcrypt from "bcryptjs";
import "./../components/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const graduationYearRef = useRef();
  const repeatPasswordRef = useRef();

  const [isVisible, setVisible] = useState(false);
  const [formsNotFilled, setFormsNotFilled] = useState(false);

  Axios.defaults.withCredentials = true; //send info to front end to backend to see session is there

  function handleSubmit(e) {
    e.preventDefault();
    register();
  }

  const register = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const graduationYear = graduationYearRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);

    if (!(password === repeatPassword)) {
      setVisible(true);
      return;
    }
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      graduationYear.trim().length === 0 ||
      username.trim().length === 0 ||
      password.trim().length === 0
    ) {
      setFormsNotFilled(true);
      return;
    } else setFormsNotFilled(false);

    Axios.post("http://localhost:3001/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      graduationYear: graduationYear,
      username: username,
      password: hashedPassword,
    }).then((response) => {
      if (response.data.message === "Success") {
        navigate(response.data.redirect);
      }
    });
  };

  useEffect(() => {
    // Submits form when user presses enter and prevents input fields from being blank
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        register();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="registration">
      <h1>Create an account</h1>
      <form onClick={handleSubmit}>
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
          <input type="text" ref={graduationYearRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <label>
          Repeat Password:
          <input type="password" ref={repeatPasswordRef} />
        </label>
        <br />
        <button type="submit">Create Account</button>
        <br />
        {isVisible ? <p className="error">Passwords must match</p> : null}
        {formsNotFilled ? (
          <p className="error">Please fill out all fields</p>
        ) : null}
      </form>
    </div>
  );
}

export default Register;
