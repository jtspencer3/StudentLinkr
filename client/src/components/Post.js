import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="container">
        <div><h4>Profile Name</h4><h6>Date/Time posted</h6>
        </div>
        <p>This will be where the post content goes. I do not know if 
            we should put a character limit on our posts or not but it is 
            something we should consider.</p>
    </div>
  );
}

export default Post; 