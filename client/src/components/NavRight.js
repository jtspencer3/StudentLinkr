import React from 'react';
import './NavRight.css';
import NavRightProfile from './NavRightProfile.js'

function NavRight(props) {
    return (
        <div className='list-left-page-item'>
            <div className='list-left-container'>
                <div className='list-left-container-item'>
                    <div>
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
                </div>
            </div>
        </div>
    );
}

export default NavRight;