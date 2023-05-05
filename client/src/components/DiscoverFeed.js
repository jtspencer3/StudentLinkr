import React from "react";
import DiscoverPost from "./DiscoverPost";
import './DiscoverFeed.css';

function DiscoverFeed(props) {
    //const l=() => {console.log(props.items.post_caption)}
    return (
            <div className="feed-container">
                <div className="feed-content">
                    {props.items.map((post) => (
                        <DiscoverPost
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

export default DiscoverFeed;