import React from "react";
import Post from "./Post";
import "./Feed.css";
import SubmitPost from "./submitPost";

function Feed(props) {
  const l = () => {
    console.log(props.items.post_caption);
  };
  return (
    <div className="feed-container">
      <div className="feed-content">
        <SubmitPost userId={props.id} />
        {props.items.map((post) => (
          <Post
            first_name={post.first_name}
            last_name={post.last_name}
            date={post.postdatetime}
            post={post.post_caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
