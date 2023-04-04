import React from 'react';
import './NavRight.css'
import NavRightProfile from './NavRightProfile.js'

function NavRight(props) {
    return (
        <div className='list-container'>
            <ul>
                {props.items.map((friends, inx) => (
                    <NavRightProfile
                        photo={friends.photo}
                        name={friends.name}
                        key={inx}
                    />
                ))}
            </ul>
        </div>
    );
}

export default NavRight;