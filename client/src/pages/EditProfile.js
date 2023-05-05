import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./../components/Register.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userYear, setUserYear] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  Axios.defaults.withCredentials = true; //send info to front end to backend to see session is there

  //Checks login
  useEffect(() => {
    Axios.post("http://localhost:3001/checkSession").then((response) => {
      if (response.data.message === "loggedOut") {
        navigate(response.data.redirect);
      } else {
        setUserId(response.data.userID);
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (userId !== null) {
      Axios.post("http://localhost:3001/loadUser", {
        userID: userId,
      }).then((response) => {
        const userData = response.data.user;
        setUser(userData);
        setFirstName(userData[0].first_name);
        setLastName(userData[0].last_name);
        setUsername(userData[0].username);
        setUserBio(userData[0].user_bio);
        setUserEmail(userData[0].user_email);
        setUserYear(userData[0].academic_year);
      });
    }
  }, [userId]);

  function handleSubmit(e) {
    e.preventDefault();
    editProfile();
  }

  const editProfile = () => {
    Axios.post("http://localhost:3001/editprofile", {
      firstName: firstname,
      lastName: lastname,
      email: userEmail,
      graduationYear: userYear,
      username: userName,
      bio: userBio,
    }).then((response) => {
      if (response.data.message === "Success") {
        setSuccessMessage("Changes were successful");
      } else {
        setSuccessMessage("Changes failed");
      }
    });
  };

  useEffect(() => {
    // Submits form when user presses enter and prevents input fields from being blank
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        editProfile();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="registration">
      {user && (
        <>
          <h1>Edit Your Account</h1>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Graduation Year:
              <input
                type="text"
                value={userYear}
                onChange={(e) => setUserYear(e.target.value)}
              />
            </label>
            <br />
            <label>
              Bio:
              <input
                type="text"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Edit Profile</button>
            <br />
            {successMessage ? <p>{successMessage}</p> : null}
          </form>
        </>
      )}
    </div>
  );
}

export default EditProfile;
