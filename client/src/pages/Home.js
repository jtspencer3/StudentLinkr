import React from "react";
import { useEffect } from "react";
import "./../components/Home.css";
import Post from "../components/Post";
import Register from "./Register";
import { Navbar } from "react-bootstrap";
import NavRight from "../components/NavRight";
import Login from "./Login";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    //Knows if you are logged in or not
    Axios.post("http://localhost:3001/checkSession").then((response) => {
      if (response.data.message === "loggedOut") {
        navigate(response.data.redirect);
      }
    });
  }, []);
  return (
    <div className="home">
      {props.items.map((posts, inx) => (
        <Post
          name={posts.photo}
          date={posts.name}
          post={posts.post}
          key={inx}
        />
      ))}
    </div>
  );
}

export default Home;
