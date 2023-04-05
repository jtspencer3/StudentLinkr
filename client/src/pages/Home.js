import React from "react";
import "./../components/Home.css";
import Post from "../components/Post";
import Register from "./Register";
import { Navbar } from "react-bootstrap";
import NavRight from "../components/NavRight";

function Home(props) {
  return (
    <div className="home">
      {/*<Navbar/>
      <NavRight/> */}
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
