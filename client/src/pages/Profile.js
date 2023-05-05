import React, { useEffect, useState } from "react";
import "./../stylesheets/Profile.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [hasProfilePic, setHasProfilePic] = useState(false);

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
      });
    }
  }, [userId]);

  useEffect(() => {
    if (user) {
      if (user[0].hasImage == 0) {
        setHasProfilePic(false);
      } else {
        setHasProfilePic(true);
      }
    }
  });

  return (
    <div className="profile-container">
      {user && (
        <img
          className="profile-pic"
          src={
            hasProfilePic
              ? `${process.env.PUBLIC_URL}/uploads/${user[0].username}.png`
              : `${process.env.PUBLIC_URL}/uploads/DefaultIcon.png`
          }
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
      <Link to={"/editprofile"}>Edit Profile</Link>
      <br />
      <Link to={"/uploadphoto"}>Upload profile picture</Link>
    </div>
  );
}

export default Profile;
