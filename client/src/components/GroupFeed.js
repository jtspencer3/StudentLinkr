import React from "react";
import GroupPost from "./GroupPost";
import './GroupFeed.css';

function GroupFeed(props) {
    //const l=() => {console.log(props.items.post_caption)}
    return (
            <div className="feed-container">
                <div className="feed-content">
                    {props.items.map((post) => (
                        <GroupPost
                            name={post.organization_name}
                            bio={post.organization_bio}
                            // date={post.postdatetime}
                            // post={post.post_caption}
                        />
                    ))}
                </div>
                </div>
    );
}

export default GroupFeed;