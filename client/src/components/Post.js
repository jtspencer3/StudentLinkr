import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="container">
        <div><h4>{props.name}</h4><h6>{props.dateTime}</h6>
        </div>
        <p>{props.post}</p>
    </div>
  );
}

export default Post; 