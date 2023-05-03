import React, { useEffect, useState } from "react";
import "./../components/Home.css";
import Post from "../components/Post";
import Register from "./Register";
import { Navbar } from "react-bootstrap";
import NavRight from "../components/NavRight";
import Login from "./Login";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Feed from "../components/Feed";
import SubmitPost from "../components/submitPost";

const posts = [
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption:
      "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
];
function Home() {
  const [postArray, setPostArray] = useState([]);
  const navigate = useNavigate();

  const loadHome = () => {
    const userID = 5; // change to dynamic based off cookie later

    //loads home feed posts based off of logged in user
    Axios.post("http://localhost:3001/getHome", {
      userID: userID,
    }).then((response) => {
      var passResult = response.data.postResults;
      setPostArray(passResult);
    });
  };

  // const userIdRef = props.userId;
  // const postRef = useRef();
  // const submitPost = () => {
  //   const userID = userIdRef;
  //   const post = postRef;
  //   Axios.post("http://localhost:3001/submitPost", {
  //     userID: userID,
  //     post: post,
  //   }).then((response) => {
  //     console.log(userID);
  //     if (response.data.message === "Success") {
  //       console.log(response.data.userID);
  //       // console.log(response.data.profile);
  //       // navigate(response.data.redirect);
  //     } else {
  //       console.log(response.data.message);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   Axios.post("http://localhost:3001/checkSession").then((response) => {
  //     if (response.data.message === "loggedOut") {
  //       navigate(response.data.redirect);
  //     }
  //   });

  // }, []);

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
    loadHome();
  }, [navigate]);

  return (
    <div onLoad={loadHome} className="home">
      {/* <div>
        <form onSubmit={submitPost}>
          <textarea type="input" id="postBox" ref={postRef}></textarea>
          <button type="submit" id="postButton">
            Post
          </button>
        </form>
      </div> */}
      <SubmitPost items={userId} />
      <Feed onLoad={loadHome} items={postArray} />
      {/* <Feed items={posts}/> */}
    </div>
  );
}

export default Home;
