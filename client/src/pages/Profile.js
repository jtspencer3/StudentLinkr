import React, { useEffect, useState } from "react";
import "./../stylesheets/Profile.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [imagePath, setImagePath] = useState(null);

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
        console.log(userData.image);
        setImagePath(userData.image); // Set the imagePath state when you receive the image path from the server
      });
    }
  }, [userId]);

  return (
    <div className="profile-container">
      {user && (
        <img
          className="profile-pic"
          src={require(`../photos/${user[0].username}.png`)}
          alt="Profile"
        />
      )}
      {user && (
        <>
          <h1>
            {user[0].first_name} {user[0].last_name}
          </h1>
          <h3>@{user[0].username}</h3>
          <h6>Graduation Year: {user[0].academic_year}</h6>
          <p>Bio: {user[0].user_bio}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
