import React from 'react';
import './NavRight.css'
function ProfileNavLeft() {
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