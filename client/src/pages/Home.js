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




const posts = [
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  ,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },,{
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post_caption: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
];
function Home() {
  const [postArray, setPostArray] = useState([]);
  const navigate = useNavigate();

  const loadHome = () => {
    const userID = 5; // change to dynamic based off cookie later

    Axios.post("http://localhost:3001/getHome", {
      userID: userID
    }).then((response) => {
      var passResult = response.data.postResults;
      setPostArray(passResult);
    });
  };
  useEffect(() => {
    Axios.post("http://localhost:3001/checkSession").then((response) => {
      if (response.data.message === "loggedOut") {
        navigate(response.data.redirect);
      }
      // else{
        
      // }
    });
    loadHome();
  }, []);

  return (
    <div onLoad={loadHome} className="home">

      <Feed onLoad={loadHome} items={postArray} />
      {/* <Feed items={posts}/> */}
    </div>
  );
}

export default Home;
