import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import "./../stylesheets/submitPost.css";
//Sumbit post page,Front end
function SubmitPost(props) {
  const userIdRef = props.userId;
  const postRef = useRef();
  const [didPost, setDidPost] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    submitPost();
  }
  const submitPost = () => {
    const userID = userIdRef;
    console.log(userID);
    const post = postRef.current.value;
    Axios.post("http://localhost:3001/submitPost", {
      userID: userID,
      post: post,
    }).then((response) => {
      // if node responds with a success message, set didPost to true and clear text box
      if (response.data.message === "Success") {
        setDidPost(true);
        postRef.current.value = "";
      } else {
        console.log("Post failed");
      }
    });
  };

  useEffect(() => {
    // Submits form when user presses enter and prevents input fields from being blank

    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        submitPost();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="container">
      {didPost ? <p>Post was successful</p> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <textarea type="input" id="postbox" ref={postRef}></textarea>
        </div>
        <div className="button-container">
          <button type="submit" id="postbutton">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitPost;
