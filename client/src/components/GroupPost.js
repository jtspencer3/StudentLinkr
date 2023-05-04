import React from "react";
import "./GroupPost.css";
import { format } from 'date-fns';

function GroupPost(props) {
  //const parsedDate = Date.parse(props.date);
  return (
    <div className="container">
      <div className="post-info">
        <div className="post-info-words">
          <div className="user-name">
            <strong>{props.name}</strong>
            </div>
          {/* <div className="post-date">
            {format(parsedDate, 'do MMMM Y')}
            </div> */}
        </div>
      </div>
      <div>{props.bio}</div>
    </div>
  );
}

export default GroupPost;