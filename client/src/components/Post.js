import React from "react";
import "./Post.css";
import { format } from 'date-fns';

function Post(props) {
  const parsedDate = Date.parse(props.date);
  const name = props.first_name +" "+props.last_name;
  return (
    <div className="container">
      <div className="post-info">
        <div className="post-info-words">
          <div className="user-name">
            <strong>{name}</strong>
            </div>
          <div className="post-date">
            {format(parsedDate, 'do MMMM Y')}
            </div>
        </div>
      </div>
      <div>{props.post}</div>
    </div>
  );
}

export default Post;