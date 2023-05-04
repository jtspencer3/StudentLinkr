import React, { useEffect, useState } from "react";
import "./../components/Home.css";
import NavRight from "../components/NavRight";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Feed from "../components/Feed";
import SubmitPost from "../components/submitPost";
import ProfileNavLeft from "../components/ProfileNavLeft";

function Home(props) {
  const [postArray, setPostArray] = useState([]);
  const [followingArray, setFollowingArray] = useState([]);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  const loadHome = () => {
    const userID = userId; // change to dynamic based off cookie later

    //loads home feed posts based off of logged in user
    Axios.post("http://localhost:3001/getHome", {
      userID: userID,
    }).then((response) => {
      var passResult = response.data.postResults;
      setPostArray(passResult);
    });
  };
  const loadFollowing = () => {
    const userID = userId;
    Axios.post("http://localhost:3001/getFollowing", {
      userID: userID,
    }).then((response) => {
      var passResult = response.data.followingResults;
      setFollowingArray(passResult);
    });
  };
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
    loadHome();
    loadFollowing();
  }, [userId]);

  return (
    <div className="body">
      <div className="content">
        <div className="content-seven">
          <ProfileNavLeft items={props.items} />
          <div className="home">
            <Feed items={postArray} id={userId} />
          </div>
          <NavRight items={followingArray} />
        </div>
      </div>
    </div>
  );
}

export default Home;
