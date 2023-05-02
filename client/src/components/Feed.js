import React from "react";
import Post from "./Post";
import './Feed.css';

function Feed(props) {
    const l=() => {console.log(props.items.post_caption)}
    return (
            <div className="feed-container">
                <div className="feed-content">
                    {props.items.map((post) => (
                        <Post
                            name={post.followedID}
                            date={post.postdatetime}
                            post={post.post_caption}
                        />
                    ))}
                </div>
                </div>
    );
}

export default Feed;