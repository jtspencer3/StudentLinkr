import React, { useEffect, useState } from "react";
import "./../stylesheets/Profile.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [hasProfilePic, setHasProfilePic] = useState(false);
  const [viewHasProfilePic, setviewHasProfilePic] = useState(false);
  const [isSameUser, setisSameUser] = useState(true);
  const [AllEffectsCompleted, setAllEffectsCompleted] = useState(false);
  const { username } = useParams();
  const [viewUser, viewSetUser] = useState(null);
  const testUser = 25;

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
      }).finally(()=>setAllEffectsCompleted(true));
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

  useEffect(() => {
    if (viewUser) {
      if (viewUser[0].hasImage == 0) {
        setviewHasProfilePic(false);
      } else {
        setviewHasProfilePic(true);
      }
    }
  });

  useEffect(() => {
    fetch(`/profile/${username}`)
      .then(res => res.json())
      .then(data => viewSetUser(data))
      .catch(error => console.error(error));
  }, [AllEffectsCompleted]);
  console.log("log username");
  console.log(username);
  console.log("React");
  console.log("log viewUser");
  console.log(viewUser);


  console.log("log userID");
  console.log(userId)
  useEffect(() => {
    if (userId !== null && viewUser !== null) {
      console.log("useEffect viewUser log")
      console.log(viewUser[0]?.user_id)
      if(userId === viewUser[0].user_id)
      setisSameUser(true);
    }
    else{
      setisSameUser(userId === testUser);
    }
  }, [AllEffectsCompleted]);
  console.log("log isSameUser");
  console.log(isSameUser);

//code integration
return (
  <div className="profile-container">
    {!isSameUser ?
    (viewUser && (
      <img
        className="profile-pic"
        src={
          viewHasProfilePic
            ? `${process.env.PUBLIC_URL}/uploads/${viewUser[0].username}.png`
            : `${process.env.PUBLIC_URL}/uploads/DefaultIcon.png`
        }
        alt="Profile"
      />
    )):(user && (
      <img
        className="profile-pic"
        src={
          hasProfilePic
            ? `${process.env.PUBLIC_URL}/uploads/${user[0].username}.png`
            : `${process.env.PUBLIC_URL}/uploads/DefaultIcon.png`
        }
        alt="Profile"
      />
    ))}
    {!isSameUser ?
       (viewUser && (
        <>
        {/* {console.log('div viewUser log')};
        {console.log(viewUser)}; */}
          <h1>
            {viewUser[0]?.first_name} {viewUser[0]?.last_name}
          </h1>
          <h3>@{viewUser[0]?.username}</h3>
          <h6>Graduation Year: {viewUser[0]?.academic_year}</h6>
          <p>Bio: {viewUser[0]?.user_bio}</p>
        </>
        )): (user && (
        <>
        {console.log("div user log")}
        {console.log(user)}
          <h1>
            {user[0].first_name} {user[0].last_name}
          </h1>
          <p>view</p>
          <h3>@{user[0].username}</h3>
          <h6>Graduation Year: {user[0].academic_year}</h6>
          <p>Bio: {user[0].user_bio}</p>
        </>
        ))
      }
      {!isSameUser ?
       (<br></br>): (<div>

     <Link to={"/editprofile"}>Edit Profile</Link>
    <br />
    <Link to={"/uploadphoto"}>Upload profile picture</Link></div>)}
  </div>
);


  //working code
  // return (
  //   <div className="profile-container">
  //     {user && (
  //       <img
  //         className="profile-pic"
  //         src={
  //           hasProfilePic
  //             ? `${process.env.PUBLIC_URL}/uploads/${user[0].username}.png`
  //             : `${process.env.PUBLIC_URL}/uploads/DefaultIcon.png`
  //         }
  //         alt="Profile"
  //       />
  //     )}
  //     {user && (
  //       <>
  //         <h1>
  //           {user[0].first_name} {user[0].last_name}
  //         </h1>
  //         <h3>@{user[0].username}</h3>
  //         <h6>Graduation Year: {user[0].academic_year}</h6>
  //         <p>Bio: {user[0].user_bio}</p>
  //       </>
  //     )}
  //     <Link to={"/editprofile"}>Edit Profile</Link>
  //     <br />
  //     <Link to={"/uploadphoto"}>Upload profile picture</Link>
  //   </div>
  // );
}

export default Profile;
