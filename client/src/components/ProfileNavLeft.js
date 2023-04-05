import React from 'react';
import './NavRight.css';
import ProfileNavLeftTab from "./ProfileNavLeftTab";
function ProfileNavLeft(props) {
    return(
     <div>
       <ul>
                {props.items.map((friends, inx) => (
                    <ProfileNavLeftTab
                        photo={friends.photo}
                        name={friends.name}
                        key={inx}
                    />
                ))}
            </ul>
       </div>
    )}
    export default ProfileNavLeft;