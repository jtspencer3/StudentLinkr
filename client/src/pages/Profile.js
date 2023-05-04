import React from "react";
import "./../stylesheets/Profile.css";
import Zach from "./../Zach.jpg";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   //Knows if you are logged in or not
  //   console.log("Begin useEffect");
  //   Axios.post("http://localhost:3001/checkSession").then((response) => {
  //     if (response.data.message === "loggedOut") {
  //       navigate(response.data.redirect);
  //     }
  //     console.log("Logged in");
  //     idRef.current = response.data.id;
  //     console.log(idRef.current);
  //     console.log("hello");
  //   });

  //   console.log("End useEffect");
  // }, [navigate]);

  const [userId, setUserId] = useState(null);
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

  // useEffect(() => {
  //   Axios.post("http://localhost:3001/loadProfile").then((response) => {});
  // });

  return (
    <div className="profile-container">
      <img className="profile-pic" src={Zach} alt="Profile" />
      <h1 className="name">Zach Bodmer</h1>
      <h3 className="username">@DaZach</h3>
      <h6 className="year">Graduation Year: 2023</h6>
      <p className="bio">
        This is the section for the bio, should we set a character limit for the
        bio? 150 characters is probably good enough
      </p>
    </div>
  );
}

export default Profile;
