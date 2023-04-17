import React from "react";
import "./../stylesheets/Profile.css";
import Zach from "./../Zach.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <img className="profile-pic" src={Zach} alt="Profile picture" />
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
