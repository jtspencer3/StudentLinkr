import React from 'react';
import './NavRight.css';
import NavRightProfile from './NavRightProfile.js'

function NavRight(props) {
    return (
        <div className='list-right-page-item'>
            <div className='list-right-container'>
                <div className='list-right-container-item'>
                    <div>
                        <ul>
                            <h3 className='list-right-header'>Following</h3>
                        </ul>
                        <ul>
                            {props.items.map((friends, inx) => (
                                <NavRightProfile
                                    photo={friends.photo}
                                    first_name={friends.first_name}
                                    last_name = {friends.last_name}
                                    username ={friends.username}
                                    key={inx}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavRight;